function executeOrFail(value, percentError) {
  return new Promise((resolve, reject) => {
    Math.random() < percentError ? reject('Some error ocurred') : resolve(value)
  })
}

executeOrFail('Testing', 0.9)
  .then(value => console.log(`Value: ${value}.`))
  .catch(error => console.error(`Error: ${error}.`))
