import { TweetContainer } from "./tweet-container.js";
import styles from "./tweet-not-found.module.css";
export var TweetNotFound = function(_props) {
    return /*#__PURE__*/ React.createElement(TweetContainer, null, /*#__PURE__*/ React.createElement("div", {
        className: styles.root
    }, /*#__PURE__*/ React.createElement("h3", null, "Tweet not found"), /*#__PURE__*/ React.createElement("p", null, "The embedded tweet could not be found…")));
};
