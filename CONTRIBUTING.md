# Contributing to easy-country-icon

Thank you for your interest in contributing to easy-country-icon! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Check if the issue has already been reported
- Use the issue tracker to report bugs or suggest features
- Provide clear and detailed information about the issue
- Include code examples and screenshots if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** and ensure the code follows the project style
4. **Test your changes**: `npm run build` and `npm run type-check`
5. **Commit your changes** with clear and descriptive commit messages
6. **Push to your fork** and submit a pull request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/easy-country-icon.git
cd easy-country-icon

# Install dependencies
npm install

# Build the project
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run type-check
```

### Project Structure

```
easy-country-icon/
├── src/
│   ├── data/           # Country data
│   ├── utils/          # Utility functions
│   ├── emoji.ts        # Emoji API
│   ├── svg.ts          # SVG API
│   └── index.ts        # Main entry
├── scripts/            # Build scripts
└── dist/               # Build output
```

### Code Style

- Use TypeScript for all source files
- Follow existing code formatting
- Write clear comments for complex logic
- Use meaningful variable and function names

### Commit Messages

- Use clear and descriptive commit messages
- Start with a verb in present tense (e.g., "Add", "Fix", "Update")
- Reference issue numbers when applicable

Examples:
```
Add support for custom SVG dimensions
Fix emoji rendering on iOS devices
Update README with new usage examples
```

### Testing

Before submitting a PR:
- Ensure the project builds successfully: `npm run build`
- Check for TypeScript errors: `npm run type-check`
- Test your changes with the demo files

### Adding New Countries

When adding new country data:
1. Follow the ISO 3166-1 alpha-2 standard
2. Ensure the country code is uppercase
3. Use official country names in English
4. Test the emoji generation

### Documentation

- Update README.md if you change functionality
- Add JSDoc comments for new functions
- Include usage examples for new features

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to foster an inclusive and welcoming community.

## Questions?

Feel free to open an issue for questions or discussions about contributing.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
