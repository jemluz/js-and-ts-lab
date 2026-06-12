// Removing elements from an array
// Focus: pop (end), shift (start), and splice (specific position).

const removableFruits: string[] = ["apple", "banana", "cherry", "date"];
console.log("initial:", removableFruits); // ["apple", "banana", "cherry", "date"]

// 1) pop removes the last element and returns it.
const removedFromEnd = removableFruits.pop();
console.log("after pop:", removableFruits, "removed:", removedFromEnd); // ["apple", "banana", "cherry"] removed: "date"

// another way
for (let i = 0; removableFruits.length < 3; i++) {
  removableFruits[i] = removableFruits[i + i];
}

// 2) shift removes the first element and returns it.
const removedFromStart = removableFruits.shift();
console.log("after shift:", removableFruits, "removed:", removedFromStart); // ["banana", "cherry"] removed: "apple"

// 3) splice can remove from a specific index.
// splice(start, deleteCount) mutates the array and returns removed items.
const removedBySplice = removableFruits.splice(0, 1);
console.log("after splice:", removableFruits, "removed:", removedBySplice); // ["cherry"] removed: ["banana"]

// Performance note:
// removing at the end is usually cheaper than removing at the start,
// because start-removal shifts remaining elements.

// Tip:
// push() and pop() are ideal for stack-like behavior (LIFO), while unshift() and shift() are better for queue-like behavior (FIFO).
