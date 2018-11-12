import { promLoop, promIterate } from "../src/index";

describe("Loop", () => {
  test("Basic Loop", () => {
    expect.assertions(1);
    let test: string = "";
    let i = 0;
    let max = 5;

    return promLoop({
      promise: async () => {
        test += `index ${i}\n`;
        i++;
        return { continue: i < max };
      }
    }).then(() => {
      let demo = "";

      for (let a = 0; a < max; a++) demo += `index ${a}\n`;

      expect(test).toEqual(demo);
    });
  });
});

describe("Iterate", () => {
  let firstPromise = async (context: {
    data?: { test: string };
    index: number;
  }) => {
    context.data = { test: "asdf" };
    console.log("First promise");
    return { data: context.data };
  };

  let secondPromise = async (context: {
    data?: { test: string };
    index: number;
  }) => {
    console.log("Second promise");
    return { data: context.data };
  };

  let thirdPromise = async (context: {
    data?: { test: string };
    index: number;
  }) => {
    console.log("Third promise");
    return { data: context.data };
  };

  test("Basic Iterate", () => {
    expect.assertions(1);
    return promIterate<{ test: string }>({
      promises: [firstPromise]
    }).then((data: { test: string }) => {
      expect(data).toEqual({ test: "asdf" });
    });
  });
  test("Index Over Bounds", () => {
    expect.assertions(1);
    return promIterate({
      promises: [firstPromise, secondPromise, thirdPromise],
      index: 5
    }).catch((err) => {
      expect(err).toBe("Index over number of promises");
    });
  });
});
