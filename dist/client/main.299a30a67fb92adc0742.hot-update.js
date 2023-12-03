webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsComments.ts":
/*!***************************************!*\
  !*** ./src/hooks/usePostsComments.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsComments = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar usePostsComments = function (postId) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0) {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId, \"?sr_detail=true\"), {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var comment = res.data[1].data.children[4].data.body || '';\r\n                console.log(comment);\r\n                setData(comment);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(\"Error fetching comments:\", error);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n};\r\nexports.usePostsComments = usePostsComments;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsComments.ts?");

/***/ })

})