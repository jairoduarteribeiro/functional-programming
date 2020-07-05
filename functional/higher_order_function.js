function run(fn, ...params) {
  return function (initialText) {
    return `${initialText} ${fn(...params)}`
  }
}

function sum(a, b, c) {
  return a + b + c
}

function mult(a, b) {
  return a * b
}

console.log(run(sum, 2, 3, 4)('Sum result is'))
console.log(run(mult, 5, 6)('Multiplication result is'))
