const { of, Observable } = require('rxjs')

function endingWith(text) {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(value.filter(element => element.endsWith(text)))
          } else if (value.endsWith(text)) {
            subscriber.next(value)
          }
        },
        error(msg) {
          subscriber.error(msg)
        },
        complete() {
          subscriber.complete()
        }
      })
    })
  }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
  .pipe(endingWith('Silva'))
  .subscribe(console.log)
