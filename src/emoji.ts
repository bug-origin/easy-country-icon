/**
 * Emoji-based country icons
 * Lightweight and native - no external dependencies needed
 */

import { countries } from './data/countries';

/**
 * Get country flag emoji by country code
 * @param code - ISO 3166-1 alpha-2 country code (e.g., 'US', 'CN', 'GB')
 * @returns Flag emoji or empty string if not found
 */
export const getCountryEmoji = (code: string): string => {
  const country = countries[code.toUpperCase()];
  return country?.emoji || '';
};


/**
 * Check if a country code is valid (emoji or svg)
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns true if supported
 */
export const hasCountry = (code: string): boolean => {
  return !!countries[code.toUpperCase()];
};

// ...existing code...
