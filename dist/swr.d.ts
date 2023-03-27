/// <reference types="react" />
import type { TweetProps } from './tweet.js';
export type { TweetProps };
export declare const Tweet: ({ id, apiUrl, fallback, components, onError, }: TweetProps) => string | number | boolean | import("react").ReactFragment | JSX.Element | null;
