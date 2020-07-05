const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers
  .map(num => num + 10)
  .map(num => num * 2)

console.log(numbers, newNumbers)

function SafeType(value) {
  return {
    value,
    map(fn) {
      return SafeType(fn(value))
    }
  }
}

const result = SafeType('This is a text')
  .map(text => text.toUpperCase())
  .map(text => `${text}!!!`)
  .map(text => text.split('').join(' '))

console.log(result.value)
