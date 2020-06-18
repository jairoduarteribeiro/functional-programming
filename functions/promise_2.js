// setTimeout(function () {
//   console.log('Executando callback...')

//   setTimeout(function () {
//     console.log('Executando callback...')

//     setTimeout(function () {
//       console.log('Executando callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

function wait(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando promise...')
      resolve()
    }, time)
  })
}

wait()
  .then(wait)
  .then(wait)
