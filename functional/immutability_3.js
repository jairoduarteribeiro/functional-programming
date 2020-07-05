const person = {
  name: 'Maria',
  height: 1.76,
  city: 'São Paulo'
}

function changeInformation(person) {
  const newPerson = { ...person }
  newPerson.name = 'João'
  newPerson.city = 'Fortaleza'
  return newPerson
}

const newPerson = changeInformation(person)
console.log(person, newPerson)
