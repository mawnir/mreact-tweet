import { TweetContainer } from "./tweet-container.js";
import { Skeleton } from "./skeleton.js";
import styles from "./tweet-skeleton.module.css";
export var TweetSkeleton = function() {
    return /*#__PURE__*/ React.createElement(TweetContainer, {
        className: styles.root
    }, /*#__PURE__*/ React.createElement(Skeleton, {
        style: {
            height: "3rem",
            marginBottom: "0.75rem"
        }
    }), /*#__PURE__*/ React.createElement(Skeleton, {
        style: {
            height: "6rem",
            margin: "0.5rem 0"
        }
    }), /*#__PURE__*/ React.createElement("div", {
        style: {
            borderTop: "var(--tweet-border)",
            margin: "0.5rem 0"
        }
    }), /*#__PURE__*/ React.createElement(Skeleton, {
        style: {
            height: "2rem"
        }
    }), /*#__PURE__*/ React.createElement(Skeleton, {
        style: {
            height: "2rem",
            borderRadius: "9999px",
            marginTop: "0.5rem"
        }
    }));
};
