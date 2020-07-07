const { from, observable } = require('rxjs')
const { mergeMap, map } = require('rxjs/operators')

const observable1 = from([1, 2, 3, 4])
const observable2 = from([5, 6, 7, 8])

observable1
  .pipe(
    mergeMap(n1 => observable2.pipe(
      map(n2 => `${n1} -> ${n2}`)
    ))
  )
  .subscribe(console.log)
