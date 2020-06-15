function goodMorning() {
  console.log('Good morning!')
}

const goodAfternoon = function () {
  console.log('Good afternoon!')
}

function exec(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

exec(3)
exec(goodMorning)
exec(goodAfternoon)

function power(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}

const power2 = power(2)
console.log(power2(8))

const power3_4 = power(3)(4)
console.log(power3_4)
