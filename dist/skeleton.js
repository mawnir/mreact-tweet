import styles from "./skeleton.module.css";
export var Skeleton = function(param) {
    var style = param.style;
    return /*#__PURE__*/ React.createElement("span", {
        className: styles.skeleton,
        style: style
    });
};
