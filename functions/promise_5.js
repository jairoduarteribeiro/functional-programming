function executeOrFail(value, percentError) {
  return new Promise((resolve, reject) => {
    try {
      con.log('This line will throw an exception')
      if (Math.random() < percentError) {
        reject('Some error ocurred')
      } else {
        resolve(value)
      }
    } catch (exception) {
      reject(exception)
    }
  })
}

executeOrFail('Testing', 0.9)
  .then(value => `Value: ${value}.`)
  .then(
    str => consol.log(str), // sintax error
    error => console.error(`Specific error: ${error}.`)
  )
  .catch(error => console.error(`General error: ${error}.`))
