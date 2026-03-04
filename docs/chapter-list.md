# Data Structures and Algorithms in JavaScript (2nd Ed.) — Study Map (Detailed TOC)

This repository follows the book as a **study map**.
Below is the detailed chapter/topic outline (text-only).

---

**Legend**

- ~~Unused topics~~
- ✅ Done topics

## Chapter 1 — JavaScript: a quick overview

- ~~Data structures and algorithms in JavaScript~~
- ~~Setting up the environment~~
- ~~Minimum setup to work with JavaScript~~
- ~~Using web servers~~
- ~~Node.js `http-server`~~
- ~~JavaScript basics~~
- ✅ Variables
- ✅ Variable scope
- ✅ Operators
- ✅ Truthy and falsy
- ✅ Equality operators (`==` and `===`)
- ✅ Control structures
- ✅ Conditional statements
- ✅ Loops
- ✅ Functions
- ✅ Object-oriented programming in JavaScript
- ~~Debugging and tools~~
- ~~Debugging with VSCode~~
- ~~Summary~~

---

## Chapter 2 — ECMAScript and TypeScript overview

- ~~ECMAScript or JavaScript?~~
- ~~ES6, ES2015, ES7, ES2016, ES8, ES2017 and ES.Next~~
- ~~Compatibility table~~
- ~~Using Babel.js~~
- ~~ECMAScript 2015+ features~~
- ✅ `let` and `const` instead of `var`
- ✅ Variable scope with `let` and `const`
- ✅ Template literals
- ✅ Arrow functions
- ✅ Default values for function parameters
- ✅ Spread and rest operators
- ✅ Enhanced object properties
- ✅ Object-oriented programming with classes
- ✅ Inheritance
- ✅ Working with getters and setters
- ✅ Exponentiation operator
- ✅ Modules
- ~~Running ES2015 modules in the browser and with Node.js~~
- ~~Using native ES2015 imports in Node.js~~
- ✅ Running ES2015 modules in the browser
- ~~Backward compatibility (pre-ES2015+)~~
- ✅ Introduction to TypeScript
- ✅ Type inference
- ✅ Interfaces
- ✅ Generics
- ~~Other TypeScript features~~
- ~~TypeScript compile-time checks in JavaScript files~~
- ~~Summary~~

---

## Chapter 3 — Arrays

- ✅ Why should we use arrays?
- ✅ Creating and initializing arrays
- Accessing elements and iterating over an array
- Adding elements
- Inserting an element at the end of the array
- Using the `push` method
- Inserting an element at the first position
- Using the `unshift` method
- Removing elements
- Removing an element from the end of the array
- Removing an element from the first position
- Using the `shift` method
- Adding/removing elements from a specific position
- Two-dimensional and multidimensional arrays
- Iterating over 2D arrays
- Multidimensional arrays
- References for array methods in JavaScript
- Merging arrays
- Iteration functions
- Iterating with `every`
- Iterating with `some`
- Iterating with `forEach`
- Using `map` and `filter`
- Using `reduce`
- ECMAScript 6 and new array features
- Iterating with `for...of`
- Using the `@@iterator` object
- Array `entries`, `keys`, and `values`
- Using `Array.from`
- Using `Array.of`
- Using `fill`
- Using `copyWithin`
- Sorting elements
- Custom sorting
- Sorting strings
- Searching
- ECMAScript 2015: `find` and `findIndex`
- ECMAScript 2016: using `includes`
- Converting an array to a string
- TypedArray class
- Arrays in TypeScript
- Summary

---

## Chapter 4 — Stacks

- Creating a JavaScript data structures and algorithms library
- Stack data structure
- Creating an array-based Stack class
- Pushing elements to the stack
- Popping elements from the stack
- Peeking at the top element
- Checking if the stack is empty
- Clearing the stack
- Using the Stack class
- Creating an object-based JavaScript Stack class
- Pushing elements to the stack
- Checking if the stack is empty and its size
- Popping elements from the stack
- Peeking at the top and clearing the stack
- Creating the `toString` method
- Protecting internal elements of the data structure
- Underscore naming convention
- ES2015 classes with symbols in scope
- ES2015 classes with WeakMap
- ECMAScript proposal: class fields
- Solving problems using stacks
- Converting decimal numbers to binary
- Base converter algorithm
- Summary

---

## Chapter 5 — Queues and Deques

- Queue data structure
- Creating the Queue class
- Enqueuing elements
- Dequeuing elements
- Peeking the front element
- Checking if the stack is empty and its size
- Clearing the queue
- Creating the `toString` method
- Using the Queue class
- Deque data structure
- Creating the Deque class
- Adding elements to the front of the deque
- Using the Deque class
- Solving problems using queues and deques
- Circular queue — Hot Potato
- Palindrome checker
- Task queues in JavaScript
- Summary

---

## Chapter 6 — Linked Lists

- Linked list data structure
- Creating the LinkedList class
- Inserting elements at the end
- Removing elements from a specific position
- Traversing the list with a loop until reaching a position
- Refactoring the `remove` method
- Inserting an element at any position
- `indexOf`: returning the position of an element
- Removing an element from the list
- `isEmpty`, `size`, and `getHead`
- `toString`
- Doubly linked lists
- Inserting a new element at any position
- Removing elements from any position
- Circular linked lists
- Inserting a new element at any position
- Removing elements from any position
- Sorted linked lists
- Inserting elements in order
- Creating the StackLinkedList class
- Summary

