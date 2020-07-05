function sort(array) {
  return [...array].sort((a, b) => a - b)
}

const numbers = [3, 1, 7, 9, 4, 6]
const orderedNumbers = sort(numbers)
console.log(numbers, orderedNumbers)
