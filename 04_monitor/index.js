module.exports = scenario

function scenario (log, cb) {
  var value = 97
  log.info({value: value}, 'scenario')
  log.error({value: value}, 'scenario')

  start()

  log.info({value: value}, 'scenario')

  function start () {
    process.nextTick(thing)
  }

  function thing () {
    value += 131
    log.info({value: value}, 'thing')
    process.nextTick(racer)
  }

  function racer () {
    value &= 255
    log.info({value: value}, 'racer')
    setTimeout(foo, 0)
  }

  function foo () {
    value *= 13
    log.info({value: value}, 'foo')
    cb(value)
  }
}
