const shoppingCart = [
  { name: 'Caneta', amount: 10, price: 7.99 },
  { name: 'Impressora', amount: 0, price: 649.50 },
  { name: 'Caderno', amount: 4, price: 27.10 },
  { name: 'Lápis', amount: 3, price: 5.82 },
  { name: 'Tesoura', amount: 1, price: 19.20 }
]

const getTotal = product => product.amount * product.price
const sum = (accumulator, current) => accumulator + current

const total = shoppingCart
  .map(getTotal)
  .reduce(sum)

console.log(total)
