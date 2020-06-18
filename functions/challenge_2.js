const shoppingCart = [
  { name: 'Caneta', amount: 10, price: 7.99, fragile: true },
  { name: 'Impressora', amount: 1, price: 649.50, fragile: true },
  { name: 'Caderno', amount: 4, price: 27.10, fragile: false },
  { name: 'Lápis', amount: 3, price: 5.82, fragile: false },
  { name: 'Tesoura', amount: 1, price: 19.20, fragile: true }
]

const average = shoppingCart
  .filter(product => product.fragile)
  .map(product => product.amount * product.price)
  .reduce((accumulator, current) => {
    const newAmount = accumulator.amount + 1
    const newTotal = accumulator.total + current

    return {
      amount: newAmount,
      total: newTotal,
      average: newTotal / newAmount
    }
  }, { amount: 0, total: 0, average: 0 })
  .average

console.log(average)
