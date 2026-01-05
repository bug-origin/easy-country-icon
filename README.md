# easy-country-icon

A lightweight country icons library with emoji and SVG support, fully tree-shakable.

[![npm version](https://img.shields.io/npm/v/easy-country-icon.svg)](https://www.npmjs.com/package/easy-country-icon)
[![npm downloads](https://img.shields.io/npm/dm/easy-country-icon.svg)](https://www.npmjs.com/package/easy-country-icon)
[![bundle size](https://img.shields.io/bundlephobia/minzip/easy-country-icon)](https://bundlephobia.com/package/easy-country-icon)
[![license](https://img.shields.io/npm/l/easy-country-icon.svg)](https://github.com/bug-origin/easy-country-icon/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/US.svg" width="48" alt="US" title="United States"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/CN.svg" width="48" alt="CN" title="China"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/GB.svg" width="48" alt="GB" title="United Kingdom"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/JP.svg" width="48" alt="JP" title="Japan"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/DE.svg" width="48" alt="DE" title="Germany"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/FR.svg" width="48" alt="FR" title="France"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/CA.svg" width="48" alt="CA" title="Canada"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/AU.svg" width="48" alt="AU" title="Australia"/>
</p>

## Features

- Zero dependencies
- Tree-shakable - only bundle what you use
- Dual mode - Emoji and SVG flags
- TypeScript support
- Case insensitive - works with 'US', 'us', 'Us'
- 194 countries supported

## Installation

```bash
npm install easy-country-icon
```

## Usage

### SVG Flags (Recommended)

```typescript
// Static import - tree-shakable, only bundles US and CN (~2KB)
import { US, CN } from 'easy-country-icon';

<img src={US} alt="US" />
<img src={CN} alt="CN" />
```

```typescript
// Dynamic import - bundles all flags (~160KB)
import { getCountry } from 'easy-country-icon';

<img src={getCountry('US')} alt="US" />
<img src={getCountry(countryCode)} alt={countryCode} />
```

### Emoji Flags

```typescript
import { getCountryEmoji, hasCountry } from 'easy-country-icon';

getCountryEmoji('US');  // '🇺🇸'
getCountryEmoji('cn');  // '🇨🇳'
hasCountry('JP');       // true
```

## API

| Function | Description | Returns |
|----------|-------------|---------|
| `US`, `CN`, `JP`, ... | SVG data URL constants | `string` |
| `getCountry(code)` | Get SVG data URL by code | `string` |
| `getCountryEmoji(code)` | Get emoji flag | `string` |
| `hasCountry(code)` | Check if country exists | `boolean` |
| `getAllCodes()` | Get all country codes | `string[]` |

## Tree Shaking

```typescript
// Only US and CN are bundled (~2KB)
import { US, CN } from 'easy-country-icon';

// All flags are bundled (~160KB)
import { getCountry } from 'easy-country-icon';
```

Use static imports when you know which countries you need. Use `getCountry()` when you need dynamic access.

## Supported Countries

All 194 UN member states using ISO 3166-1 alpha-2 codes.

See full list at [countries.ts](./src/data/countries.ts)

## License

MIT

## Acknowledgments

SVG flags from [country-flag-icons](https://github.com/catamphetamine/country-flag-icons) by Nicolay Kamenskov (MIT License).
