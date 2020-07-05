const person = Object.freeze({
  name: 'Maria',
  height: 1.76,
  city: 'São Paulo',
  address: Object.freeze({
    street: 'ABC'
  })
})

function changeInformation(person) {
  const newPerson = { ...person }
  newPerson.name = 'João'
  newPerson.city = 'Fortaleza'
  newPerson.address.street = '123'  // This line makes the function impure.
  return newPerson
}

const newPerson = changeInformation(person)
console.log(person, newPerson)
