import { TweetContainer } from "./tweet-container.js";
import { TweetHeader } from "./tweet-header.js";
import { TweetInReplyTo } from "./tweet-in-reply-to.js";
import { TweetBody } from "./tweet-body.js";
import { TweetMedia } from "./tweet-media.js";
export var EmbeddedTweet = function(param) {
    var tweet = param.tweet, components = param.components;
    var _tweet_mediaDetails;
    /*#__PURE__*/ return React.createElement(TweetContainer, null, /*#__PURE__*/ React.createElement(TweetHeader, {
        tweet: tweet,
        components: components
    }), tweet.in_reply_to_status_id_str && /*#__PURE__*/ React.createElement(TweetInReplyTo, {
        tweet: tweet
    }), /*#__PURE__*/ React.createElement(TweetBody, {
        tweet: tweet
    }), ((_tweet_mediaDetails = tweet.mediaDetails) === null || _tweet_mediaDetails === void 0 ? void 0 : _tweet_mediaDetails.length) ? /*#__PURE__*/ React.createElement(TweetMedia, {
        tweet: tweet,
        components: components
    }) : null);
};
