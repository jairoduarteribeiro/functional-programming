function generateRandomNumbersBetween(min, max, forbiddenNumbers) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise((resolve, reject) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    if (forbiddenNumbers.includes(random)) {
      reject('Repeated number')
    }
    resolve(random)
  })
}

async function generateMegaSena(quantity, attempts = 1) {
  try {
    const numbers = []
    for (let _ of Array(quantity).fill()) {
      numbers.push(await generateRandomNumbersBetween(1, 60, numbers))
    }
    return numbers.sort((a, b) => a - b)
  } catch (e) {
    if (attempts > 100) {
      throw 'Some error occurred'
    }
    return generateMegaSena(quantity, attempts + 1)
  }
}

generateMegaSena(15)
  .then(console.log)
  .catch(console.error)
