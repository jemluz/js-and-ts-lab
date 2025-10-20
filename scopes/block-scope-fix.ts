// Block scope
// It only works with const and let, continuing within the scope

if (true) {
  let y = 20;
  const z = 30;
  console.log(y, z); // works
}

// console.log(y); // ReferenceError
