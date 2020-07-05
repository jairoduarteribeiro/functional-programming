const PI = 3.141592

// Impure - Math.PI is external
function circArea(radius) {
  return radius * radius * Math.PI
}

console.log(circArea(10))
console.log(circArea(10))
console.log(circArea(10))

// Pure
function pureCircArea(radius, pi) {
  return radius * radius * pi
}

console.log(pureCircArea(10, 3.14))
console.log(pureCircArea(10, PI))
console.log(pureCircArea(10, Math.PI))
