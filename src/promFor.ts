export async function promFor(options: {
  iterator: number;
  condition: (iterator: number) => boolean;
  update: (iterator: number) => number;
  promise: (iterator: number) => void;
}) {
  if (options.condition(options.iterator)) {
    await options.promise(options.iterator);

    options.iterator = options.update(options.iterator);
    await promFor(options);
  }
}
