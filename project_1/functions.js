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

function elementsEndingWith(pattern) {
  return function (elements) {
    return elements.filter(element => element.endsWith(pattern))
  }
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

function groupElements(elements) {
  return elements
    .join(/\r\n|\n/g)
    .split(/\r\n|\n/g)
}

function removeEmpty(array) {
  return array.filter(element => element.trim())
}

function removeElementWithPattern(pattern) {
  return function (array) {
    return array.filter(element => !element.includes(pattern))
  }
}

function removeNumericElements(array) {
  return array.filter(element => isNaN(element))
}

module.exports = {
  getFilesFromDir,
  elementsEndingWith,
  readFiles,
  groupElements,
  removeEmpty,
  removeElementWithPattern,
  removeNumericElements
}
