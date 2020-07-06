const { Observable } = require('rxjs')

const promise = new Promise(resolve => resolve('Promise is nice!'))

promise.then(console.log)

const observable = new Observable(subscriber => {
  subscriber.next('Observable')
  subscriber.next('is')
  setTimeout(() => {
    subscriber.next('nice!!!')
    subscriber.complete()
  }, 1000)
})

observable.subscribe(console.log)
observable.subscribe(text => console.log(text.toUpperCase()))
