webpackHotUpdate("main",{

/***/ "./src/shared/Comments/Comments.tsx":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comments_css_1 = __importDefault(__webpack_require__(/*! ./Comments.css */ \"./src/shared/Comments/Comments.css\"));\r\nvar Comments = function (props) {\r\n    var userComment = props.userComment;\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: Comments_css_1.default.comments_block },\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.comments_block__top }),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.comment_text }, userComment\r\n                ? userComment\r\n                : react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut consequatur dolor doloribus ea, fuga id laudantium pariatur rerum voluptas. Ab consectetur delectus dignissimos doloremque dolores eos ex excepturi exercitationem!\")),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.comments_block__controls })));\r\n};\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Comments/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Comments/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Comments/index.ts?");

/***/ })

})