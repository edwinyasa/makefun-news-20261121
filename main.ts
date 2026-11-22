import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// World News Summary 21 November 2026 entry generator
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const sourceImage = new URL('./entry.png', import.meta.url);
// Verify output file existence and size
const destImage = join(outputDir, 'entry.png');
copyFileSync(sourceImage, destImage);

import { statSync } from 'node:fs';
const stats = statSync(destImage);
console.log(`[makefun] Entry image output confirmed: ${destImage} (${stats.size} bytes)`);

