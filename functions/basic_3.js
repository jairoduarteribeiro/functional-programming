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

const power = base => exp => Math.pow(base, exp)
console.log(power(2)(10))
