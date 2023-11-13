webpackHotUpdate("main",{

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/js/generateRandomIndex.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, assoc_1.assoc)('id', exports.generateRandomString);\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/generateRandomIndex.ts?");

/***/ })

})