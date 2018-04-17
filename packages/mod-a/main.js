const { getENV } =  require('@someone/mod-b')

const getMyENV = () => {
  // Good, it works well
  console.log(__DEV__)
  return __DEV__
}

const getModuleENV = () => {
  // Bad, throw `ReferenceError: __DEV___ is not defined`
  const env = getENV()
  console.log(env)
  return env
}

module.exports = {
  getMyENV,
  getModuleENV,
}
