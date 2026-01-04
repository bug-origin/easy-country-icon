# easy-country-icon 🌍

A lightweight country icons library with emoji and SVG support, fully tree-shakable and on-demand loading.

[![npm version](https://img.shields.io/npm/v/easy-country-icon.svg)](https://www.npmjs.com/package/easy-country-icon)
[![npm downloads](https://img.shields.io/npm/dm/easy-country-icon.svg)](https://www.npmjs.com/package/easy-country-icon)
[![bundle size](https://img.shields.io/bundlephobia/minzip/easy-country-icon)](https://bundlephobia.com/package/easy-country-icon)
[![license](https://img.shields.io/npm/l/easy-country-icon.svg)](https://github.com/bug-origin/easy-country-icon/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI](https://github.com/bug-origin/easy-country-icon/workflows/CI/badge.svg)](https://github.com/bug-origin/easy-country-icon/actions)

## 🎨 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/US.svg" width="48" alt="US" title="United States"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/CN.svg" width="48" alt="CN" title="China"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/GB.svg" width="48" alt="GB" title="United Kingdom"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/JP.svg" width="48" alt="JP" title="Japan"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/DE.svg" width="48" alt="DE" title="Germany"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/FR.svg" width="48" alt="FR" title="France"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/CA.svg" width="48" alt="CA" title="Canada"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/AU.svg" width="48" alt="AU" title="Australia"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/BR.svg" width="48" alt="BR" title="Brazil"/>
  <img src="https://raw.githubusercontent.com/bug-origin/easy-country-icon/main/src/svg-icons/flags/IN.svg" width="48" alt="IN" title="India"/>
</p>

## ✨ Features

- 🎯 **Zero Dependencies** - No external dependencies required
- 🌳 **Tree Shaking** - Perfect support for on-demand imports, only bundle what you use
- 🎨 **Dual Mode** - Support both native Emoji and high-quality SVG icons (based on [country-flag-icons](https://github.com/catamphetamine/country-flag-icons))
- 📦 **Ultra Lightweight** - Core code only few KB, SVG loaded on-demand
- 🔧 **TypeScript** - Full type definitions included
- 🔤 **Case Insensitive** - Works with 'US', 'us', 'Us', etc. (all country code parameters)
- 🌍 **Complete Coverage** - Emoji supports 194 countries, SVG supports 250+ countries

## 📦 Installation

```bash
npm install easy-country-icon
```

## 🪄 Super Easy Usage



### Emoji Flag

```typescript
import { getCountryEmoji, hasCountry } from 'easy-country-icon/emoji';
getCountryEmoji('US'); // 🇺🇸
hasCountry('CN'); // true
```

### SVG Flag (Named Import)

```typescript
import { US, CN, JP } from 'easy-country-icon/svg-icons';
// <img src={US} />
```

### SVG Flag (Dynamic)

```typescript
import { getCountrySvg } from 'easy-country-icon/svg';
getCountrySvg('JP'); // 'easy-country-icon/svg-icons/flags/JP.svg'
getCountrySvg(); // ['AD', 'AE', ...] all codes
```


## 📋 API Documentation

### API

#### `getCountryEmoji(code: string): string`
Get emoji flag (case-insensitive).

```typescript
import { getCountryEmoji } from 'easy-country-icon/emoji';
getCountryEmoji('US') // '🇺🇸'
getCountryEmoji('cn') // '🇨🇳'
```

#### `hasCountry(code: string): boolean`
Check if country code exists.

```typescript
import { hasCountry } from 'easy-country-icon/emoji';
hasCountry('US') // true
hasCountry('XX') // false
```

#### `getCountrySvg(code?: string): string | string[]`
Get SVG path or all codes.

```typescript
import { getCountrySvg } from 'easy-country-icon/svg';
getCountrySvg('JP') // 'easy-country-icon/svg-icons/flags/JP.svg'
getCountrySvg() // ['AD', 'AE', 'AF', ...]
```

#### Named SVG Exports

```typescript
import { US, CN, JP } from 'easy-country-icon/svg-icons';
// US = 'easy-country-icon/svg-icons/flags/US.svg'
```

## 🌍 Supported Countries

Includes all 195 UN member states and observer states, using standard ISO 3166-1 alpha-2 codes:

- `US` - United States 🇺🇸
- `CN` - China 🇨🇳
- `GB` - United Kingdom 🇬🇧
- `JP` - Japan 🇯🇵
- `DE` - Germany 🇩🇪
- `FR` - France 🇫🇷
- ... and many more

See full list at [countries.ts](./src/data/countries.ts)

## 📦 Bundle Size

- **Full Package**: ~800KB (includes 250+ SVG)
- **Emoji Only**: ~5KB (minified + gzipped)
- **On-demand SVG**: ~1-5KB each

With on-demand imports and Tree Shaking, actual bundle size will be much smaller!

**Examples**:
- Emoji only: ~3-5KB
- 3 SVGs only: ~10-15KB
- 10 SVGs only: ~30-50KB

## 🔧 Tree Shaking

```typescript
// ✅ Only bundles what you import
import { getCountryEmoji } from 'easy-country-icon/emoji';
import { getCountrySvg } from 'easy-country-icon/svg';
import { US, CN } from 'easy-country-icon/svg-icons';
```

## 🎯 Use Cases

- 🗺️ Country selectors
- 📱 Multi-language/multi-region switching
- 🛒 E-commerce country shipping options
- 📊 Country identification in data visualization
- 🌐 Internationalization applications
- 📞 Phone country code selectors

## 🤝 Contributing

Issues and Pull Requests are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for details about changes in each version.

## 🔒 Security

See [SECURITY.md](SECURITY.md) for security policy and reporting vulnerabilities.

## 📄 License

MIT © [Your Name]

## 🙏 Acknowledgments

This project uses assets from the following sources:

### SVG Flag Icons
- **Source**: [country-flag-icons](https://github.com/catamphetamine/country-flag-icons) by Nicolay Kamenskov
- **License**: MIT License
- **Usage**: 250+ high-quality SVG flag icons included in `dist/svg-icons/flags/`
- **Copyright**: © 2020 Nicolay Kamenskov

### Emoji Flags
- Based on Unicode Regional Indicator Symbols (part of Unicode Standard)
- No additional attribution required

### Full Attribution
See [ATTRIBUTION.md](ATTRIBUTION.md) for complete third-party licenses and notices.

---

**Note**: When redistributing this package or its SVG assets, please ensure you comply with the MIT License terms of country-flag-icons by retaining copyright notices.
