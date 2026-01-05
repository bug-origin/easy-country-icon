/**
 * easy-country-icon
 * Lightweight country icons library with emoji and SVG support
 */

// Export emoji functions
export { getCountryEmoji, hasCountry } from './emoji';

// Export SVG data URLs (supports tree-shaking)
export * from './svg-icons/index';

// Usage:
// import { US, CN, getCountry } from 'easy-country-icon';
// <img src={US} />              // tree-shakeable
// <img src={getCountry('US')} /> // dynamic
