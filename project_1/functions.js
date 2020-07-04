const fs = require('fs')
const path = require('path')

function readDir(dirPath) {
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

function endingWith(pattern) {
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

function writeFile(filename) {
  return function (content) {
    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(filename, content)
        resolve(`Result saved in file ${filename}`)
      } catch (exception) {
        reject(exception)
      }
    })
  }
}

function removeEmpty(elements) {
  return elements.filter(element => element.trim())
}

function removeElementsWithPattern(pattern) {
  return function (elements) {
    return elements.filter(element => !element.includes(pattern))
  }
}

function removeNumericElements(elements) {
  return elements.filter(element => isNaN(element))
}

function removeSymbols(symbols) {
  return function (elements) {
    return elements.map(element => {
      return symbols.reduce((accumulator, symbol) => {
        return accumulator.split(symbol).join('')
      }, element)
    })
  }
}

function removeTags(elements) {
  return elements.map(element => element.split(/<.+?>/ig).join(''))
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
  readDir,
  endingWith,
  readFiles,
  writeFile,
  removeEmpty,
  removeElementsWithPattern,
  removeNumericElements,
  removeSymbols,
  removeTags,
  merge,
  splitBy,
  groupWords,
  sortBy
}
