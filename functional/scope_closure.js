const x = 3

function other() {
  const x = 97
  function sum() {
    return x + 3
  }
  return sum
}

module.exports = other()
