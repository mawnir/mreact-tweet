import { type ReactNode } from 'react';
import { TweetComponents } from './components.js';
export type TweetProps = {
    fallback?: ReactNode;
    components?: TweetComponents;
    onError?(error: any): any;
} & ({
    id?: string;
    apiUrl: string | undefined;
} | {
    id: string;
    apiUrl?: string;
});
export declare const Tweet: ({ fallback, ...props }: TweetProps) => JSX.Element;
