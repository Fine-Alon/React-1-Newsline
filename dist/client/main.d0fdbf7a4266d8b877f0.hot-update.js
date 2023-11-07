webpackHotUpdate("main",{

/***/ "./src/utils/js/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/js/generateRandomIndex.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomIndex = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomIndex = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomIndex = generateRandomIndex;\r\nexports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomIndex)());\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)(); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/generateRandomIndex.ts?");

/***/ })

})