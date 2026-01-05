#!/usr/bin/env node

/**
 * Generate svg-icons/index.ts with inline data URLs
 * Supports tree-shaking when using named imports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const flagsDir = path.join(__dirname, '../src/svg-icons/flags');
const outputFile = path.join(__dirname, '../src/svg-icons/index.ts');

// Read all SVG files
const files = fs.readdirSync(flagsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''))
  .sort();

if (files.length === 0) {
  console.log('⚠️  No SVG files found in src/svg-icons/flags/');
  process.exit(0);
}

// Convert SVG to data URL
function svgToDataUrl(svgContent) {
  const encoded = encodeURIComponent(svgContent.trim())
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

// Generate exports
const exportsCode = files.map(code => {
  const upper = code.toUpperCase();
  const svgPath = path.join(flagsDir, `${code}.svg`);
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  const dataUrl = svgToDataUrl(svgContent);
  return `export const ${upper} = '${dataUrl}';`;
}).join('\n');

const content = `/**
 * Country Flag Data URLs
 * Auto-generated - supports tree-shaking
 *
 * Usage:
 * import { US, CN } from 'easy-country-icon/svg-icons';
 * <img src={US} />
 *
 * Or dynamic:
 * import { getCountry } from 'easy-country-icon/svg-icons';
 * <img src={getCountry('US')} />
 */

${exportsCode}

const flags: Record<string, string> = { ${files.map(c => c.toUpperCase()).join(', ')} };

export function getCountry(code: string): string {
  return flags[code.toUpperCase()] || '';
}

export function hasCountry(code: string): boolean {
  return code.toUpperCase() in flags;
}

export function getAllCodes(): string[] {
  return Object.keys(flags);
}
`;

fs.writeFileSync(outputFile, content, 'utf-8');
console.log(`✅ Generated ${files.length} flag data URLs`);
