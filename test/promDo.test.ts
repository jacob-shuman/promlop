import {promDo} from "../src/index";

describe("Loop", () => {
  test("promDo", () => {
    expect.assertions(1);
    let test: string = "";
    let iterator: number = 0;
    let max: number = 2;

    return promDo({
      condition: async () => {
        test += "c";
        return iterator++ < max;
      },
      promise: async () => {
        test += iterator;
      }
    }).then(() => {
      let testManual: string = "";
      let iteratorManual: number = 0;

      do {
        testManual += iteratorManual;
        testManual += "c";
      } while (iteratorManual++ < max);

      expect(test).toEqual(testManual);
    });
  });
});
