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

function returnValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function returnValueQuickly() {
  return 20 // return a promise
}

async function run() {
  const value = await returnValueQuickly()

  await wait(1500)
  console.log(`Async/Await ${value}...`)
  await wait(1500)
  console.log(`Async/Await ${value + 1}...`)
  await wait(1500)
  console.log(`Async/Await ${value + 2}...`)

  return value + 3
}

async function showReturnWithoutThen() {
  const value = await run()
  console.log(value)
}

showReturnWithoutThen()
