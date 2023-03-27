"use client";
import format from "date-fns/format/index.js";
import { getTweetUrl } from "./utils.js";
import useMounted from "./lib/use-mounted.js";
import s from "./tweet-info-created-at.module.css";
export var TweetInfoCreatedAt = function(param) {
    var tweet = param.tweet;
    var mounted = useMounted();
    var createdAt = typeof window !== "undefined" && mounted ? new Date(tweet.created_at) : null;
    return !createdAt ? null : /*#__PURE__*/ React.createElement("a", {
        className: s.root,
        href: getTweetUrl(tweet),
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": format(createdAt, "h:mm a \xb7 MMM d, y")
    }, /*#__PURE__*/ React.createElement("time", {
        dateTime: createdAt.toISOString()
    }, format(createdAt, "h:mm a \xb7 MMM d, y")));
};
