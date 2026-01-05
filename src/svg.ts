/**
 * SVG-based country icons
 * Support both inline SVG generation and file imports
 */

import { countries } from './data/countries';

/**
 * Get SVG relative path for bundler import
 * @param code - ISO 3166-1 alpha-2 country code (optional)
 * @returns SVG relative path or array of all codes
 */
export function getCountrySvg(code?: string): string | string[] {
  if (!code) return Object.keys(countries);
  const upperCode = code.toUpperCase();
  if (!countries[upperCode]) return '';
  // Return relative path that bundlers can resolve
  return `easy-country-icon/svg-icons/flags/${upperCode}.svg`;
}
