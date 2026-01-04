/**
 * SVG utilities for generating country flag SVGs
 */

export interface SVGOptions {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Generate a simple circular flag icon with country code
 * This is a lightweight placeholder. In production, you might want to use flag-icons or similar.
 */
export const generateFlagSVG = (
  countryCode: string,
  emoji: string,
  options: SVGOptions = {}
): string => {
  const { width = 32, height = 32, className = '' } = options;
  
  // Use emoji as text in SVG for maximum compatibility
  return `<svg width="${width}" height="${height}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="${className}">
  <text x="16" y="16" font-size="24" text-anchor="middle" dominant-baseline="central">${emoji}</text>
</svg>`;
};

/**
 * Generate a rounded rectangle flag SVG with gradient background
 */
export const generateStyledFlagSVG = (
  countryCode: string,
  emoji: string,
  options: SVGOptions = {}
): string => {
  const { width = 48, height = 36, className = '' } = options;
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 48 36" xmlns="http://www.w3.org/2000/svg" class="${className}">
  <rect width="48" height="36" rx="4" fill="#f3f4f6"/>
  <text x="24" y="18" font-size="20" text-anchor="middle" dominant-baseline="central">${emoji}</text>
</svg>`;
};
