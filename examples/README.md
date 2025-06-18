# Examples

This directory contains examples demonstrating how to use the LobeLib template.

## Files

- `basic-usage.ts` - Comprehensive examples showing all features of the library
- `README.md` - This file

## Running Examples

To run the examples, first build the library:

```bash
bun build
```

Then run the example:

```bash
bun run tsx examples/basic-usage.ts
```

## What the Examples Show

The `basic-usage.ts` file demonstrates:

1. **Basic Usage** - Creating a library instance and getting information
2. **Custom Configuration** - Setting up custom configuration options
3. **Data Processing** - Using async data processing with timeouts
4. **Data Validation** - Validating different types of input data
5. **Configuration Updates** - Dynamically updating library configuration
6. **Utility Functions** - Using standalone utility functions
7. **Error Handling** - Proper error handling patterns
8. **Async Operations** - Working with timeouts and async operations
9. **Type Safety** - TypeScript type safety features
10. **Export Demonstration** - Different ways to import the library

## Expected Output

When you run the example, you should see output similar to:

```
=== Basic Usage ===
Library Info: { name: 'lobe-lib-template', version: '1.0.0', formattedVersion: 'v1.0.0' }

=== Custom Configuration ===
Custom Config: { name: 'my-awesome-lib', version: '2.0.0', debug: true }

=== Data Processing ===
Processing data: Hello from LobeLib!
Processed data: Hello from LobeLib!

=== Data Validation ===
"valid data": Valid
"": Invalid
  Errors: ['Data cannot be empty']
"null": Invalid
  Errors: ['Data is required']
"   ": Invalid
  Errors: ['Data cannot be empty']
"another valid": Valid

=== Configuration Updates ===
Before update: { name: 'lobe-lib-template', version: '1.0.0', debug: false }
After update: { name: 'lobe-lib-template', version: '1.1.0', debug: true }

=== Utility Functions ===
Formatted version: v1.2.3
Config validation: true

=== Error Handling ===
Caught error: Invalid configuration: missing version

=== Async Operations ===
Starting slow operation...
Operation completed in 2000ms: slow data

=== Type Safety ===
Type-safe config update successful

=== Export Demonstration ===
Default export: { name: 'lobe-lib-template', version: '1.0.0', formattedVersion: 'v1.0.0' }
Named export: { name: 'lobe-lib-template', version: '1.0.0', formattedVersion: 'v1.0.0' }
Both are the same: true
```

## Customizing Examples

Feel free to modify the examples to test different scenarios or add your own functionality. The examples are designed to be educational and demonstrate best practices for using the library template.
