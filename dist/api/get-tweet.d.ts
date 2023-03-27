import type { Tweet } from './types/index.js';
export declare class TwitterApiError extends Error {
    status: number;
    data: any;
    constructor({ message, status, data, }: {
        message: string;
        status: number;
        data: any;
    });
}
export declare function getTweet(id: string): Promise<Tweet | undefined>;
