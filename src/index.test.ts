import { describe, expect, it, vi } from 'vitest';

import { LibConfig, LobeLib, createDefaultConfig, formatVersion, validateConfig } from './index';

describe('LobeLib', () => {
  describe('constructor', () => {
    it('should create instance with default config', () => {
      const lib = new LobeLib();
      const config = lib.getConfig();

      expect(config.name).toBe('lobe-lib-template');
      expect(config.version).toBe('1.0.0');
      expect(config.debug).toBe(false);
    });

    it('should create instance with custom config', () => {
      const customConfig: LibConfig = {
        name: 'test-lib',
        version: '2.0.0',
        debug: true,
      };

      const lib = new LobeLib({ config: customConfig });
      const config = lib.getConfig();

      expect(config.name).toBe('test-lib');
      expect(config.version).toBe('2.0.0');
      expect(config.debug).toBe(true);
    });

    it('should set custom timeout', () => {
      const lib = new LobeLib({ timeout: 100 });
      const start = Date.now();

      return lib.processData('test').then(() => {
        const duration = Date.now() - start;
        expect(duration).toBeGreaterThanOrEqual(90);
      });
    });
  });

  describe('getConfig', () => {
    it('should return a copy of config', () => {
      const lib = new LobeLib();
      const config1 = lib.getConfig();
      const config2 = lib.getConfig();

      expect(config1).toEqual(config2);
      expect(config1).not.toBe(config2);
    });
  });

  describe('updateConfig', () => {
    it('should update configuration', () => {
      const lib = new LobeLib();

      lib.updateConfig({ debug: true, version: '1.1.0' });
      const config = lib.getConfig();

      expect(config.debug).toBe(true);
      expect(config.version).toBe('1.1.0');
      expect(config.name).toBe('lobe-lib-template');
    });
  });

  describe('getInfo', () => {
    it('should return library information', () => {
      const lib = new LobeLib();
      const info = lib.getInfo();

      expect(info.name).toBe('lobe-lib-template');
      expect(info.version).toBe('1.0.0');
      expect(info.formattedVersion).toBe('v1.0.0');
    });
  });

  describe('processData', () => {
    it('should process data asynchronously', async () => {
      const lib = new LobeLib({ timeout: 100 });
      const data = 'test data';

      const result = await lib.processData(data);
      expect(result).toBe(data);
    }, 1000);

    it('should log when debug is enabled', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      const lib = new LobeLib({
        config: { name: 'test', version: '1.0.0', debug: true },
        timeout: 100,
      });

      await lib.processData('test');

      expect(consoleSpy).toHaveBeenCalledWith('Processing data:', 'test');
      consoleSpy.mockRestore();
    }, 1000);

    it('should not log when debug is disabled', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      const lib = new LobeLib({
        config: { name: 'test', version: '1.0.0', debug: false },
        timeout: 100,
      });

      await lib.processData('test');

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    }, 1000);
  });

  describe('validateData', () => {
    it('should validate non-empty data', () => {
      const lib = new LobeLib();

      const result = lib.validateData('valid data');
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it('should reject null data', () => {
      const lib = new LobeLib();

      const result = lib.validateData(null);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Data is required');
    });

    it('should reject undefined data', () => {
      const lib = new LobeLib();

      const result = lib.validateData(undefined);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Data is required');
    });

    it('should reject empty string', () => {
      const lib = new LobeLib();

      const result = lib.validateData('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Data cannot be empty');
    });

    it('should reject whitespace-only string', () => {
      const lib = new LobeLib();

      const result = lib.validateData('   ');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Data cannot be empty');
    });

    it('should accept non-string data', () => {
      const lib = new LobeLib();

      const result = lib.validateData(123);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual([]);
    });
  });
});

describe('Utility Functions', () => {
  describe('formatVersion', () => {
    it('should format version string', () => {
      expect(formatVersion('1.0.0')).toBe('v1.0.0');
      expect(formatVersion('2.1.3')).toBe('v2.1.3');
      expect(formatVersion('0.0.1')).toBe('v0.0.1');
    });
  });

  describe('validateConfig', () => {
    it('should validate valid config', () => {
      const config: LibConfig = {
        name: 'test-lib',
        version: '1.0.0',
      };

      expect(validateConfig(config)).toBe(true);
    });

    it('should reject config without name', () => {
      const config = {
        version: '1.0.0',
      } as LibConfig;

      expect(validateConfig(config)).toBe(false);
    });

    it('should reject config without version', () => {
      const config = {
        name: 'test-lib',
      } as LibConfig;

      expect(validateConfig(config)).toBe(false);
    });

    it('should accept config with optional debug field', () => {
      const config: LibConfig = {
        name: 'test-lib',
        version: '1.0.0',
        debug: true,
      };

      expect(validateConfig(config)).toBe(true);
    });
  });

  describe('createDefaultConfig', () => {
    it('should create default configuration', () => {
      const config = createDefaultConfig();

      expect(config.name).toBe('lobe-lib-template');
      expect(config.version).toBe('1.0.0');
      expect(config.debug).toBe(false);
    });
  });
});
