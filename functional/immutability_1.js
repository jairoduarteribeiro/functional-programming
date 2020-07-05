function sort(array) {
  return [...array].sort((a, b) => a - b)
}

const numbers = Object.freeze([3, 1, 7, 9, 4, 6])
numbers[0] = 1000
const orderedNumbers = sort(numbers)
console.log(numbers, orderedNumbers)

const slice = numbers.slice(1)
console.log(numbers, slice)
