export function promDo(options: { promise: () => Promise<{ continue: boolean }> }): Promise<void> {
  return new Promise(async (resolve, reject) => {
    const data = await options.promise();

    if (data.continue) promDo(options).then(() => resolve());
    else resolve();
  });
}
