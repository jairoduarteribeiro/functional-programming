const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const resultFilename = path.join(__dirname, 'result.txt')
const symbols = ['.', '?', '-', ',', '"', '♪', '_', '%', '[', ']', '(', ')']

const countWords = fn.composition(
  fn.readDir,
  fn.endingWith('.srt'),
  fn.readFiles,
  fn.merge,
  fn.splitBy(/\r\n|\n/g),
  fn.removeEmpty,
  fn.removeElementsWithPattern('-->'),
  fn.removeNumericElements,
  fn.removeSymbols(symbols),
  fn.removeTags,
  fn.merge,
  fn.splitBy(' '),
  fn.removeEmpty,
  fn.removeNumericElements,
  fn.groupWords,
  fn.sortBy('amount', 'desc')
)

countWords(subtitlesPath)
  .then(console.log)
  .catch(console.error)
