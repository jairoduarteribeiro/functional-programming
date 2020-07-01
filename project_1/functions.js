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

function readFile(fullPath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(fullPath)
      resolve(content.toString())
    } catch (exception) {
      reject(exception)
    }
  })
}

function readFiles(fullPaths) {
  return Promise.all(
    fullPaths.map(fullPath => readFile(fullPath))
  )
}

function removeEmpty(array) {
  return array.filter(element => element.trim())
}

function removeElementWithPattern(array, pattern) {
  return array.filter(element => !element.includes(pattern))
}

function removeNumericElements(array) {
  return array.filter(element => isNaN(element))
}

module.exports = {
  getFilesFromDir,
  elementsEndingWith,
  readFiles,
  removeEmpty,
  removeElementWithPattern,
  removeNumericElements
}