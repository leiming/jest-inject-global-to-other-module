const { getENV } =  require('@someone/mod-b')

const getMyENV = () => {
  // It works
  return __DEV__
}

const getModuleENV = () => {
  // Bad
  const env = getENV()
  console.log(env)
}

module.exports = {
  getMyENV,
  getModuleENV,
}
