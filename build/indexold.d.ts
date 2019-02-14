export declare function promLoop(options: {
    promise: () => Promise<{
        continue: boolean;
    }>;
}): Promise<void>;
export declare function promUpdate<T>(options: {
    promise: (value?: T) => Promise<{
        continue: boolean;
        update?: boolean;
        value?: T;
    }>;
    done: (value?: T) => Promise<T | undefined>;
    defaultValue?: T;
}): Promise<T>;
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
