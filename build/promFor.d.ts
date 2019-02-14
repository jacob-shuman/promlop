export declare function promFor(options: {
    iterator: number;
    condition: (iterator: number) => Promise<boolean>;
    update: (iterator: number) => Promise<number>;
    promise: (iterator: number) => Promise<void>;
}): Promise<void>;
