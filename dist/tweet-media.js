import clsx from "clsx";
import { getMediaUrl, getTweetUrl } from "./utils.js";
import { defaultComponents } from "./components.js";
import { TweetMediaVideo } from "./tweet-media-video.js";
import s from "./tweet-media.module.css";
export var TweetMedia = function(param) {
    var tweet = param.tweet, components = param.components;
    var _tweet_mediaDetails, _tweet_mediaDetails1;
    var _tweet_mediaDetails_length;
    var length = (_tweet_mediaDetails_length = (_tweet_mediaDetails = tweet.mediaDetails) === null || _tweet_mediaDetails === void 0 ? void 0 : _tweet_mediaDetails.length) !== null && _tweet_mediaDetails_length !== void 0 ? _tweet_mediaDetails_length : 0;
    var _components_MediaImg;
    var MediaImg = (_components_MediaImg = components === null || components === void 0 ? void 0 : components.MediaImg) !== null && _components_MediaImg !== void 0 ? _components_MediaImg : defaultComponents.MediaImg;
    return /*#__PURE__*/ React.createElement("div", {
        className: s.root
    }, /*#__PURE__*/ React.createElement("div", {
        className: s.skeleton
    }), /*#__PURE__*/ React.createElement("div", {
        className: clsx(s.mediaWrapper, length > 1 && s.grid2Columns, length === 3 && s.grid3, length > 4 && s.grid2x2)
    }, (_tweet_mediaDetails1 = tweet.mediaDetails) === null || _tweet_mediaDetails1 === void 0 ? void 0 : _tweet_mediaDetails1.map(function(media) {
        return media.type === "photo" ? /*#__PURE__*/ React.createElement("a", {
            key: media.media_url_https,
            href: getTweetUrl(tweet),
            className: clsx(s.mediaContainer, s.mediaLink),
            target: "_blank",
            rel: "noopener noreferrer"
        }, /*#__PURE__*/ React.createElement(MediaImg, {
            src: getMediaUrl(media, "small"),
            alt: media.ext_alt_text || "Image",
            className: s.image,
            draggable: true
        })) : /*#__PURE__*/ React.createElement("div", {
            key: media.media_url_https,
            className: s.mediaContainer
        }, /*#__PURE__*/ React.createElement(TweetMediaVideo, {
            media: media
        }));
    })));
};
