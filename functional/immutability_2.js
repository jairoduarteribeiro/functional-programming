const numbers = [4, 8, 3, 2, 9, 1, 9, 3]

// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

const sum = (a, b) => a + b
const total = numbers.reduce(sum)
console.log(total)
