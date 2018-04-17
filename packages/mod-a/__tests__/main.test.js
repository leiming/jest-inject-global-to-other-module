const main = require("../main");

describe("Env", () => {
  test("getMyENV", () => {
    expect(main.getMyENV()).toEqual("abc")
  });

  test("getModuleENV", () => {
     //will throw error
     expect(main.getModuleENV()).toEqual("abc")
  });
});
