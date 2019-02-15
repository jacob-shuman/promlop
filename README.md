# promlop

> An easy to use zero-dependency vanilla promise loop utility.

[![Build Status](https://travis-ci.org/jacob-shuman/promlop.svg?branch=master)](https://travis-ci.org/jacob-shuman/promlop)

**WARNING: promlop is still early in development. Stability is not guaranteed and functions may be altered frequently.**

## Installation

```bash
$ npm install promlop
```

## Importing

#### Commonjs

```ts
const promlop = require("promlop");
```

#### ES6

```ts
import {promWhile, promEach} from "promlop";
```

#### Default Namespace

```ts
import Promlop from "promlop";
```

## Usage

### **v0.2.0**

#### `promFor`

The promise equivalent of a `for` loop.

```ts
import {promFor} from "promlop";

promFor({
  iterator: 0, // Initial value of the [iterator]
  condition: async (iterator: number) => iterator < 10, // Condition to check before running the [promise]
  update: async (iterator: number) => iterator + 1, // Update the [iterator] after running the [promise]
  promise: async (iterator: number) => {
    console.log(iterator);
  } // The promise to run if condidion is truthy
}).then(() => {
  console.log("Ended promise based for loop");
});
```

#### `promWhile`

The promise equivalent of a `while` loop.

```ts
import {promWhile} from "promlop";

let iterator: number = 0;

promWhile({
  condition: async () => iterator < 10, // Condition to check before running the [promise]
  promise: async () => {
    console.log(iterator);
  } // The promise to run if condidion is truthy
}).then(() => {
  console.log("Ended promise based while loop");
});
```

#### `promDo`

The promise equivalent of a `do while` loop.

```ts
import {promDo} from "promlop";

let iterator: number = 0;

promDo({
  condition: async () => iterator < 10, // Condition to check before running the [promise]
  promise: async () => {
    console.log(iterator);
  } // The promise to run if condidion is truthy
}).then(() => {
  console.log("Ended promise based do while loop");
});
```

#### `promEach`

The promise equivalent of a `for each` loop.

```ts
import {promEach} from "promlop";

let people: Array<any> = 0;

let getPeople: Array<() => Promise<any>> = [
  async () => {
    things.push("Mega Man");
  },
  async () => {
    things.push("Blue Beetle");
  },
  async () => {
    things.push("Sonic");
  }
];

promEach({
  promises: getPeople, // An array of promises to loop through
  each: async (result: any) => {} // A function called after each promise
}).then(() => {
  console.log("Ended promise based for each loop");
});
```

### OLD v0.1.2

Version 0.1.2 of promlop supports 3 ways to loop through a series of promises.

**Note** please only use these functions if you are using v0.1.2 or earlier as newer functions (starting from v0.2.0) may be easier to understand and are still being maintained.

#### `promLoop`

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

#### `promUpdate`

```ts
import {promUpdate} from "promlop";

let start = 0;

promUpdate<number>({
  defaultValue: 0,
  promise: async (value?: number) => {
    console.log("Value is: " + value);

    return {
      continue: value! < 5, // Loop will continue until this value is false
      update: true, // Value will update if true AND continue must be true
      value: value! + 1 // Updated value (if update is true)
    };
  },
  done: async (value?: number) => {
    return value * 0.01;
  }
})
  .then((value?: number) => {
    console.log("Value changed from " + start + " to " + value + "!");
  })
  .catch((err) => {});
```

#### `promIterate`

```ts
import {promIterate} from "promlop";

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
