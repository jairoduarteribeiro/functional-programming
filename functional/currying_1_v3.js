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

function validate(fn, value) {
  try {
    fn(value)
  } catch (error) {
    return { error }
  }
}

const validLength = lengthBetween(4)(255)
const validProductName = validLength('Invalid name')

const p1 = { name: 'A', price: 14.99, discount: 0.25 }
const p2 = { name: 'AB', price: 14.99, discount: 0.25 }
console.log(validate(validProductName, p1.name))
console.log(validate(validProductName, p2.name))
