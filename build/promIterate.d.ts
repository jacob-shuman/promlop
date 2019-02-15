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
