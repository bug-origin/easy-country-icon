#!/usr/bin/env node

/**
 * Generate svg-icons/index.ts from available SVG files
 * Run this after adding new SVG files to auto-update the exports
 */

const fs = require('fs');
const path = require('path');

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

// Generate TypeScript content
const content = `/**
 * SVG Icons Index
 * Auto-generated exports for all flag SVG files
 * Generated on: ${new Date().toISOString()}
 * 
 * Usage:
 * import { US, CN, JP } from 'easy-country-icon/svg-icons';
 * // <img src={US} alt="US Flag" />
 */

// Export individual flag SVG paths as constants
${files.map(code => {
  const upper = code.toUpperCase();
  return `export const ${upper} = 'easy-country-icon/svg-icons/flags/${code}.svg' as const;`;
}).join('\n')}

// Export country code mapping
export const SVG_FILES: Record<string, string> = {
${files.map(code => `  ${code.toUpperCase()}: 'easy-country-icon/svg-icons/flags/${code}.svg',`).join('\n')}
};

/**
 * Get SVG file path by country code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns SVG file path or undefined
 */
export function getSVGPath(code: string): string | undefined {
  return SVG_FILES[code.toUpperCase()];
}

/**
 * Check if SVG exists for country code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns boolean
 */
export function hasSVG(code: string): boolean {
  return code.toUpperCase() in SVG_FILES;
}

/**
 * Get all available SVG country codes
 * @returns Array of country codes that have SVG files
 */
export function getAvailableSVGCodes(): string[] {
  return Object.keys(SVG_FILES);
}
`;

// Write to file
fs.writeFileSync(outputFile, content, 'utf-8');

console.log(`✅ Generated svg-icons/index.ts with ${files.length} SVG exports:`);
console.log(`   ${files.map(f => f.toUpperCase()).join(', ')}`);
