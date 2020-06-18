const numbers = [1, 2, 3, 4, 5]
const double = num => num * 2
console.log(numbers.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const firstLetter = name => name[0]
const letters = names.map(firstLetter)
console.log(names, letters)
