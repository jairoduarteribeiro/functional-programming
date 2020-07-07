const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const resultFilename = path.join(__dirname, 'result.txt')
const symbols = ['.', '?', '-', ',', '"', '♪', '_', '%', '[', ']', '(', ')']

fn.readDir(subtitlesPath)
  .pipe(
    fn.endingWith('.srt'),
    fn.readFile(),
    fn.splitBy(/\r\n|\n/g),
    fn.removeEmpty()
  )
  //   .then(fn.merge)
  //   .then(fn.removeElementsWithPattern('-->'))
  //   .then(fn.removeNumericElements)
  //   .then(fn.removeSymbols(symbols))
  //   .then(fn.removeTags)
  //   .then(fn.merge)
  //   .then(fn.splitBy(' '))
  //   .then(fn.removeEmpty)
  //   .then(fn.removeNumericElements)
  //   .then(fn.groupWords)
  //   .then(fn.sortBy('amount', 'desc'))
  //   // .then(JSON.stringify)
  //   // .then(fn.writeFile(resultFilename))
  .subscribe({
    next: console.log,
    error: console.error
  })
