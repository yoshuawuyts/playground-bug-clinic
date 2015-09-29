require('stackup')
const domain = require('domain')

const readFile = require('fs').readFile

module.exports = scenario

function scenario (jsonPath, cb) {
  const d = domain.create()
  d.on('error', cb)
  d.run(function () {
    readFile(jsonPath, {encoding: 'utf8'}, function (error, contents) {
      cb(error, JSON.parse(contents))
    })
  })
}
