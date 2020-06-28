function generateRandomNumbersBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    resolve(random)
  })
}

generateRandomNumbersBetween(1, 60)
  .then(num => num * 10)
  .then(numX10 => `Generated number: ${numX10}`)
  .then(console.log)
