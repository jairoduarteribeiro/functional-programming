const fs = require('fs')
const path = require('path')

function getFilesFromDir(dirPath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(dirPath)
      resolve(
        files.map(file => path.join(dirPath, file))
      )
    } catch (exception) {
      reject(exception)
    }
  })
}

function elementsEndingWith(elements, pattern) {
  return elements.filter(element => element.endsWith(pattern))
}

module.exports = {
  getFilesFromDir,
  elementsEndingWith
}
