describe("bs", () => {
  test("bs2", () => {
    expect(1).toBe(1);
  });
});

// import promlop from "../src/index";

// describe("Loop", () => {
//   test("Basic Loop", () => {
//     expect.assertions(1);
//     let test: string = "";
//     let i = 0;
//     let max = 5;

//     return promLoop({
//       promise: async () => {
//         test += `index ${i}\n`;
//         i++;
//         return {continue: i < max};
//       }
//     }).then(() => {
//       let demo = "";

//       for (let a = 0; a < max; a++) demo += `index ${a}\n`;

//       expect(test).toEqual(demo);
//     });
//   });
// });

// describe("Update", () => {
//   test("Basic Update", () => {
//     expect.assertions(1);

//     return promUpdate<number>({
//       defaultValue: 0,
//       promise: async (value?: number) => {
//         console.log(`Current value is: ${value}`);
//         return {
//           continue: value! < 10,
//           update: true,
//           value: value! + 1
//         };
//       },
//       done: async (value?: number) => {
//         console.log("Value is " + value);
//         expect(value).toEqual(10);
//         return value;
//       }
//     });
//   });

//   test("Example Update", () => {
//     let start = 0;

//     return promUpdate<number>({
//       defaultValue: 0,
//       promise: async (value?: number) => {
//         console.log("Value is: " + value);

//         return {
//           continue: value! < 10, // Loop will continue until this value is false
//           update: true, // Value will update if true AND continue must be true
//           value: value! + 1 // Updated value (if update is true)
//         };
//       },
//       done: async (value?: number) => {
//         return 5;
//       }
//     })
//       .then((value?: number) => {
//         // console.log("Value changed from " + start + " to " + value + "!");
//         console.log(value);
//         console.log(value == 0.1);
//         expect(value!).toStrictEqual(5);
//       })
//       .catch((err) => {});
//   });
// });

// describe("Iterate", () => {
//   let firstPromise = async (context: {data?: {test: string}; index: number}) => {
//     context.data = {test: "asdf"};
//     console.log("First promise");
//     return {data: context.data};
//   };

//   let secondPromise = async (context: {data?: {test: string}; index: number}) => {
//     console.log("Second promise");
//     return {data: context.data};
//   };

//   let thirdPromise = async (context: {data?: {test: string}; index: number}) => {
//     console.log("Third promise");
//     return {data: context.data};
//   };

//   test("Basic Iterate", () => {
//     expect.assertions(1);
//     return promIterate<{test: string}>({
//       promises: [firstPromise]
//     }).then((data: {test: string}) => {
//       expect(data).toEqual({test: "asdf"});
//     });
//   });
//   test("Index Over Bounds", () => {
//     expect.assertions(1);
//     return promIterate({
//       promises: [firstPromise, secondPromise, thirdPromise],
//       index: 5
//     }).catch((err) => {
//       expect(err).toBe("Index over number of promises");
//     });
//   });
// });
