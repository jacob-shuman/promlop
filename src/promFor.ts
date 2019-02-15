export async function promFor(options: {
  iterator: number;
  condition: (iterator: number) => Promise<boolean>;
  update: (iterator: number) => Promise<number>;
  promise: (iterator: number) => Promise<void>;
}) {
  if (await options.condition(options.iterator)) {
    await options.promise(options.iterator);

    options.iterator = await options.update(options.iterator);
    await promFor(options);
  }
}
