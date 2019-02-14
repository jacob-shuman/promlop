export async function promWhile(options: {
  condition: () => Promise<boolean>;
  promise: () => Promise<void>;
}) {
  if (await options.condition()) {
    await options.promise();
    await promWhile(options);
  }
}
