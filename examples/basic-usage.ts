import LobeLibDefault, {
  Lib,
  LibConfig,
  LobeLib,
  formatVersion,
  validateConfig,
} from 'lobe-lib-template';

// Example 1: Basic usage
console.log('=== Basic Usage ===');
const lib = new LobeLib();
const info = lib.getInfo();
console.log('Library Info:', info);

// Example 2: Custom configuration
console.log('\n=== Custom Configuration ===');
const customConfig: LibConfig = {
  debug: true,
  name: 'my-awesome-lib',
  version: '2.0.0',
};

const customLib = new LobeLib({ config: customConfig });
console.log('Custom Config:', customLib.getConfig());

// Example 3: Data processing
console.log('\n=== Data Processing ===');
const data = 'Hello from LobeLib!';
customLib.processData(data).then((result) => {
  console.log('Processed data:', result);
});

// Example 4: Data validation
console.log('\n=== Data Validation ===');
const testData = ['valid data', '', null, '   ', 'another valid'];

testData.forEach((item) => {
  const validation = lib.validateData(item);
  console.log(`"${item}": ${validation.isValid ? 'Valid' : 'Invalid'}`);
  if (!validation.isValid) {
    console.log('  Errors:', validation.errors);
  }
});

// Example 5: Configuration updates
console.log('\n=== Configuration Updates ===');
console.log('Before update:', lib.getConfig());
lib.updateConfig({ debug: true, version: '1.1.0' });
console.log('After update:', lib.getConfig());

// Example 6: Utility functions
console.log('\n=== Utility Functions ===');
console.log('Formatted version:', formatVersion('1.2.3'));
console.log('Config validation:', validateConfig(customConfig));

// Example 7: Error handling
console.log('\n=== Error Handling ===');
try {
  const invalidConfig = { name: 'test' } as LibConfig;
  if (!validateConfig(invalidConfig)) {
    throw new Error('Invalid configuration: missing version');
  }
} catch (error) {
  console.log('Caught error:', error.message);
}

// Example 8: Async operations with timeout
console.log('\n=== Async Operations ===');
const slowLib = new LobeLib({ timeout: 2000 });
console.log('Starting slow operation...');
const startTime = Date.now();

slowLib.processData('slow data').then((result) => {
  const duration = Date.now() - startTime;
  console.log(`Operation completed in ${duration}ms:`, result);
});

// Example 9: Type safety demonstration
console.log('\n=== Type Safety ===');
const typedLib = new LobeLib();

// This would cause a TypeScript error if uncommented:
// typedLib.updateConfig({ invalidField: 'value' });

// This is type-safe:
typedLib.updateConfig({ debug: true });
console.log('Type-safe config update successful');

// Example 10: Export demonstration
console.log('\n=== Export Demonstration ===');

const defaultLib = new LobeLibDefault();
const namedLib = new Lib();

console.log('Default export:', defaultLib.getInfo());
console.log('Named export:', namedLib.getInfo());
console.log('Both are the same:', defaultLib.getInfo().name === namedLib.getInfo().name);
