const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const symbols = ['.', '?', '-', ',', '"', '♪', '_', '%', '<i>', '</i>', '\r', '[', ']', '(', ')']

fn.readDir(subtitlesPath)
  .then(fn.endingWith('.srt'))
  .then(fn.readFiles)
  .then(fn.merge)
  .then(fn.splitBy(/\r\n|\n/g))
  .then(fn.removeEmpty)
  .then(fn.removeElementsWithPattern('-->'))
  .then(console.log)
  .catch(console.error)
