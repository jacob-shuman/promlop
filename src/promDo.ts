export async function promDo(options: {
  condition: () => Promise<boolean>;
  promise: () => Promise<void>;
}) {
  await options.promise();
  if (await options.condition()) await promDo(options);
}
