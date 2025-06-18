<div align="center"><a name="readme-top"></a>

<img height="160" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">

<h1>LobeHub Library Template</h1>

A modern, well-structured TypeScript library template for building high-quality npm packages. This template provides a solid foundation with comprehensive tooling, testing setup, and development workflow.

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🚀 Quick Start](#-quick-start)
  - [Basic Usage](#basic-usage)
  - [Advanced Configuration](#advanced-configuration)
  - [Utility Functions](#utility-functions)
- [📖 API Reference](#-api-reference)
  - [`LobeLib` Class](#lobelib-class)
  - [Types](#types)
  - [Utility Functions](#utility-functions-1)
- [🛠️ Development](#️-development)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)
  - [More Products](#more-products)
  - [Design Resources](#design-resources)
  - [Development Resources](#development-resources)

####

</details>

## ✨ Features

- 🎯 **TypeScript First** - Built with TypeScript for better developer experience
- 📦 **Modern Build** - Uses tsup for fast, modern bundling
- 🧪 **Testing Ready** - Configured with Vitest for unit testing
- 📝 **Linting & Formatting** - ESLint, Prettier, and commit hooks setup
- 🔄 **CI/CD Ready** - GitHub Actions for testing and publishing
- 📚 **Documentation** - JSDoc comments and comprehensive README
- 🎨 **Modern Tooling** - Latest development tools and best practices

## 📦 Installation

To install `lobe-lib-template`, run the following command:

[![][bun-shield]][bun-link]

```bash
$ bun add lobe-lib-template
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🚀 Quick Start

### Basic Usage

```typescript
import { LobeLib } from 'lobe-lib-template';

// Create a new instance
const lib = new LobeLib();

// Get library information
const info = lib.getInfo();
console.log(info); // { name: 'lobe-lib-template', version: '1.0.0', formattedVersion: 'v1.0.0' }

// Process data asynchronously
const result = await lib.processData('Hello World');
console.log(result); // 'Hello World'

// Validate data
const validation = lib.validateData('');
console.log(validation); // { isValid: false, errors: ['Data cannot be empty'] }
```

### Advanced Configuration

```typescript
import { LibConfig, LobeLib } from 'lobe-lib-template';

const config: LibConfig = {
  name: 'my-custom-lib',
  version: '2.0.0',
  debug: true,
};

const lib = new LobeLib({
  config,
  timeout: 3000,
});

// Update configuration
lib.updateConfig({ debug: false });

// Get current configuration
const currentConfig = lib.getConfig();
```

### Utility Functions

```typescript
import { createDefaultConfig, formatVersion, validateConfig } from 'lobe-lib-template';

// Format version string
const formatted = formatVersion('1.2.3'); // 'v1.2.3'

// Validate configuration
const isValid = validateConfig({ name: 'test', version: '1.0.0' }); // true

// Create default configuration
const defaultConfig = createDefaultConfig();
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📖 API Reference

### `LobeLib` Class

The main class that provides the core functionality.

#### Constructor

```typescript
new LobeLib(options?: LibOptions)
```

**Parameters:**

- `options` (optional): Configuration options
  - `config`: Custom library configuration
  - `timeout`: Timeout for async operations (default: 5000ms)

#### Methods

##### `getConfig(): LibConfig`

Returns a copy of the current configuration.

##### `updateConfig(newConfig: Partial<LibConfig>): void`

Updates the library configuration with new values.

##### `getInfo(): { name: string; version: string; formattedVersion: string }`

Returns library information including formatted version.

##### `processData<T>(data: T): Promise<T>`

Processes data asynchronously with optional timeout.

##### `validateData<T>(data: T): { isValid: boolean; errors: string[] }`

Validates input data and returns validation results.

### Types

#### `LibConfig`

```typescript
interface LibConfig {
  name: string;
  version: string;
  debug?: boolean;
}
```

#### `LibOptions`

```typescript
interface LibOptions {
  config?: LibConfig;
  timeout?: number;
}
```

### Utility Functions

#### `formatVersion(version: string): string`

Formats a version string by adding 'v' prefix.

#### `validateConfig(config: LibConfig): boolean`

Validates that a configuration object has required fields.

#### `createDefaultConfig(): LibConfig`

Creates a default configuration object.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🛠️ Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/lobehub/lobe-lib-template.git
$ cd lobe-lib-template
$ bun install
$ bun dev
```

### Available Scripts

- `bun dev` - Start development mode with watch
- `bun build` - Build the library for production
- `bun test` - Run tests
- `bun test:coverage` - Run tests with coverage
- `bun lint` - Lint and fix code
- `bun type-check` - Type check TypeScript code
- `bun ci` - Run all CI checks

### Project Structure

```
lobe-lib-template/
├── src/
│   └── index.ts          # Main library entry point
├── dist/                 # Built files (generated)
├── tests/                # Test files
├── tsup.config.ts        # Build configuration
├── vitest.config.ts      # Test configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Package configuration
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you're made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

### More Products

- **[🤯 Lobe Chat](https://github.com/lobehub/lobe-chat)** - An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
- **[🅰️ Lobe Theme](https://github.com/lobehub/sd-webui-lobe-theme)** - The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.
- **[🧸 Lobe Vidol](https://github.com/lobehub/lobe-vidol)** - Experience the magic of virtual idol creation with Lobe Vidol, enjoy the elegance of our Exquisite UI Design, dance along using MMD Dance Support, and engage in Smooth Conversations.

### Design Resources

- **[🍭 Lobe UI](https://ui.lobehub.com)** - An open-source UI component library for building AIGC web apps.
- **[🥨 Lobe Icons](https://lobehub.com/icons)** - Popular AI / LLM Model Brand SVG Logo and Icon Collection.
- **[📊 Lobe Charts](https://charts.lobehub.com)** - React modern charts components built on recharts

### Development Resources

- **[🎤 Lobe TTS](https://tts.lobehub.com)** - A high-quality & reliable TTS/STT library for Server and Browser
- **[🌏 Lobe i18n](https://github.com/lobehub/lobe-cli-toolbox/blob/master/packages/lobe-i18n)** - Automation ai tool for the i18n (internationalization) translation process.

[More Resources](https://lobehub.com/resources)

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2025 [LobeHub][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/lobehub/lobe-lib-template/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-lib-template/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/lobe-lib-template/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-lib-template/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/lobe-lib-template
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/lobe-lib-template/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Flobe-lib-template
[github-contributors-link]: https://github.com/lobehub/lobe-lib-template/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-lib-template?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-lib-template/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-lib-template?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-lib-template/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-lib-template?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-lib-template/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-lib-template?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-lib-template/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-lib-template?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-lib-template/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-lib-template?color=ffcb47&labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/lobe-lib-template
[npm-release-shield]: https://img.shields.io/npm/v/lobe-lib-template?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/lobe-lib-template/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/lobehub
