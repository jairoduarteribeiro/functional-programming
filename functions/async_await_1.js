function wait(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time)
  })
}

wait()
  .then(() => console.log('Running promise 1...'))
  .then(wait)
  .then(() => console.log('Running promise 2...'))
  .then(wait)
  .then(() => console.log('Running promise 3...'))
