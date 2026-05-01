import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve('docs');
const required = [
  'title',
  'category',
  'campus',
  'maintainers',
  'last_verified',
  'source',
  'status',
];
const allowedStatus = new Set(['active', 'needs_review', 'stale', 'archived', 'draft']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.vitepress' || entry.name === 'public') return [];
      return walk(full);
    }
    return entry.isFile() && entry.name.endsWith('.md') ? [full] : [];
  });
}

function parseFrontmatter(file) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---', 4);
  if (end < 0) return null;
  const raw = text.slice(4, end).trim();
  const values = new Map();
  for (const line of raw.split('\n')) {
    const match = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (match) values.set(match[1], match[2].trim());
  }
  return values;
}

const errors = [];

for (const file of walk(docsRoot)) {
  const rel = path.relative(process.cwd(), file);
  const fm = parseFrontmatter(file);
  if (!fm) {
    errors.push(`${rel}: missing frontmatter`);
    continue;
  }
  for (const key of required) {
    if (!fm.has(key)) errors.push(`${rel}: missing ${key}`);
  }
  const status = fm.get('status');
  if (status && !allowedStatus.has(status)) {
    errors.push(`${rel}: invalid status ${status}`);
  }
  const date = fm.get('last_verified');
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    errors.push(`${rel}: last_verified must be YYYY-MM-DD`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`frontmatter ok: ${walk(docsRoot).length} markdown files`);
