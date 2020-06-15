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
