import {getHref, getModuleHref} from "../main";


describe("Location", () => {
  jsdom.reconfigure({
    url: "https://www.google.com/"
  });
  test("getHref", () => {
    expect(getHref()).toEqual('https://www.google.com/')
  });

  test("getMyHref", () => {
    expect(getModuleHref()).toEqual('https://www.google.com/')
  });
});
