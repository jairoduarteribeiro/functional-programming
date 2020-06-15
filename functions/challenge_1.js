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
