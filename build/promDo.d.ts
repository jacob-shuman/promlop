export declare function promDo(options: {
    condition: () => Promise<boolean>;
    promise: () => Promise<void>;
}): Promise<void>;
