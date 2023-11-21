webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
false,

/***/ "./src/shared/CardsList/CardsListGeneric.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/CardsListGeneric.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsListGeneric = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./Card/card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar postContext_1 = __webpack_require__(/*! ../context/postContext */ \"./src/shared/context/postContext.tsx\");\r\nvar onDeletePost = function (id) {\r\n    console.log(id);\r\n};\r\nfunction CardsListGeneric() {\r\n    var postArr = (0, react_1.useContext)(postContext_1.postContext);\r\n    /*\r\n        const [cardArr, setCardArr] = React.useState(postArr)\r\n    */\r\n    var cardArr = postArr.map(function (post) { return ({\r\n        As: 'li',\r\n        text: react_1.default.createElement(Card_1.Card, { id: post.id, author: post.author, created: post.created, icon_img: post.icon_img, banner_img: post.banner_img, ups: post.ups, url: post.url, title: post.title }),\r\n        className: card_css_1.default.card,\r\n        id: post.id || ''\r\n    }); });\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: cardArr })));\r\n}\r\nexports.CardsListGeneric = CardsListGeneric;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsListGeneric.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
false,

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nvar CardsListGeneric_1 = __webpack_require__(/*! ../CardsList/CardsListGeneric */ \"./src/shared/CardsList/CardsListGeneric.tsx\");\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(CardsListGeneric_1.CardsListGeneric, null),\r\n        children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ })

})