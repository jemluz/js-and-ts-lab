// Ecma Script Modules (ESM)
// The official pattern for ECMAScript modules (ESM) in TypeScript

// Advantages of ESM:
// 1. Native support in modern JavaScript environments (browsers and Node.js).
// 2. Static analysis for better tree-shaking and optimization.
// 3. Clear syntax for importing and exporting modules.
// 4. All benefits of TypeScript's type system.

// Usage:
// - Use `export` to expose functions, classes, or variables from a module.
// - Use `import` to bring in functionalities from other modules.

// Example usage:

// math.js
export function sum(a: number, b: number): number {
  return a + b;
}

// index.js
// import { sum } from './math.js';
