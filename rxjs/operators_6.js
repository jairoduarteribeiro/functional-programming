const { from, Observable } = require('rxjs')

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable(subscriber => {
      const sub = operatorFn(subscriber)
      source.subscribe({
        next: sub.next,
        error: sub.error || (errorMsg => subscriber.error(errorMsg)),
        complete: sub.complete || (() => subscriber.complete()),
      })
    })
  }
}

function first() {
  return createPipeableOperator(subscriber => ({
    next(value) {
      subscriber.next(value)
      subscriber.complete()
    }
  }))
}

function nothing() {
  return createPipeableOperator(subscriber => ({
    next(value) {
      subscriber.complete()
    }
  }))
}

function last() {
  let lastValue
  return createPipeableOperator(subscriber => ({
    next(value) {
      lastValue = value
    },
    complete() {
      if (lastValue) {
        subscriber.next(lastValue)
      }
      subscriber.complete()
    }
  }))
}

from([1, 2, 3, 4, 5, 6])
  .pipe(
    // first(),
    // nothing(),
    last()
  )
  .subscribe(console.log)
