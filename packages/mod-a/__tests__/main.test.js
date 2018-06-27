const main = require("../main");

describe("Env", () => {
  test("getGlobal", () => {
    // It works
    expect(main.getGlobal()).toEqual("abc");
  });

  test("getGlobalByModule", () => {
    // will throw error
    expect(main.getGlobalByModule()).toEqual("abc")
  });
});
