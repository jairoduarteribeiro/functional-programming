const { Observable } = require('rxjs')

function ofWithDelay(time, ...elements) {
  return new Observable(subscriber => {
    (elements || []).forEach((element, index) => {
      setTimeout(() => {
        subscriber.next(element)
        if (index === elements.length - 1) {
          subscriber.complete()
        }
      }, time * (index + 1));
    })
  })
}

ofWithDelay(2000, 1, 2, 3, 4, 5, 6).subscribe(console.log)
