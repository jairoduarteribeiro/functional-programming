function composition(...fns) {
  return function (value) {
    return fns.reduce(async (accumulator, fn) => {
      return Promise.resolve(accumulator) === accumulator
        ? fn(await accumulator)
        : fn(accumulator)
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
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text.split('').join(' '))
    }, 3000);
  })
}

const dangerous = composition(
  scream, emphasize, makeLarge
)

const warning = composition(
  scream, emphasize
)

dangerous('stop')
  .then(console.log)

warning('take care')
  .then(console.log)
