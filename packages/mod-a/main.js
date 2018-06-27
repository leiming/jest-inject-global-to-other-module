const { getENV } = require('@someone/mod-b')

const getGlobal = () => {
  // Good, it works well
  return __DEV__
}

const getGlobalByModule = () => {
  // Bad, throw `ReferenceError: __DEV___ is not defined`
  const env = getENV()
  return env
}

module.exports = {
  getGlobal,
  getGlobalByModule,
}
