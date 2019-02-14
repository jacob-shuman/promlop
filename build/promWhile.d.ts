export declare function promWhile(options: {
    condition: () => Promise<boolean>;
    promise: () => Promise<void>;
}): Promise<void>;
