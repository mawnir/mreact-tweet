function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import { Suspense } from "react";
import { getTweet } from "./api/index.js";
import { defaultComponents } from "./components.js";
import { EmbeddedTweet } from "./embedded-tweet.js";
import { TweetSkeleton } from "./tweet-skeleton.js";
var TweetContent = function() {
    var _ref = _asyncToGenerator(function(param) {
        var id, components, onError, error, tweet, _tmp, TweetNotFound;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = param.id, components = param.components, onError = param.onError;
                    if (!id) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        getTweet(id).catch(function(err) {
                            if (onError) {
                                error = onError(err);
                            } else {
                                console.error(err);
                                error = err;
                            }
                        })
                    ];
                case 1:
                    _tmp = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    _tmp = undefined;
                    _state.label = 3;
                case 3:
                    tweet = _tmp;
                    if (!tweet) {
                        TweetNotFound = (components === null || components === void 0 ? void 0 : components.TweetNotFound) || defaultComponents.TweetNotFound;
                        return [
                            2,
                            /*#__PURE__*/ React.createElement(TweetNotFound, {
                                error: error
                            })
                        ];
                    }
                    return [
                        2,
                        /*#__PURE__*/ React.createElement(EmbeddedTweet, {
                            tweet: tweet,
                            components: components
                        })
                    ];
            }
        });
    });
    return function TweetContent(_) {
        return _ref.apply(this, arguments);
    };
}();
export var Tweet = function(_param) /*#__PURE__*/ {
    var _param_fallback = _param.fallback, fallback = _param_fallback === void 0 ? /*#__PURE__*/ React.createElement(TweetSkeleton, null) : _param_fallback, props = _objectWithoutProperties(_param, [
        "fallback"
    ]);
    return React.createElement(Suspense, {
        fallback: fallback
    }, /*#__PURE__*/ React.createElement(TweetContent, props));
};
