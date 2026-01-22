// Tree-shaking = removing unused code during the build process
// "Shake the tree to remove dead leaves (unused code)"

// Tree-shaking relies on static analysis to determine what code is used and what is not.
// The better the static analysis, the more effective the tree-shaking.
// (Tree-shaking works best with ES Modules (ESM) because of their static structure)

// | Concept         | Short explanation                      |
// | ----------------| -------------------------------------- |
// | Static analysis | Understand the code without running it |
// | Better analysis | Explicit imports/exports               |
// | Tree-shaking    | Remove unused code                     |
// | ES Modules      | Allows both                            |
// | CommonJS        | Gets in the way to both cases          |


// In package.json, "sideEffects": false tells bundlers that your code has no side effects,
// allowing them to safely remove unused exports during tree-shaking.
// {
//   "sideEffects": false
// }

// If some files have side effects, you can specify them like this:
// This way, bundlers will not tree-shake CSS/SCSS files even if they appear unused.

// {
//   "sideEffects": [
//     "*.css",
//     "*.scss"
//   ]
// }

// Benefits of Tree-shaking
// 1. Reduced bundle size
// 2. Improved load times
// 3. Better performance
// 4. Cleaner codebase

// When tree-shaking might not work well
// 1. Side effects on top level
// 2. Imprecise dynamic imports/exports (uses require or import with variables)
// 3. Indirect usage (dynamic access obj[prop])
// 4. Blindly re-exporting everything
// 5. Package.json misconfiguration ("sideEffects" field)
// 6. Modify globals as built-in prototypes (like Array.prototype)

// [1] Example of side effects preventing tree-shaking:
// analytics.ts
console.log('analytics carregado');

export function track() {}

// main.ts
import { track } from './analytics';

// Simply importing the file executes the code.
// The bundler thinks: “If I remove this, the behavior changes.”
// ➡️ Result: the entire file keeps all its code

// Other example
// config.ts
initDatabase();

export const config = {};

// Same problem here as console.log example above.
// Can't remove with safety because of side effects.

// [2] Example of dynamic import preventing tree-shaking:

import(moduleName);

// or

require('./' + name);


// [3] Example of indirect usage preventing tree-shaking:
import * as math from './math.js';

const operation = 'sum';
math[operation](2, 3);

// can't be shaken because of dynamic access

// [4] Example of blind re-export preventing tree-shaking:

// index.ts
export * from './math';
export * from './string';

// [5] Example of package.json misconfiguration preventing tree-shaking:
// If "sideEffects" is missing or incorrectly set, bundlers may not tree-shake effectively.

// [6] Example of modifying built-in prototypes preventing tree-shaking:
Array.prototype.customMethod = function() {
  // custom logic
};
