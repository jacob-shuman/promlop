import {promFor} from "../src/index";

describe("Loop", () => {
  test("promFor", () => {
    expect.assertions(1);
    let test: string = "";
    let i = 0;
    let max = 3;

    return promFor({
      iterator: i,
      condition: async (iterator: number) => iterator < max,
      update: async (iterator: number) => iterator + 1,
      promise: async (iterator: number) => {
        test = test + iterator;
      }
    }).then(() => {
      expect(test).toEqual("012");
    });
  });
});
