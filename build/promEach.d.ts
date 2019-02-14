export declare function promEach(options: {
    promises: Array<() => Promise<any>>;
    each: (promise: Promise<any>) => Promise<any>;
}): Promise<void>;
