# promlop

> An easy to use zero-dependency vanilla promise loop utility.

## Usage

promlop currently provides 2 ways to loop through a series of promises.

### promLoop

```ts
const promlop = require("promlop");

let iteration = 0;

promlop
  .promLoop({
    promise: async () => {
      iteration++;

      return {
        continue: iteration < 5 // Loop will continue until this value is false
      };
    }
  })
  .then(() => {})
  .catch((err) => {});
```

### promIterate

```ts
import { promIterate } from "promlop";

const promiseOne = async () => {
  console.log("First Promise Complete");
  return {};
};

const promiseTwo = async () => {
  console.log("Second Promise Complete");
  return {};
};

promIterate({
  promises: [promiseOne, promiseTwo], // List of promises to sequentially iterate through
  index: 1 // Start on "promiseTwo".
})
  .then(() => {})
  .catch((err) => {});
```
