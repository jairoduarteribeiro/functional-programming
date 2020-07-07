const path = require('path')
const fn = require('./functions')
const { toArray } = require('rxjs/operators')

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles')
const resultFilename = path.join(__dirname, 'result.txt')
const symbols = ['.', '?', '!', '-', ',', '"', '♪', '_', '%', '[', ']', '(', ')']

fn.readDir(subtitlesPath)
  .pipe(
    fn.endingWith('.srt'),
    fn.readFile(),
    fn.splitBy(/\r\n|\n/g),
    fn.removeEmpty(),
    fn.removeElementsWithPattern('-->'),
    fn.removeNumericElements(),
    fn.removeSymbols(symbols),
    fn.removeTags(),
    fn.splitBy(' '),
    fn.removeEmpty(),
    fn.removeNumericElements(),
    toArray(),
    fn.groupWords()
  )
  //   .then(fn.merge)
  //   .then(fn.merge)
  //   .then(fn.sortBy('amount', 'desc'))
  //   // .then(JSON.stringify)
  //   // .then(fn.writeFile(resultFilename))
  .subscribe({
    next: console.log,
    error: console.error
  })
