// Function declaration
function goodMorning() {
  console.log('Good morning!')
}

goodMorning()

// Function expression
const goodAfternoon = function () {
  console.log('Good afternoon!')
}

goodAfternoon()

// Parameters
function sum(a = 0, b = 0) {
  return a + b
}

let result = sum(3, 4)
console.log(result)

result = sum(4, 5, 6, 7, 8)
console.log(result)

result = sum(3)
console.log(result)

result = sum()
console.log(result)
