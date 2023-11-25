webpackHotUpdate("main",{

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../card.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\r\nvar PostContent = function () {\r\n    return react_1.default.createElement(\"div\", { className: card_css_1.default.modal },\r\n        react_1.default.createElement(\"h2\", null, \"Here will be post\"),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\"),\r\n            react_1.default.createElement(\"p\", null, \"Here will be post\")));\r\n};\r\nvar Post = function (props) {\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node) {\r\n        console.error(\"Element with ID 'modal_root' not found.\");\r\n        return null;\r\n    }\r\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(PostContent, null), node);\r\n};\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

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