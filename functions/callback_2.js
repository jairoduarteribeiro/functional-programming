const fs = require('fs')
const path = require('path')

const fullPath = path.join(__dirname, 'data.txt')

function showContent(_, content) {
  console.log(content.toString())
}

console.log('Begin')
fs.readFile(fullPath, {}, showContent)
fs.readFile(fullPath, {}, (_, content) => console.log(content.toString()))
console.log('End')

console.log('Begin sync')
const content = fs.readFileSync(fullPath)
console.log(content.toString())
console.log('End sync')
