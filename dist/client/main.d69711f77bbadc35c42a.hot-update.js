webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar dateTransformator_1 = __webpack_require__(/*! ../../../../../utils/js/dateTransformator */ \"./src/utils/js/dateTransformator.ts\");\r\nfunction MetaData(_a) {\r\n    var author = _a.author, url = _a.url, icon_img = _a.icon_img, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: icon_img ? icon_img\r\n                    : 'https://cdn.dribbble.com/userupload/7871949/file/original-26aa3025abe2b1a39bd21a3ba639b590.jpg?compress=1&crop=163x122-1437x1078&resize=400x300&vertical=center', alt: 'avatar' }),\r\n            react_1.default.createElement(\"a\", { href: url ? url : '#user-url', className: card_css_1.default.username }, author ? author : 'Rick Griens')),\r\n        react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: card_css_1.default.publishedLabel }, \"published\"),\r\n            created ? (0, dateTransformator_1.passedTime)(created) : ' 8 hours ago',\r\n            \"z\")));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/utils/js/dateTransformator.ts":
/*!*******************************************!*\
  !*** ./src/utils/js/dateTransformator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.passedTime = exports.utcToDateWithTime = void 0;\r\nvar utcToDateWithTime = function (sec) {\r\n    var timeMilliSecs = 1701382243 * 1000; // Convert seconds to milliseconds\r\n    var date = new Date(timeMilliSecs);\r\n    var formattedDate = date.toLocaleString(); //     1/29/2023, 11:04:03 AM\r\n    return formattedDate;\r\n};\r\nexports.utcToDateWithTime = utcToDateWithTime;\r\nvar passedTime = function (date) {\r\n    var currentDate = new Date();\r\n    console.log(currentDate);\r\n    var anotherDate = new Date(date);\r\n    console.log(anotherDate);\r\n    var passedTime = new Date((Number(currentDate) - Number(anotherDate)), console.log(passedTime));\r\n    return passedTime;\r\n};\r\nexports.passedTime = passedTime;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/dateTransformator.ts?");

/***/ })

})