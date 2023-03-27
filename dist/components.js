import { TweetNotFound } from "./tweet-not-found.js";
// Export the not found component as it could be useful to manually import it for SSG
export { TweetNotFound };
var AvatarImg = function(props) {
    return /*#__PURE__*/ React.createElement("img", props);
};
var MediaImg = function(props) {
    return /*#__PURE__*/ React.createElement("img", props);
};
export var defaultComponents = {
    TweetNotFound: TweetNotFound,
    AvatarImg: AvatarImg,
    MediaImg: MediaImg
};
