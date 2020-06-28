// setTimeout(function () {
//   console.log('Running callback...')

//   setTimeout(function () {
//     console.log('Running callback...')

//     setTimeout(function () {
//       console.log('Running callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

function wait(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Running promise...')
      resolve()
    }, time)
  })
}

wait()
  .then(wait)
  .then(wait)
