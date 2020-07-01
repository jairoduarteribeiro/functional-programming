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

function removeSymbols(symbols) {
  return function (array) {
    return array.map(element => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join('')
      }, element)
    })
  }
}

function merge(elements) {
  return elements.join(' ')
}

function splitBy(text) {
  return function (elements) {
    return elements.split(text)
  }
}

function groupWords(words) {
  return Object.values(words.reduce((acc, word) => {
    const lowerWord = word.toLowerCase()
    const amount = acc[lowerWord] ? acc[lowerWord].amount + 1 : 1
    acc[lowerWord] = { word: lowerWord, amount }
    return acc
  }, {}))
}

function sortBy(attr, order = 'asc') {
  return function (elements) {
    const sortFn = (el1, el2) => order === 'asc'
      ? el1[attr] - el2[attr]
      : el2[attr] - el1[attr]
    return elements.sort(sortFn)
  }
}

module.exports = {
  getFilesFromDir,
  elementsEndingWith,
  readFiles,
  removeEmpty,
  removeElementWithPattern,
  removeNumericElements,
  removeSymbols,
  merge,
  splitBy,
  groupWords,
  sortBy
}
