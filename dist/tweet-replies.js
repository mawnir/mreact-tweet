import { getTweetUrl, formatNumber } from "./utils.js";
import s from "./tweet-replies.module.css";
export var TweetReplies = function(param) {
    var tweet = param.tweet;
    return /*#__PURE__*/ React.createElement("div", {
        className: s.replies
    }, /*#__PURE__*/ React.createElement("a", {
        className: s.link,
        href: getTweetUrl(tweet),
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React.createElement("span", {
        className: s.text
    }, tweet.conversation_count > 0 ? "Read ".concat(formatNumber(tweet.conversation_count), " replies") : "Read more on Twitter")));
};
