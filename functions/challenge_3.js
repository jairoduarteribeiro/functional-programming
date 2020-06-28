const fs = require('fs')
const path = require('path')

const fullPath = path.join(__dirname, 'data.txt')

function readFile(path) {
  return new Promise(resolve => {
    fs.readFile(path, {}, (_, content) => resolve(content))
  })
}

readFile(fullPath)
  .then(content => content.toString())
  .then(contentStr => contentStr.split(/\r\n|\n/g))
  .then(lines => lines.join(', '))
  .then(str => `The final value is ${str}.`)
  .then(console.log)
