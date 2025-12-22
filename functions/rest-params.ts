// rest params, bundles different values into an array
// used when we don't want to specify how many elements/values will be passed to the function

function openFridge(...foods: string[]) {
  console.log(...foods);
}

const food1 = "pizza"
const food2 = "sushi"
const food3 = "salad"

openFridge(food1, food2, food3) // will print ["pizza", "sushi", "salad"]