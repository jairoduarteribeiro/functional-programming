const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')

fn.getFilesFromDir(subtitlesPath)
  .then(files => fn.elementsEndingWith(files, 'srt'))
  .then(subtitles => fn.readFiles(subtitles))
  .then(contents => contents.join(/\r\n|\n/g))
  .then(allContent => allContent.split(/\r\n|\n/g))
  .then(lines => fn.removeEmpty(lines))
  .then(notEmptyLines => fn.removeElementWithPattern(notEmptyLines, '-->'))
  .then(validLines => fn.removeNumericElements(validLines))
  .then(console.log)