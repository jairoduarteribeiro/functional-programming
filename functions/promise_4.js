function generateRandomNumbersBetween(min, max, time) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(function () {
      min = Math.ceil(min)
      max = Math.floor(max)
      const random = Math.floor(Math.random() * (max - min + 1)) + min
      resolve(random)
    }, time)
  })
}

function generateSomeRandomNumbers() {
  return Promise.all([
    generateRandomNumbersBetween(1, 60, 4000),
    generateRandomNumbersBetween(1, 60, 1000),
    generateRandomNumbersBetween(1, 60, 500),
    generateRandomNumbersBetween(1, 60, 3000),
    generateRandomNumbersBetween(1, 60, 100),
    generateRandomNumbersBetween(1, 60, 1500),
  ])
}

console.time('promise')
generateSomeRandomNumbers()
  .then(console.log)
  .then(() => console.timeEnd('promise'))
