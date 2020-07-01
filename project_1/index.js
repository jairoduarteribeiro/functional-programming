const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')

fn.getFilesFromDir(subtitlesPath)
  .then(console.log)
