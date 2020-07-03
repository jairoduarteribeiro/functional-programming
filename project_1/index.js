const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const symbols = ['.', '?', '-', ',', '"', '♪', '_', '%', '<i>', '</i>', '\r', '[', ']', '(', ')']

fn.readDir(subtitlesPath)
  .then(fn.filesEndingWith('.srt'))
  .then(console.log)
  .catch(console.error)
