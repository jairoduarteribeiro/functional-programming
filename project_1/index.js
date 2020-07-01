const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')

fn.getFilesFromDir(subtitlesPath)
  .then(fn.elementsEndingWith('srt'))
  .then(fn.readFiles)
  .then(fn.groupElements)
  .then(fn.removeEmpty)
  .then(fn.removeElementWithPattern('-->'))
  .then(fn.removeNumericElements)
  .then(console.log)
