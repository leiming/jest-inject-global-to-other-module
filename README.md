# Jest Inject Global to Other Module

### Usage

```bash
yarn install
lerna bootstrap

cd packages/mod-a
yarn test
```

```javascript
$ jest
 FAIL  __tests__/main.test.js
  Env
    ✓ getMyENV (3ms)
    ✕ getModuleENV (14ms)

  ● Env › getModuleENV

    ReferenceError: __DEV___ is not defined

      2 | const getENV = () => {
      3 |   console.log(__DEV__)
    > 4 |   return __DEV___
      5 | }
      6 | 
      7 | module.exports = {
      
      at getENV (../mod-b/main.js:4:3)

  console.log ../mod-b/main.js:3
    abc

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total

```
