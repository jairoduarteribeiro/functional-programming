const path = require('path')
const fn = require('./functions')
const { fstat } = require('fs')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const resultFilename = path.join(__dirname, 'result.txt')
const symbols = ['.', '?', '-', ',', '"', '♪', '_', '%', '<i>', '</i>', '\r', '[', ']', '(', ')']

fn.readDir(subtitlesPath)
  .then(fn.endingWith('.srt'))
  .then(fn.readFiles)
  .then(fn.merge)
  .then(fn.splitBy(/\r\n|\n/g))
  .then(fn.removeEmpty)
  .then(fn.removeElementsWithPattern('-->'))
  .then(fn.removeNumericElements)
  .then(fn.writeFile(resultFilename))
  .then(console.log)
  .catch(console.error)
