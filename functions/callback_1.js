function exec(fn, a, b) {
  fn(a, b)
}

const logSum = (x, y) => console.log(x + y)
const logSub = (x, y) => console.log(x - y)
const sub = (x, y) => x - y

exec(logSum, 56, 38)
exec(logSub, 182, 27)

const r = sub(50, 25)
console.log(r)

setInterval(function () {
  console.log('Exec...')
}, 3000)
