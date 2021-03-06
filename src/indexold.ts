export function promLoop(options: {
  promise: () => Promise<{ continue: boolean }>;
}): Promise<void> {
  return new Promise(async (resolve, reject) => {
    const data = await options.promise();

    if (data.continue) promLoop(options).then(() => resolve());
    else resolve();
  });
}

export function promUpdate<T>(options: {
  promise: (
    value?: T
  ) => Promise<{ continue: boolean; update?: boolean; value?: T }>;
  done: (value?: T) => Promise<T | undefined>;
  defaultValue?: T;
}): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const data = await options.promise(options.defaultValue);

    if (data.continue) {
      if (data.update) options.defaultValue = data.value;
      promUpdate(options).then(() => resolve(data.value));
    } else {
      options.done
        ? options.done(options.defaultValue).then((value?: T) => {
            console.log("VALUE IS " + value);
            resolve(value);
          })
        : resolve(data.value);
    }
  });
}

export function promIterate<T>(options: {
  promises: Array<
    (context: { data?: T; index: number }) => Promise<{ data?: T }>
  >;
  data?: T;
  index?: number;
}): Promise<T> {
  return new Promise(async (resolve, reject) => {
    options.index = options.index || 0;

    if (options.index >= options.promises.length)
      reject("Index over number of promises");
    else if (options.index < 0) reject("Index cannot be less than 0");
    else if (options.index < options.promises.length) {
      const context: { data?: T } = await options.promises[options.index++]({
        data: options.data,
        index: options.index
      });

      options.data = context.data;
      if (options.index < options.promises.length) {
        promIterate(options).then(() => resolve(options.data));
      } else {
        resolve(options.data);
      }
    }
  });
}
