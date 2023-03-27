export var getUserUrl = function(usernameOrTweet) {
    return "https://twitter.com/".concat(typeof usernameOrTweet === "string" ? usernameOrTweet : usernameOrTweet.user.screen_name);
};
export var getTweetUrl = function(tweet) {
    return "https://twitter.com/".concat(tweet.user.screen_name, "/status/").concat(tweet.id_str);
};
export var getLikeUrl = function(tweet) {
    return "https://twitter.com/intent/like?tweet_id=".concat(tweet.id_str);
};
export var getReplyUrl = function(tweet) {
    return "https://twitter.com/intent/tweet?in_reply_to=".concat(tweet.id_str);
};
export var getFollowUrl = function(tweet) {
    return "https://twitter.com/intent/follow?screen_name=".concat(tweet.user.screen_name);
};
export var getHashtagUrl = function(hashtag) {
    return "https://twitter.com/hashtag/".concat(hashtag.text);
};
export var getSymbolUrl = function(symbol) {
    return "https://twitter.com/search?q=%24".concat(symbol.text);
};
export var getInReplyToUrl = function(tweet) {
    return "https://twitter.com/".concat(tweet.in_reply_to_screen_name, "/status/").concat(tweet.in_reply_to_status_id_str);
};
export var getMediaUrl = function(media, size) {
    var url = new URL(media.media_url_https);
    var extension = url.pathname.split(".").pop();
    if (!extension) return media.media_url_https;
    url.pathname = url.pathname.replace(".".concat(extension), "");
    url.searchParams.set("format", extension);
    url.searchParams.set("name", size);
    return url.toString();
};
export var formatNumber = function(n) {
    if (n > 999999) return "".concat((n / 1000000).toFixed(1), "M");
    if (n > 999) return "".concat((n / 1000).toFixed(1), "K");
    return n.toString();
};
