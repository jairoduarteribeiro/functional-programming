// Impure - Math.random is external
function generateRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(generateRandomInt(1, 10000))
console.log(generateRandomInt(1, 10000))
console.log(generateRandomInt(1, 10000))
console.log(generateRandomInt(1, 10000))
console.log(generateRandomInt(1, 10000))
