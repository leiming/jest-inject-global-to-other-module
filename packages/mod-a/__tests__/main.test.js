const main = require("../main");

describe("Env", () => {
  test("getMyENV", () => {
    expect(main.getMyENV()).toEqual(true)
  });

  test("getModuleENV", () => {
     //will throw error
     expect(main.getModuleENV()).toEqual(true)
  });
});
