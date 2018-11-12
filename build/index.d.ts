export declare function promLoop(options: {
    promise: () => Promise<{
        continue: boolean;
    }>;
}): Promise<void>;
export declare function promIterate<T>(options: {
    promises: Array<(context: {
        data?: T;
        index: number;
    }) => Promise<{
        data?: T;
    }>>;
    data?: T;
    index?: number;
}): Promise<T>;
