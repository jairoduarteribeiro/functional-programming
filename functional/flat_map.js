const lettersArray = [
  ['h', 'e', ['l'], 'l', 'o'],
  [' '],
  ['w', ['o', ['r']], 'l', 'd'],
  ['!', '!', '!']
]

const letters = lettersArray.flat(Infinity)
const result = letters
  .flatMap(letter => [letter, ''])
  .reduce((a, b) => a + b)
console.log(result)
