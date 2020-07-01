const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']

fn.getFilesFromDir(subtitlesPath)
  .then(fn.elementsEndingWith('srt'))
  .then(fn.readFiles)
  .then(fn.groupElements)
  .then(fn.removeEmpty)
  .then(fn.removeElementWithPattern('-->'))
  .then(fn.removeNumericElements)
  .then(fn.removeSymbols(symbols))
  .then(console.log)
