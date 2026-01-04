/**
 * Simple test to verify the package functionality
 */

import {
  getCountryEmoji,
  getCountryData,
  getAllCountries,
  searchCountries,
  getCountrySVG,
  getCountryStyledSVG
} from './src/index';

console.log('🧪 Testing easy-country-icon...\n');

// Test 1: Get country emoji
console.log('Test 1: Get country emoji');
console.log('US:', getCountryEmoji('US'));
console.log('CN:', getCountryEmoji('CN'));
console.log('JP:', getCountryEmoji('JP'));
console.log('');

// Test 2: Get country data
console.log('Test 2: Get country data');
const usData = getCountryData('US');
console.log('US Data:', usData);
console.log('');

// Test 3: Search countries
console.log('Test 3: Search countries');
const searchResults = searchCountries('united');
console.log(`Search "united" found ${searchResults.length} results:`);
searchResults.forEach(c => console.log(`  - ${c.emoji} ${c.name} (${c.code})`));
console.log('');

// Test 4: Get all countries
console.log('Test 4: Get all countries');
const allCountries = getAllCountries();
console.log(`Total countries: ${allCountries.length}`);
console.log('First 5:', allCountries.slice(0, 5).map(c => `${c.emoji} ${c.code}`).join(', '));
console.log('');

// Test 5: Generate SVG
console.log('Test 5: Generate SVG');
const svg = getCountrySVG('US', { width: 32, height: 32 });
console.log('SVG length:', svg.length, 'chars');
console.log('SVG preview:', svg.substring(0, 100) + '...');
console.log('');

// Test 6: Generate styled SVG
console.log('Test 6: Generate styled SVG');
const styledSvg = getCountryStyledSVG('CN', { width: 48, height: 36 });
console.log('Styled SVG length:', styledSvg.length, 'chars');
console.log('');

// Test 7: Case insensitive
console.log('Test 7: Case insensitive');
console.log('us (lowercase):', getCountryEmoji('us'));
console.log('Us (mixed):', getCountryEmoji('Us'));
console.log('');

// Test 8: Invalid code
console.log('Test 8: Invalid code handling');
console.log('XX (invalid):', getCountryEmoji('XX') || '(empty string)');
console.log('');

console.log('✅ All tests completed!');
