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

const result = composition(
  scream, emphasize, makeLarge
)('stop')

console.log(result)
