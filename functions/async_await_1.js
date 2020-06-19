function wait(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time)
  })
}

// wait()
//   .then(() => console.log('Running promise 1...'))
//   .then(wait)
//   .then(() => console.log('Running promise 2...'))
//   .then(wait)
//   .then(() => console.log('Running promise 3...'))

async function run() {
  await wait(1500)
  console.log('Async/Await 1...')
  await wait(1500)
  console.log('Async/Await 2...')
  await wait(1500)
  console.log('Async/Await 3...')
}

run()
