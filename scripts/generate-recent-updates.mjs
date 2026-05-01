import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const output = join(root, 'docs/.vitepress/theme/recent-updates.generated.ts');

function readRecentCommits() {
  try {
    const result = execFileSync('git', ['log', '-5', '--pretty=format:%H%x1f%cs%x1f%s%x1e'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });

    return result
      .split('\x1e')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [hash, date, message] = line.split('\x1f');
        return { hash, date, message };
      });
  } catch {
    return [];
  }
}

const updates = readRecentCommits();
const source = `export interface RecentUpdate {
  hash: string;
  date: string;
  message: string;
}

export const recentUpdates: RecentUpdate[] = ${JSON.stringify(updates, null, 2)};
`;

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, source);
