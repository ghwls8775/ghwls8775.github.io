import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const pages = ['about', 'research', 'talks', 'news', 'contact'];

for (const page of pages) {
  const pageDirectory = join(outputDirectory, page);
  await mkdir(pageDirectory, { recursive: true });
  await copyFile(join(outputDirectory, `${page}.html`), join(pageDirectory, 'index.html'));
}

console.log(`Prepared ${pages.length} clean URLs for GitHub Pages.`);
