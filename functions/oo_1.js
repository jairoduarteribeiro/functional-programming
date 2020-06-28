function Product(name, price, discount = 0.50) {
  this.name = name
  this.price = price
  this.discount = discount

  this.finalPrice = function () {
    return this.price * (1 - this.discount)
  }
}

const p1 = new Product('Pen', 10)
console.log(p1.name)

const p2 = new Product('Fridge', 3000, 0.25)
console.log(p2.price)
console.log(p2.finalPrice())
