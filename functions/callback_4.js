const shoppingCart = [
  { name: 'Caneta', amount: 10, price: 7.99 },
  { name: 'Impressora', amount: 0, price: 649.50 },
  { name: 'Caderno', amount: 4, price: 27.10 },
  { name: 'Lápis', amount: 3, price: 5.82 },
  { name: 'Tesoura', amount: 1, price: 19.20 }
]

const amountGreaterThanZero = product => product.amount > 0
const getName = product => product.name

const namesValidProducts = shoppingCart
  .filter(amountGreaterThanZero)
  .map(getName)

console.log(namesValidProducts)
