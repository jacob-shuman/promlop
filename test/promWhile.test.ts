import {promWhile} from "../src/index";

describe("Loop", () => {
  test("promWhile", () => {
    expect.assertions(1);
    let test: string = "";
    let iterator: number = 0;
    let max: number = 2;

    return promWhile({
      condition: async () => {
        if (iterator < max) test += "c";
        return iterator < max;
      },
      promise: async () => {
        test += iterator;
        iterator++;
      }
    }).then(() => {
      let testManual: string = "";
      let iteratorManual: number = 0;

      while (iteratorManual < max) {
        testManual += "c" + iteratorManual;

        iteratorManual++;
      }

      expect(test).toEqual(testManual);
    });
  });
});
