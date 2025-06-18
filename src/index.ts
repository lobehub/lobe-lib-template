// Types
export interface LibConfig {
  debug?: boolean;
  name: string;
  version: string;
}

export interface LibOptions {
  config?: LibConfig;
  timeout?: number;
}

// Utility functions
export const formatVersion = (version: string): string => {
  return `v${version}`;
};

export const validateConfig = (config: LibConfig): boolean => {
  return !!(config.name && config.version);
};

export const createDefaultConfig = (): LibConfig => ({
  debug: false,
  name: 'lobe-lib-template',
  version: '1.0.0',
});

// Main class
export class LobeLib {
  private config: LibConfig;
  private options: LibOptions;

  constructor(options: LibOptions = {}) {
    this.config = options.config || createDefaultConfig();
    this.options = {
      timeout: 5000,
      ...options,
    };
  }

  /**
   * Get the library configuration
   */
  getConfig(): LibConfig {
    return { ...this.config };
  }

  /**
   * Update the library configuration
   */
  updateConfig(newConfig: Partial<LibConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get library information
   */
  getInfo(): { formattedVersion: string; name: string; version: string } {
    return {
      formattedVersion: formatVersion(this.config.version),
      name: this.config.name,
      version: this.config.version,
    };
  }

  /**
   * Example method that demonstrates async functionality
   */
  async processData<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.config.debug) {
          console.log('Processing data:', data);
        }
        resolve(data);
      }, this.options.timeout || 1000);
    });
  }

  /**
   * Example method that demonstrates error handling
   */
  validateData<T>(data: T): { errors: string[]; isValid: boolean } {
    const errors: string[] = [];

    if (!data) {
      errors.push('Data is required');
    }

    if (typeof data === 'string' && data.trim().length === 0) {
      errors.push('Data cannot be empty');
    }

    return {
      errors,
      isValid: errors.length === 0,
    };
  }
}

// Default export
export default LobeLib;

// Named exports for convenience
export { LobeLib as Lib };
