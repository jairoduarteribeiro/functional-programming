const shoppingCart = [
  { name: 'Caneta', amount: 10, price: 7.99, fragile: true },
  { name: 'Impressora', amount: 1, price: 649.50, fragile: true },
  { name: 'Caderno', amount: 4, price: 27.10, fragile: false },
  { name: 'Lápis', amount: 3, price: 5.82, fragile: false },
  { name: 'Tesoura', amount: 1, price: 19.20, fragile: true }
]

const isFragile = product => product.fragile
const getTotal = product => product.amount * product.price
const getAverage = (accumulator, current, index, array) => {
  return accumulator + current / array.length
}

const average = shoppingCart
  .filter(isFragile)
  .map(getTotal)
  .reduce(getAverage, 0)

console.log(average)
