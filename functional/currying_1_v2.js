function lengthBetween(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        const length = (text || '').trim().length
        if (length < min || length > max) {
          throw error
        }
      }
    }
  }
}

const p1 = { name: 'A', price: 14.99, discount: 0.25 }
lengthBetween(4)(255)('Invalid name')(p1.name)
