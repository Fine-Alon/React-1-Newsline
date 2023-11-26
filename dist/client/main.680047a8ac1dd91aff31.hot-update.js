webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentForm.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CommentForm/commentForm.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".commentForm__form--1-Qyk {\\r\\n    min-width: 840px;\\r\\n    background-color: var(--white);\\r\\n    border: 1px solid var(--greyD9);\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.commentForm__input--3sIbl{\\r\\n    min-width: 840px;\\r\\n    min-height: 90px;\\r\\n    margin-bottom: -5px;\\r\\n}\\r\\n\\r\\n.commentForm__form_bottom--3HIM8 {\\r\\n    display: flex;\\r\\n    border-radius: inherit;\\r\\n}\\r\\n\\r\\n.commentForm__controls--2uQKy {\\r\\n    display: flex;\\r\\n    flex-basis: 80%;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.commentForm__btnSubmit--11wFH {\\r\\n    flex-basis: 20%;\\r\\n    background-color: var(--orange);\\r\\n    padding: 17px 50px;\\r\\n    border-bottom-right-radius: inherit;\\r\\n    color: var(--white);\\r\\n    font-size: 14px;\\r\\n    letter-spacing: 2px;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"form\": \"commentForm__form--1-Qyk\",\n\t\"input\": \"commentForm__input--3sIbl\",\n\t\"form_bottom\": \"commentForm__form_bottom--3HIM8\",\n\t\"controls\": \"commentForm__controls--2uQKy\",\n\t\"btnSubmit\": \"commentForm__btnSubmit--11wFH\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentForm.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentForm_css_1 = __importDefault(__webpack_require__(/*! ./commentForm.css */ \"./src/shared/CommentForm/commentForm.css\"));\r\nvar formContext_1 = __webpack_require__(/*! ../context/formContext */ \"./src/shared/context/formContext.tsx\");\r\nvar CommentForm = function () {\r\n    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];\r\n    var valueform = (0, react_1.useContext)(formContext_1.formContext);\r\n    var handleSubmit = function (event) {\r\n        event.preventDefault();\r\n    };\r\n    var handleChange = function (event) {\r\n        setValue(event.target.value);\r\n        valueform.onCange(value);\r\n    };\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: commentForm_css_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: commentForm_css_1.default.input, onChange: handleChange, value: value }),\r\n            react_1.default.createElement(\"div\", { className: commentForm_css_1.default.form_bottom },\r\n                react_1.default.createElement(\"span\", { className: commentForm_css_1.default.controls }, \"here will be some CONTROLS\"),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: commentForm_css_1.default.btnSubmit }, \"comment\"))));\r\n};\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentForm.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentForm.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentForm.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentForm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentForm.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentForm.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentForm.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentForm.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentForm.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})