webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar useToken_1 = __webpack_require__(/*! ./useToken */ \"./src/hooks/useToken.ts\");\r\nvar usePostData = function () {\r\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\r\n    var token = (0, useToken_1.useToken)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 || token !== undefined) {\r\n            axios_1.default\r\n                .get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n                headers: { Authorization: \"bearer \".concat(token) }\r\n            })\r\n                .then(function (res) {\r\n                console.log(res.data.data.children);\r\n                var bestPostArr = res.data.data.children.map(function (data) { return ({\r\n                    id: data.data.id,\r\n                    title: data.data.title,\r\n                    author: data.data.author,\r\n                    created: data.data.created_utc,\r\n                    banner_img: data.data.sr_detail.banner_img,\r\n                    icon_img: data.data.sr_detail.icon_img,\r\n                    ups: data.data.ups,\r\n                    url: data.data.url,\r\n                }); });\r\n                setPosts(bestPostArr);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, []);\r\n    return [posts];\r\n};\r\nexports.usePostData = usePostData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/shared/context/postContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/postContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostContextProvider = exports.postContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postContext = react_1.default.createContext([]);\r\nvar PostContextProvider = function (_a) {\r\n    var children = _a.children;\r\n    var posts = (0, usePostsData_1.usePostData)()[0];\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(exports.postContext.Provider, { value: posts }, children));\r\n};\r\nexports.PostContextProvider = PostContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postContext.tsx?");

/***/ })

})