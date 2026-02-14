# Copilot Instructions

## Project intent
This repo is a didactic lab for JavaScript and TypeScript. Keep content small, focused, and comment-driven.

## What to optimize for
- Clarity over completeness
- Short examples that compile or run
- Comments that explain the rule or the reason

## When adding or editing topics
- Prefer one concept per file
- Keep examples minimal but real
- Use TypeScript when types clarify behavior
- Keep filenames descriptive and consistent with folders
- Keep TS examples compiling: prefer explicit annotations when inference is unclear and avoid missing imports or unreachable names
- Before adding new TS identifiers, scan related files in the same folder to avoid name collisions

## Documentation rules
- Update README.md and docs/index.md when adding new topics
- Keep bilingual text aligned
- Avoid non-ASCII characters unless the file already uses them

## Concept placement flow
- Is the extra concept required to teach the current topic?
	- If no: rework the example to avoid it.
	- If yes: check if the concept already exists elsewhere.
- If it exists elsewhere: do not re-explain it here.
- If it does not exist: decide if it belongs to this folder's universe.
	- If yes: add a new file in the current folder.
	- If no: find or create the most appropriate folder (a "micro universe").

## Micro universe meaning
A "micro universe" folder groups a coherent set of concepts with a clear identity. It can be a core programming pillar (control structures, data storage, scopes) or a domain with strong relevance in JS/TS (modules). Examples inside the folder should serve that universe and avoid pulling unrelated concepts unless strictly required.

## Quick map
- control-structures
- data-storage
- functions
- modules (historical evolution)
- object-oriented
- operators
- scopes
