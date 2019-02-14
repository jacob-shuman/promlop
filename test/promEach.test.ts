import {promEach} from "../src/index";

describe("Loop", () => {
  test("promEach", () => {
    expect.assertions(1);
    let testString: string = "";
    let testPromises = [
      async () => {
        testString += "a";
      },
      async () => {
        testString += "b";
      },
      async () => {
        testString += "c";
      },
      async () => {
        testString += "d";
      }
    ];

    return promEach({
      promises: testPromises,
      each: async (promise: Promise<any>) => {}
    }).then(() => {
      expect(testString).toEqual("abcd");
    });
  });
});
