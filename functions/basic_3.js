// Arrow function
const merryChristmas = () => console.log('Merry Christmas!')
merryChristmas()

const greeting = name => `Hey ${name}, what's up?`
console.log(greeting('John'))

const sum = (...numbers) => {
  let total = 0
  for (num of numbers) {
    total += num
  }
  return total
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const sub = (a, b) => a - b
console.log(sub(4, 1))

const power = base => exp => Math.pow(base, exp)
console.log(power(2)(10))

// this
Array.prototype.last = function () {
  console.log(this[this.length - 1])
}

Array.prototype.first = () => {
  console.log(this[0])  // doesn't work
}

const numbers = [1, 2, 3]
numbers.last()
numbers.first()
