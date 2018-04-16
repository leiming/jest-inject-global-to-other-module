module.exports = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom-global",
  testURL: "https://www.google.com/", // not work
  globals: {
    __DEV__: true,
    location: {

    } // not work
  }
};
