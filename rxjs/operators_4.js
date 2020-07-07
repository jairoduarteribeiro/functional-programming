const { from, Observable } = require('rxjs')

function first() {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(value) {
          subscriber.next(value)
          subscriber.complete()
        }
      })
    })
  }
}

function nothing() {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(value) {
          subscriber.complete()
        }
      })
    })
  }
}

function last() {
  return function (source) {
    return new Observable(subscriber => {
      let lastValue
      source.subscribe({
        next(value) {
          lastValue = value
        },
        complete() {
          if (lastValue) {
            subscriber.next(lastValue)
          }
          subscriber.complete()
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5, 6])
  .pipe(
    // first(),
    // nothing(),
    last()
  )
  .subscribe(console.log)
