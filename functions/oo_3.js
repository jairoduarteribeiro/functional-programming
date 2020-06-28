function Product(name, price, discount = 0.50) {
  this.name = name
  this.price = price
  this._discount = discount

  this.finalPrice = function () {
    return this.price * (1 - this.discount)
  }
}

Product.prototype.log = function () {
  console.log(
    `Name: ${this.name} Price: R$${this.price} Discount: ${this.discountStr} Final price: R$${this.finalPrice()}`
  )
}

Object.defineProperty(Product.prototype, 'discount', {
  get: function () {
    return this._discount
  },
  set: function (newDiscount) {
    if (newDiscount >= 0 && newDiscount <= 1) {
      this._discount = newDiscount
    }
  }
})

Object.defineProperty(Product.prototype, 'discountStr', {
  get: function () {
    return `${this._discount * 100}%`
  }
})

const p1 = new Product('Pen', 10)
p1.discount = 2
p1.log()

const p2 = new Product('Fridge', 3000, 0.25)
p2.log()
