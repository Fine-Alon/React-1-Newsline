webpackHotUpdate("main",{

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar Post = function (props) {\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var handelClick = function (event) {\r\n            var _a;\r\n            console.log(event.target);\r\n            console.log(ref);\r\n            if (event.target)\r\n                inst && ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target));\r\n        };\r\n    });\r\n    {\r\n        props.handleOpen();\r\n    }\r\n};\r\nexports.Post = Post;\r\ndocument.addEventListener(\"click\", handelClick);\r\nreturn function () {\r\n    document.removeEventListener(\"click\", handelClick);\r\n};\r\n[];\r\n;\r\nvar node = document.querySelector('#modal_root');\r\nif (!node) {\r\n    console.error(\"Element with ID 'modal_root' not found.\");\r\n    return null;\r\n}\r\nreturn (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: post_css_1.default.modal },\r\n    react_1.default.createElement(\"h2\", null, \"Here will be post, Here will be post title, Here will be post\"),\r\n    react_1.default.createElement(\"div\", { className: post_css_1.default.content, ref: ref },\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"p\", null, \"Here will be post\"))), node);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ })

})