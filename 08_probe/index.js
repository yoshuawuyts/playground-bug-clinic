const summary = require('server-summary')
const trace = require('jstrace')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  trace('request:start', { url: req.url })
  res.setHeader('content-type', 'application/json')

  var body = null
  if (url.parse(req.url).path === '/prognosis') {
    res.statusCode = 200
    body = { ok: true }
  } else {
    res.statusCode = 404
    body = { error: 'notfound' }
  }

  res.on('finish', function () {
    trace('request:end', { statusCode: res.statusCode, body: body })
  })

  res.end(JSON.stringify(body))
})

server.listen(9999)
