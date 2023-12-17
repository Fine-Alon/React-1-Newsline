webpackHotUpdate("main",{

/***/ "./src/shared/CommentsArea/CommentForm/CommentForm.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/CommentForm.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentForm_css_1 = __importDefault(__webpack_require__(/*! ./commentForm.css */ \"./src/shared/CommentsArea/CommentForm/commentForm.css\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nexports.CommentForm = (0, react_1.forwardRef)(function (_a, ref) {\r\n    var value = _a.value, handleChange = _a.handleChange, name = _a.name, id = _a.id, handleSubmitt = _a.handleSubmitt, postId = _a.postId;\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var _b = (0, react_hook_form_1.useForm)({ defaultValues: { comment: value } }), register = _b.register, handleSubmit = _b.handleSubmit, watch = _b.watch;\r\n    var onSubmit = function (data) { return alert('Form was sent'); };\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    dispatch((0, actions_1.updateCommentAC)(watch('comment')));\r\n    // Use useEffect to focus the textarea when the component mounts\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refTextarea.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: commentForm_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\r\n            react_1.default.createElement(\"textarea\", __assign({ placeholder: \"\".concat(name ? name : 'Whoever u are', \", leave your comment\"), className: commentForm_css_1.default.input }, register(\"comment\", { required: false }), { \r\n                // it is possible to uncomment <<ref={refTextarea}>> below to see focus on textarea when post window is open\r\n                ref: refTextarea })),\r\n            react_1.default.createElement(\"div\", { className: commentForm_css_1.default.form_bottom },\r\n                react_1.default.createElement(\"span\", { className: commentForm_css_1.default.controls }, \"here will be some CONTROLS\"),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: commentForm_css_1.default.btnSubmit }, \"comment\"))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentsArea/CommentForm/CommentForm.tsx\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/me/actions */ \"./src/store/me/actions.ts\");\r\nexports.CommentFormContainer = (0, react_1.forwardRef)(function (_a, ref) {\r\n    var refTextarea = _a.refTextarea, name = _a.name, id = _a.id, postId = _a.postId;\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var handleChange = function (event) {\r\n        dispatch((0, actions_1.updateCommentAC)(event.target.value));\r\n    };\r\n    var handleSubmit = function (event) {\r\n        event.preventDefault();\r\n    };\r\n    // Use useEffect to focus the textarea when the component mounts\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refTextarea === null || refTextarea === void 0 ? void 0 : refTextarea.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, [refTextarea]);\r\n    return react_1.default.createElement(CommentForm_1.CommentForm, { handleChange: handleChange, handleSubmitt: handleSubmit, value: value, refTextarea: refTextarea });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx?");

/***/ })

})