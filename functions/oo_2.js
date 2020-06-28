class Product {
  constructor(name, price, discount = 0.50) {
    this.name = name
    this.price = price
    this.discount = discount
  }

  get name() {
    return `Product: ${this._name}`
  }

  set name(productName) {
    this._name = productName.toUpperCase()
  }

  get price() {
    return this._price
  }

  set price(productPrice) {
    if (productPrice >= 0) {
      this._price = productPrice
    }
  }

  get finalPrice() {
    return this.price * (1 - this.discount)
  }
}

const p1 = new Product('Pen', 10)
console.log(p1.name)

const p2 = new Product('Fridge', 3000, 0.25)
p2.price = -1000
console.log(p2.price)
console.log(p2.finalPrice)
