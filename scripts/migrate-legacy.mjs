import fs from 'node:fs';
import path from 'node:path';

const legacyRoot = process.env.LEGACY_DIR || '/private/tmp/gzic.online';
const targetRoot = path.resolve('docs/legacy/original');
const files = [
  'README.md',
  'freshman.md',
  'contacts.md',
  'study.md',
  'study/wei-lai-ji-shu-xue-yuan.md',
  'study/wu-xian-ming-zhi-neng-gong-cheng-xue-yuan.md',
  'study/sheng-wu-yi-xue-gong-cheng-xue-yuan.md',
  'study/qian-yan-ruan-wu-zhi-xue-yuan.md',
  'study/wei-dian-zi-he-ji-cheng-dian-lu-xue-yuan.md',
  'life.md',
  'cultures.md',
  'organizations.md',
  'transport.md',
  'goal.md',
  'future.md',
  'about.md',
];

const titles = new Map([
  ['README.md', '旧站 README'],
  ['freshman.md', '旧站：如果你是新生'],
  ['contacts.md', '旧站：黄页'],
  ['study.md', '旧站：学习篇'],
  ['study/wei-lai-ji-shu-xue-yuan.md', '旧站：未来技术学院'],
  ['study/wu-xian-ming-zhi-neng-gong-cheng-xue-yuan.md', '旧站：吴贤铭智能工程学院'],
  ['study/sheng-wu-yi-xue-gong-cheng-xue-yuan.md', '旧站：生物医学工程学院'],
  ['study/qian-yan-ruan-wu-zhi-xue-yuan.md', '旧站：前沿软物质学院'],
  ['study/wei-dian-zi-he-ji-cheng-dian-lu-xue-yuan.md', '旧站：微电子和集成电路学院'],
  ['life.md', '旧站：生活篇'],
  ['cultures.md', '旧站：校园文化篇'],
  ['organizations.md', '旧站：学生组织篇'],
  ['transport.md', '旧站：交通篇'],
  ['goal.md', '旧站：立志篇'],
  ['future.md', '旧站：飞跃手册'],
  ['about.md', '旧站：关于'],
]);

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) return markdown;
  const end = markdown.indexOf('\n---', 4);
  if (end < 0) return markdown;
  return markdown.slice(end + 4).replace(/^\n+/, '');
}

function rewriteAssetPaths(markdown) {
  return markdown
    .replace(
      /<figure><img src="blob:[^"]+"[^>]*><figcaption><\/figcaption><\/figure>/g,
      '\n\n::: info 缺失旧站素材\n旧站中此处有 GitBook blob 图片，但该临时素材未随旧仓库导出。\n:::\n',
    )
    .replaceAll('../.gitbook/assets/', '/legacy/assets/')
    .replaceAll('.gitbook/assets/', '/legacy/assets/')
    .replaceAll('image/', '/legacy/image/')
    .replaceAll('](freshman.md)', '](/legacy/original/freshman)')
    .replaceAll('](contacts.md)', '](/legacy/original/contacts)')
    .replaceAll('](study.md)', '](/legacy/original/study)')
    .replaceAll('](life.md)', '](/legacy/original/life)')
    .replaceAll('](organizations.md)', '](/legacy/original/organizations)')
    .replaceAll('](transport.md)', '](/legacy/original/transport)')
    .replaceAll('](goal.md)', '](/legacy/original/goal)')
    .replaceAll('](future.md)', '](/legacy/original/future)')
    .replaceAll('](about.md)', '](/legacy/original/about)');
}

function frontmatterFor(file) {
  return `---
title: ${JSON.stringify(titles.get(file) || file)}
category: legacy
campus: [wushan, university-town, gzic]
maintainers: [legacy-migration]
last_verified: 2024-09-08
source:
  - title: 华工手册旧站
    url: https://www.gzic.online
  - title: gzic.online 旧仓库
    url: https://github.com/MengyangGao/gzic.online
status: needs_review
---

::: warning 旧站迁移稿
本页由旧版“华工手册 / gzic.online”迁移而来，保留历史内容和来源语境。页面中的电话、链接、群号、政策和时间安排可能已经过期，请以学校官方信息和最新贡献为准。
:::

`;
}

fs.rmSync(targetRoot, { recursive: true, force: true });

for (const file of files) {
  const source = path.join(legacyRoot, file);
  if (!fs.existsSync(source)) {
    console.warn(`skip missing ${file}`);
    continue;
  }
  const target = path.join(targetRoot, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const markdown = rewriteAssetPaths(stripFrontmatter(fs.readFileSync(source, 'utf8')));
  fs.writeFileSync(target, frontmatterFor(file) + markdown);
}

const index = `---
title: 旧站原文迁移
category: legacy
campus: [wushan, university-town, gzic]
maintainers: [legacy-migration]
last_verified: 2024-09-08
source:
  - title: 华工手册旧站
    url: https://www.gzic.online
  - title: gzic.online 旧仓库
    url: https://github.com/MengyangGao/gzic.online
status: needs_review
---

# 旧站原文迁移

这里保存旧版“华工手册 / gzic.online”的 Markdown 原文迁移稿，用作历史归档、内容追溯和后续结构化重写的依据。

## 页面

${files
  .filter((file) => fs.existsSync(path.join(legacyRoot, file)))
  .map((file) => `- [${titles.get(file) || file}](/legacy/original/${file.replace(/\.md$/, '')})`)
  .join('\n')}
`;

fs.writeFileSync(path.join(targetRoot, 'index.md'), index);
