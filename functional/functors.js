const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers
  .map(num => num + 10)
  .map(num => num * 2)

console.log(numbers, newNumbers)

function SafeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      return this.invalid() ? SafeType(null) : SafeType(fn(value))
    }
  }
}

const result = SafeType('This is a text')
  .map(text => text.toUpperCase())
  .map(text => null)
  .map(text => text.split('').join(' '))

console.log(result.value)
