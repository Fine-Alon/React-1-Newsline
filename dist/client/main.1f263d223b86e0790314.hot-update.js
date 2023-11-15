webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ./MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Menu = function (_a) {\r\n    var postId = _a.postId, onDeletePost = _a.onDeletePost;\r\n    var menuList = [\r\n        // {text: <Comments/>},\r\n        // {text: <Share/>},\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: onDeletePost },\r\n        // {text: <Save/>},\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: onDeletePost },\r\n        { text: react_1.default.createElement(MenuLinks_1.Close, { styles: card_css_1.default.closeButton }) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var _b = react_1.default.useState(true), isDropdownClose = _b[0], setIsDropdownClose = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { btnStyles: card_css_1.default.menuSvg, button: react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\r\n                react_1.default.createElement(icons_1.MenuSvg, null)) }, isDropdownClose &&\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.dropdown },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: menuList\r\n                        .map((0, merge_1.merge)({ onClick: onDeletePost }))\r\n                        .map(function (item) { return ({ postId: postId }); }) })))));\r\n};\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ })

})