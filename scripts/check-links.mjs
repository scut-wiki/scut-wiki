import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsRoot = path.join(root, 'docs');
const publicRoot = path.join(docsRoot, 'public');
const markdownLinkPattern = /!?\[[^\]]*\]\(([^)]+)\)|(?:src|href)="([^"]+)"/g;
const angleMarkdownLinkPattern = /!?\[[^\]]*\]\(<([^>]+)>\)/g;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.vitepress') return [];
      return walk(full);
    }
    return entry.isFile() && entry.name.endsWith('.md') ? [full] : [];
  });
}

function stripHashAndQuery(link) {
  return link.split('#')[0].split('?')[0];
}

function isExternal(link) {
  return /^(https?:|mailto:|tel:|blob:)/.test(link);
}

function existsDocPath(link) {
  const clean = stripHashAndQuery(decodeURI(link));
  if (!clean) return true;
  if (clean.startsWith('/legacy/') || clean.startsWith('/logo.svg')) {
    const publicPath = path.join(publicRoot, clean.replace(/^\//, ''));
    if (fs.existsSync(publicPath)) return true;
  }
  if (clean.startsWith('/')) {
    const docPath = path.join(docsRoot, clean.replace(/^\//, ''));
    return (
      fs.existsSync(`${docPath}.md`) ||
      fs.existsSync(path.join(docPath, 'index.md')) ||
      fs.existsSync(path.join(publicRoot, clean.replace(/^\//, '')))
    );
  }
  return null;
}

const errors = [];

for (const file of walk(docsRoot)) {
  let text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(angleMarkdownLinkPattern)) {
    const raw = match[1];
    if (!raw || raw.startsWith('#') || isExternal(raw)) continue;
    if (raw.startsWith('/') && !existsDocPath(raw)) {
      errors.push(`${path.relative(root, file)}: broken link ${raw}`);
    }
  }
  text = text.replace(angleMarkdownLinkPattern, '');
  for (const match of text.matchAll(markdownLinkPattern)) {
    const raw = match[1] || match[2];
    if (!raw || raw.startsWith('#') || isExternal(raw)) continue;
    const clean = stripHashAndQuery(raw);
    if (!clean) continue;
    if (clean.startsWith('/')) {
      if (!existsDocPath(clean)) errors.push(`${path.relative(root, file)}: broken link ${raw}`);
      continue;
    }
    const absolute = path.resolve(path.dirname(file), clean);
    if (
      !fs.existsSync(absolute) &&
      !fs.existsSync(`${absolute}.md`) &&
      !fs.existsSync(path.join(absolute, 'index.md'))
    ) {
      errors.push(`${path.relative(root, file)}: broken relative link ${raw}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`local links ok: ${walk(docsRoot).length} markdown files`);
