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
import { useState, useEffect } from "react";
import { getTweetUrl } from "./utils.js";
import s from "./tweet-actions.module.css";
export var TweetActionsCopy = function(param) {
    var tweet = param.tweet;
    var _useState = _slicedToArray(useState(false), 2), copied = _useState[0], setCopied = _useState[1];
    var _useState1 = _slicedToArray(useState(false), 2), copyAllText = _useState1[0], setCopyAltText = _useState1[1];
    var handleCopy = function() {
        navigator.clipboard.writeText(getTweetUrl(tweet));
        setCopied(true);
    };
    useEffect(function() {
        if (copied) {
            var timeout = setTimeout(function() {
                setCopied(false);
                setCopyAltText(true);
            }, 6000);
            return function() {
                return clearTimeout(timeout);
            };
        }
    }, [
        copied
    ]);
    return /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: s.copy,
        "aria-label": "Copy link",
        onClick: handleCopy
    }, /*#__PURE__*/ React.createElement("div", {
        className: s.copyIconWrapper
    }, copied ? /*#__PURE__*/ React.createElement("svg", {
        viewBox: "0 0 24 24",
        className: s.copyIcon,
        "aria-hidden": "true"
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
    }))) : /*#__PURE__*/ React.createElement("svg", {
        viewBox: "0 0 24 24",
        className: s.copyIcon,
        "aria-hidden": "true"
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
    })))), /*#__PURE__*/ React.createElement("span", {
        className: s.copyText
    }, copied ? "Copied!" : copyAllText ? "Copy link to Tweet" : "Copy link"));
};
