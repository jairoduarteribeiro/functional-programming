function composition(...fns) {
  return function (value) {
    return fns.reduce((accumulator, fn) => {
      return fn(accumulator)
    }, value)
  }
}

function scream(text) {
  return text.toUpperCase()
}

function emphasize(text) {
  return `${text}!!!`
}

function makeLarge(text) {
  return text.split('').join(' ')
}

const dangerous = composition(
  scream, emphasize, makeLarge
)

const warning = composition(
  scream, emphasize
)

const result1 = dangerous('stop')
const result2 = warning('take care')

console.log(result1)
console.log(result2)
