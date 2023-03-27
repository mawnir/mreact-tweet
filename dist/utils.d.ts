import type { Tweet, MediaDetails, HashtagEntity, SymbolEntity } from './api/index.js';
export declare const getUserUrl: (usernameOrTweet: string | Tweet) => string;
export declare const getTweetUrl: (tweet: Tweet) => string;
export declare const getLikeUrl: (tweet: Tweet) => string;
export declare const getReplyUrl: (tweet: Tweet) => string;
export declare const getFollowUrl: (tweet: Tweet) => string;
export declare const getHashtagUrl: (hashtag: HashtagEntity) => string;
export declare const getSymbolUrl: (symbol: SymbolEntity) => string;
export declare const getInReplyToUrl: (tweet: Tweet) => string;
export declare const getMediaUrl: (media: MediaDetails, size: 'small' | 'medium' | 'larget') => string;
export declare const formatNumber: (n: number) => string;
