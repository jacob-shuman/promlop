export declare function promLoop(options: {
    promise: () => Promise<{
        continue: boolean;
    }>;
}): Promise<void>;
