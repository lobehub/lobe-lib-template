# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## \[Unreleased]

### Added

- Initial library template structure
- TypeScript configuration with modern settings
- Comprehensive testing setup with Vitest
- Build configuration with tsup
- Linting and formatting setup
- Example usage and documentation
- Utility functions for common operations
- Type-safe configuration management
- Async data processing capabilities
- Data validation utilities

### Changed

- Updated project description and documentation
- Enhanced README with comprehensive API reference
- Improved development workflow scripts

### Fixed

- N/A

### Removed

- N/A

## \[1.0.0] - 2025-01-XX

### Added

- Initial release of LobeHub Library Template
- Core `LobeLib` class with configuration management
- Utility functions: `formatVersion`, `validateConfig`, `createDefaultConfig`
- TypeScript type definitions
- Comprehensive test suite
- Modern build pipeline
- Development tooling setup

---

## Template Usage

When using this template for your own library, follow these guidelines:

### Adding Entries

For each version, add entries under the appropriate section:

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities

### Version Format

Use semantic versioning:

- **Major** version for incompatible API changes
- **Minor** version for added functionality in a backwards compatible manner
- **Patch** version for backwards compatible bug fixes

### Example Entry

```markdown
## [1.1.0] - 2025-01-15

### Added

- New `processData` method for async data processing
- Support for custom timeout configuration

### Changed

- Improved error handling in `validateData` method
- Updated TypeScript configuration for better type inference

### Fixed

- Fixed issue with empty string validation
- Resolved timeout not being applied correctly
```
