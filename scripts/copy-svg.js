#!/usr/bin/env node

/**
 * Copy SVG files to dist directory
 * Run after build to ensure SVG files are in the correct location
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/svg-icons/flags');
const destDir = path.join(__dirname, '../dist/svg-icons/flags');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all SVG files
const files = fs.readdirSync(srcDir);
let copiedCount = 0;

files.forEach(file => {
  if (file.endsWith('.svg')) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    copiedCount++;
  }
});

console.log(`✅ Copied ${copiedCount} SVG files to dist/svg-icons/flags/`);
