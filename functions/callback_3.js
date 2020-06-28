const numbers = [1, 2, 3, 4, 5]
const double = num => num * 2
console.log(numbers.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const firstLetter = name => name[0]
const letters = names.map(firstLetter)
console.log(names, letters)

const shoppingCart = [
  { name: 'Caneta', amount: 10, price: 7.99 },
  { name: 'Impressora', amount: 0, price: 649.50 },
  { name: 'Caderno', amount: 4, price: 27.10 },
  { name: 'Lápis', amount: 3, price: 5.82 },
  { name: 'Tesoura', amount: 1, price: 19.20 }
]

const getName = product => product.name
const getTotal = product => product.amount * product.price

console.log(shoppingCart.map(getName))
console.log(shoppingCart.map(getTotal))

Array.prototype.myMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this))
  }
  return mapped
}

console.log(shoppingCart.myMap(getName))
console.log(shoppingCart.myMap(getTotal))
