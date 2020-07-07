const { Observable } = require('rxjs')

const observable = Observable.create(subscriber => {
  subscriber.next('Observable')
  subscriber.next('is')
  subscriber.next('so')
  subscriber.next('powerful!')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('What the fuck?')
  }
})

// observable.subscribe(
//   value => console.log(`Success: ${value}`),
//   error => console.error(`Error: ${error}`),
//   () => console.log('End!')
// )

observable.subscribe({
  next(value) {
    console.log(`Success: ${value}`)
  },
  error(errorMsg) {
    console.error(`Error: ${errorMsg}`)
  },
  complete() {
    console.log('End!')
  }
})
