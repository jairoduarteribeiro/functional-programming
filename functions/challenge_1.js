// sum(a)(b)(c) -> a + b + c
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

const sum3_4 = sum(3)(4)
console.log(sum3_4(5))
console.log(sum(3)(4)(5))

// calc(x)(y)(fn) -> fn(x, y)
function calc(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y)
    }
  }
}

function sub(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

const r1 = calc(10)(5)(sub)
const r2 = calc(10)(5)(mult)
console.log(r1, r2)
