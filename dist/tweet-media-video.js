"use client";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { useState, useMemo } from "react";
import { getMediaUrl } from "./utils.js";
import mediaStyles from "./tweet-media.module.css";
import s from "./tweet-media-video.module.css";
export var TweetMediaVideo = function(param) {
    var media = param.media;
    var _useState = _slicedToArray(useState(true), 2), playButton = _useState[0], setPlayButton = _useState[1];
    var variants = media.video_info.variants;
    var mp4Video = useMemo(function() {
        var _b_bitrate, _a_bitrate;
        var sortedMp4Videos = variants.filter(function(vid) {
            return vid.content_type === "video/mp4";
        }).sort(function(a, b) {
            return ((_b_bitrate = b.bitrate) !== null && _b_bitrate !== void 0 ? _b_bitrate : 0) - ((_a_bitrate = a.bitrate) !== null && _a_bitrate !== void 0 ? _a_bitrate : 0);
        });
        // Skip the highest quality video and use the next quality
        return sortedMp4Videos.length > 1 ? sortedMp4Videos[1] : sortedMp4Videos[0];
    }, [
        variants
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("video", {
        className: mediaStyles.image,
        poster: getMediaUrl(media, "small"),
        controls: !playButton,
        draggable: true,
        muted: true,
        preload: "metadata",
        tabIndex: playButton ? -1 : 0
    }, /*#__PURE__*/ React.createElement("source", {
        src: mp4Video.url,
        type: mp4Video.content_type
    })), playButton && /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: s.videoButton,
        "aria-label": "View video on Twitter",
        onClick: function(e) {
            var video = e.currentTarget.previousSibling;
            e.preventDefault();
            setPlayButton(false);
            video.play();
            video.focus();
        }
    }, /*#__PURE__*/ React.createElement("svg", {
        viewBox: "0 0 24 24",
        className: s.videoButtonIcon,
        "aria-hidden": "true"
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        d: "M21 12L4 2v20l17-10z"
    })))));
};
