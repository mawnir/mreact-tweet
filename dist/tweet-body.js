function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { getHashtagUrl, getUserUrl, getSymbolUrl } from "./utils.js";
import { TweetLink } from "./tweet-link.js";
import s from "./tweet-body.module.css";
function addEntities(result, entities, type) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var entity = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = result.entries()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var _step_value = _slicedToArray(_step1.value, 2), i = _step_value[0], item = _step_value[1];
                    var _result;
                    if (entity.indices[0] < item.indices[0] || entity.indices[1] > item.indices[1]) {
                        continue;
                    }
                    var items = [
                        _objectSpreadProps(_objectSpread({}, entity), {
                            type: type
                        })
                    ];
                    if (item.indices[0] < entity.indices[0]) {
                        items.unshift({
                            indices: [
                                item.indices[0],
                                entity.indices[0]
                            ],
                            type: "text"
                        });
                    }
                    if (item.indices[1] > entity.indices[1]) {
                        items.push({
                            indices: [
                                entity.indices[1],
                                item.indices[1]
                            ],
                            type: "text"
                        });
                    }
                    (_result = result).splice.apply(_result, [
                        i,
                        1
                    ].concat(_toConsumableArray(items)));
                    break; // Break out of the loop to avoid iterating over the new items
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function getEntities(tweet) {
    var result = [
        {
            indices: tweet.display_text_range,
            type: "text"
        }
    ];
    addEntities(result, tweet.entities.hashtags, "hashtag");
    addEntities(result, tweet.entities.user_mentions, "mention");
    addEntities(result, tweet.entities.urls, "url");
    addEntities(result, tweet.entities.symbols, "symbol");
    if (tweet.entities.media) {
        addEntities(result, tweet.entities.media, "media");
    }
    return result;
}
export var TweetBody = function(param) {
    var tweet = param.tweet;
    var entities = getEntities(tweet);
    return /*#__PURE__*/ React.createElement("p", {
        className: s.root
    }, entities.map(function(item, i) {
        var _tweet_text;
        var text = (_tweet_text = tweet.text).slice.apply(_tweet_text, _toConsumableArray(item.indices));
        switch(item.type){
            case "hashtag":
                return /*#__PURE__*/ React.createElement(TweetLink, {
                    key: i,
                    href: getHashtagUrl(item)
                }, text);
            case "mention":
                return /*#__PURE__*/ React.createElement(TweetLink, {
                    key: i,
                    href: getUserUrl(item.screen_name)
                }, text);
            case "url":
                return /*#__PURE__*/ React.createElement(TweetLink, {
                    key: i,
                    href: item.expanded_url
                }, item.display_url);
            case "symbol":
                return /*#__PURE__*/ React.createElement(TweetLink, {
                    key: i,
                    href: getSymbolUrl(item)
                }, text);
            case "media":
                // Media text is currently never displayed, some tweets however might have indices
                // that do match `display_text_range` so for those cases we ignore the content.
                return undefined;
            default:
                return /*#__PURE__*/ React.createElement("span", {
                    key: i,
                    dangerouslySetInnerHTML: {
                        __html: text
                    }
                });
        }
    }));
};
