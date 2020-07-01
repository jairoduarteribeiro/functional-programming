const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')

fn.getFilesFromDir(subtitlesPath)
  .then(files => fn.elementsEndingWith(files, 'srt'))
  .then(subtitles => fn.readFiles(subtitles))
  .then(console.log)
