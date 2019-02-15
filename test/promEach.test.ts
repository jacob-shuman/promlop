import {promEach} from "../src/index";

describe("Loop", () => {
  test("promEach", () => {
    expect.assertions(1);
    let testString: string = "";
    let testPromises: Array<() => Promise<any>> = [
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
      each: async (result: any) => {}
    }).then(() => {
      expect(testString).toEqual("abcd");
    });
  });
});
