const numbers = [4, 8, 3, 2, 9, 1, 9, 3]

// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

// const sum = (a, b) => a + b
// const total = numbers.reduce(sum)

function sum(array, total = 0) {
  return array.length ? sum(array.slice(1), total + array[0]) : total
}

const total = sum(numbers)
console.log(total)
