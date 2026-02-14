# JS and TS Lab Documentation

## Purpose

This repository is a didactic reference for JavaScript and TypeScript syntax, best practices, and topic evolution. Each file is a small, focused example with comments that explain the concept.

## How to use

- Start from the folder that matches your topic.
- Read the comments first, then the code.
- Prefer the TypeScript examples when you want type context.

## Content map

- control-structures: conditionals and loops
- data-storage: variables, destructuring, shorthand, template literals, types
- functions: params, return, arrow, rest, spread
- modules: CommonJS, AMD, ESM, bundlers, tree shaking, Node support
- object-oriented: classes, access modifiers, getters/setters, overrides, interfaces
- operators: arithmetic, assignment, comparison, equality, logical, bitwise
- scopes: global, function, block scope examples

## Conventions

- Each file focuses on one concept.
- Comments explain the why or the rule, not just the syntax.
- Examples are minimal, but runnable.

## AI context

For AI-assisted work, see the repository guidelines in .github/copilot-instructions.md.

## Module evolution notes

The modules folder is arranged to show how JS module systems evolved over time. Read them in this order for historical context:

1. commonjs-pattern.js
2. amd-requirejs-pattern.js
3. esm-pattern.ts
4. bundlers.js, static-analysis.js, tree-shaking.js, node-support.ts
