// we can omit the reserved word "function" by using =>
// this is called "arrow function"

// normal example
const circleArea = function circleArea(r: number) {
  const PI = 3.14;
  let area = PI * r * r;
  return area
}

const circleAreaCalculator = (r: number) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area
}

// if there is only one instruction into funcion, you also can omit { }
const hello = () => console.log("hello");