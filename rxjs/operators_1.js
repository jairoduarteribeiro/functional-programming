const { /*of,*/ from } = require('rxjs')
const { last, map } = require('rxjs/operators')

// of(1, 2, 'ana', false, 'last')
from([1, 2, 'ana', false, 'last'])
  .pipe(
    last(),
    map(str => str[0]),
    map(letter => `Letter found: ${letter}`)
  )
  .subscribe(console.log)
