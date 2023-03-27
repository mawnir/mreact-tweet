import clsx from "clsx";
import s from "./tweet-container.module.css";
import "./theme.css";
export var TweetContainer = function(param) {
    var className = param.className, children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: clsx("react-tweet-theme", s.root, className)
    }, /*#__PURE__*/ React.createElement("article", {
        className: s.article
    }, children));
};
