import { getInReplyToUrl } from "./utils.js";
import s from "./tweet-in-reply-to.module.css";
export var TweetInReplyTo = function(param) {
    var tweet = param.tweet;
    return /*#__PURE__*/ React.createElement("a", {
        href: getInReplyToUrl(tweet),
        className: s.root,
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Replying to @", tweet.in_reply_to_screen_name);
};
