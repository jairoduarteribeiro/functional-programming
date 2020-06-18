const firstElement = collection => collection[0]
const lowerCase = str => str.toLowerCase()

new Promise(resolve => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))
  .then(firstElement) // get first string of array
  .then(firstElement) // get first letter of string
  .then(lowerCase)    // transform the letter to lower case
  .then(console.log)  // print the result
