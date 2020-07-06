const { Observable, noop } = require('rxjs')

function between(min, max) {
  return new Observable(subscriber => {
    Array(max - min + 1).fill().forEach((_, index) => {
      subscriber.next(min + index)
    })
    subscriber.complete()
  })
}

between(4, 10).subscribe(
  value => console.log(`Value = ${value}`),
  noop,
  () => console.log('End!')
)
