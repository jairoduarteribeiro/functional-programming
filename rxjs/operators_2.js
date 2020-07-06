const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll } = require('rxjs/operators')

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/jairoribeiro167/repos'
})
  .pipe(
    map(response => JSON.parse(response.xhr.responseText)),
    concatAll(),
    map(repository => repository.full_name)
  )
  .subscribe(console.log)
