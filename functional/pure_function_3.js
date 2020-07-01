let executions = 0

// Impure - Side effects on variable executions
function sum(a, b) {
  ++executions
  return a - b
}

console.log(executions)
console.log(sum(66, 31))
console.log(sum(66, 31))
console.log(sum(66, 31))
console.log(sum(66, 31))
console.log(sum(66, 31))
console.log(executions)
