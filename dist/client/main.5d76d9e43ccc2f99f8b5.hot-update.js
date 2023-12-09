webpackHotUpdate("main",{

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateCommentCreator = exports.rootReduser = void 0;\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar initialState = {\r\n    commentText: 'hello SkillBox!'\r\n};\r\nvar rootReduser = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReduser = rootReduser;\r\nvar updateCommentCreator = function (payload) {\r\n    (function (type, payload) {\r\n        return ;\r\n    });\r\n};\r\nexports.updateCommentCreator = updateCommentCreator;\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

})