---

## Chapter 7 — Sets

- Structuring a set of data
- Creating a Set class
- `has(element)`
- `add`
- `delete` and `clear`
- `size`
- `values`
- Using the Set class
- Set operations
- Union
- Intersection
- Improving the `intersection` method
- Difference
- Subset
- ECMAScript 2015: the built-in `Set` class
- Operations with ES2015 `Set`
- Simulating union
- Simulating intersection
- Simulating difference
- Using the spread operator
- Multisets (bags)
- Summary

---

## Chapter 8 — Dictionaries and Hashes

- Dictionary data structure
- Creating the Dictionary class
- Checking if a key is present
- Setting a key/value and the ValuePair class
- Removing a value
- Getting a value
- `keys`, `values`, and `valuePairs`
- Iterating ValuePairs with `forEach`
- `clear`, `size`, `isEmpty`, and `toString`
- Using the Dictionary class
- Hash table
- Creating a HashTable class
- Creating a hash function
- Putting a key/value in the hash table
- Getting a value from the hash table
- Removing a value from the hash table
- Using the HashTable class
- Hash table vs hash set
- Handling collisions in hash tables
- Separate chaining
- `put`
- `get`
- `remove`
- Linear probing
- `put`
- `get`
- `remove`
- Creating better hash functions
- ES2015 `Map`
- ES2015 `WeakMap` and `WeakSet`
- Summary

---

## Chapter 9 — Recursion

- Understanding recursion
- Calculating factorial
- Iterative factorial
- Recursive factorial
- Call stack
- Call stack size limitations in JavaScript
- Fibonacci sequence
- Iterative Fibonacci
- Recursive Fibonacci
- Fibonacci with memoization
- Why use recursion? Is it faster?
- Summary

---

## Chapter 10 — Trees

- Tree data structure
- Tree terminology
- Binary tree and binary search tree (BST)
- Creating Node and BinarySearchTree classes
- Inserting a key in a BST
- Traversing a tree
- In-order traversal
- Pre-order traversal
- Post-order traversal
- Searching values in a tree
- Searching minimum and maximum values
- Searching for a specific value
- Removing a node
- Removing a leaf
- Removing a node with one child (left or right)
- Removing a node with two children
- Self-balancing trees
- AVL tree (Adelson-Velskii and Landi)
- Node height and balance factor
- Balancing operations — AVL rotations
- Left-Left: single right rotation
- Right-Right: single left rotation
- Left-Right: double right rotation
- Right-Left: double left rotation
- Inserting a node in an AVL tree
- Removing a node in an AVL tree
- Red-black tree
- Inserting a node in a red-black tree
- Checking red-black properties after insertion
- Rotations in a red-black tree
- Summary

---

## Chapter 11 — Binary Heap and Heap Sort

- Binary heap data structure
- Creating the MinHeap class
- Representing the binary tree with an array
- Inserting a value into the heap
- Sift up operation
- Finding minimum and maximum values in the heap
- Extracting minimum and maximum from the heap
- Sift down operation
- Creating the MaxHeap class
- Heap sort algorithm
- Summary

---

## Chapter 12 — Graphs

- Graph terminology
- Directed and undirected graphs
- Representing a graph
- Adjacency matrix
- Adjacency list
- Incidence matrix
- Creating the Graph class
- Graph traversal
- Breadth-first search (BFS)
- Finding shortest paths using BFS
- Additional studies on shortest-path algorithms
- Depth-first search (DFS)
- Exploring the DFS algorithm
- Topological sorting using DFS
- Shortest-path algorithms
- Dijkstra’s algorithm
- Floyd–Warshall algorithm
- Minimum spanning tree (MST)
- Prim’s algorithm
- Kruskal’s algorithm
- Summary

---

## Chapter 13 — Sorting and Searching Algorithms

- Sorting algorithms
- Bubble sort
- Improved bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort
- Partitioning process
- Quick sort in action
- Counting sort
- Bucket sort
- Radix sort
- Searching algorithms
- Sequential search
- Binary search
- Interpolation search
- Shuffle algorithms
- Fisher–Yates shuffle
- Summary

---

## Chapter 14 — Algorithm Design and Techniques

- Divide and conquer
- Binary search
- Dynamic programming
- Minimum coin change problem
- Knapsack problem
- Longest common subsequence
- Matrix chain multiplication
- Greedy algorithms
- Minimum coin change problem
- Fractional knapsack problem
- Backtracking algorithms
- Rat in a maze
- Sudoku solver
- Introduction to functional programming
- Functional vs imperative programming
- ES2015+ and functional programming
- JavaScript functional toolbox — `map`, `filter`, `reduce`
- Functional data structures and libraries in JavaScript
- Summary

---

## Chapter 15 — Algorithm Complexity

- Big-O notation
- Understanding big-O
- O(1)
- O(n)
- O(n²)
- Comparing complexities
- Data structures
- Graphs
- Sorting algorithms
- Searching algorithms
- Introduction to NP-complete theory
- Impossible problems and heuristic algorithms
- Having fun with algorithms
- Summary
