export function promWhile(options: {
  condition: boolean;
  promise: () => Promise<any>;
}): Promise<void> {
  return new Promise(async (resolve, reject) => {
    if (data.continue) promWhile(options).then(() => resolve());
    else resolve();

    const data = await options.promise();
  });
}
