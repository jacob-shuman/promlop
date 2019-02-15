export async function promEach(options: {
  promises: Array<() => Promise<any>>;
  each?: (promise: () => Promise<any>) => Promise<any>;
}) {
  if (options.promises.length > 0) {
    if (options.each) options.each(await options.promises[0]());
    options.promises.shift();
    await promEach(options);
  }
}
