const path = require('path')
const fn = require('./functions')
const _ = require('lodash')
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators')

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
    groupBy(element => element.toLowerCase()),
    mergeMap(group => group.pipe(toArray())),
    map(words => ({
      word: words[0].toLowerCase(),
      amount: words.length
    })),
    toArray(),
    map(array => _.sortBy(array, element => -element.amount))
  )
  //   // .then(JSON.stringify)
  //   // .then(fn.writeFile(resultFilename))
  .subscribe({
    next: console.log,
    error: console.error
  })
