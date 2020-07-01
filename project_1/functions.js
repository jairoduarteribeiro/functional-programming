const fs = require('fs')
const path = require('path')

function getFilesFromDir(dirPath) {
  const files = fs.readdirSync(dirPath)
  return files.map(file => path.join(dirPath, file))
}

module.exports = {
  getFilesFromDir
}
