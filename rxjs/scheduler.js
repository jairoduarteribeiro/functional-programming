const { from } = require('rxjs')

console.log('Before')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).subscribe(console.log)

console.log('After')
