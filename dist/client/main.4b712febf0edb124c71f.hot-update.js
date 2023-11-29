webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsArea/CommentForm/commentForm.css":
false,

/***/ "./src/shared/CommentsArea/CommentForm/CommentForm.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/CommentForm.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar commentContext_1 = __webpack_require__(/*! ../../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nexports.CommentForm = (0, react_1.forwardRef)((props), { ref: ref });\r\n{\r\n    var _a = (0, react_1.useContext)(commentContext_1.commentContext), value = _a.value, onChange_1 = _a.onChange;\r\n    var handleSubmit = function (event) {\r\n        event.preventDefault();\r\n    };\r\n    var handleChange = function (event) {\r\n        onChange_1(event.target.value);\r\n    };\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: commentForm_css_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { ref: ref, className: commentForm_css_1.default.input, onChange: handleChange, value: value }),\r\n            react_1.default.createElement(\"div\", { className: commentForm_css_1.default.form_bottom },\r\n                react_1.default.createElement(\"span\", { className: commentForm_css_1.default.controls }, \"here will be some CONTROLS\"),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: commentForm_css_1.default.btnSubmit }, \"comment\"))));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentForm/commentForm.css":
false

})