const { timer, Subscription } = require('rxjs')

const observable = timer(3000, 500)

const subscription1 = observable.subscribe(num => {
  console.log(`#1 Generated number: ${num}`)
})

const subscription2 = observable.subscribe(num => {
  console.log(`#2 Generated number: ${num}`)
})

const subscription = new Subscription()
subscription.add(subscription1)
subscription.add(subscription2)

setTimeout(() => {
  subscription.unsubscribe()
}, 10000);
