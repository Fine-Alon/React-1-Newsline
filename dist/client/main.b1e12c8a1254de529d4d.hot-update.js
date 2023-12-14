webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar useToken = function () {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (window.__token__) {\r\n            dispatch((0, actions_1.setTokenAC)(window.__token__));\r\n        }\r\n    }, [token]);\r\n    return [token];\r\n};\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar useUserData = function () {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (token !== \"\" && token !== \"undefined\") {\r\n            dispatch((0, actions_1.meRequestAsync)());\r\n        }\r\n    }, [token]);\r\n    return [data];\r\n};\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentsArea/CommentForm/CommentForm.tsx\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/me/actions */ \"./src/store/me/actions.ts\");\r\nexports.CommentFormContainer = (0, react_1.forwardRef)(function (_a, ref) {\r\n    var refTextarea = _a.refTextarea, name = _a.name, id = _a.id, postId = _a.postId;\r\n    /*  const store = useStore<RootState>()\r\n      const value = store.getState().commentText*/\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var handleChange = function (event) {\r\n        dispatch((0, actions_1.updateCommentAC)(event.target.value));\r\n    };\r\n    var handleSubmit = function (event) {\r\n        event.preventDefault();\r\n    };\r\n    // Use useEffect to focus the textarea when the component mounts\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refTextarea === null || refTextarea === void 0 ? void 0 : refTextarea.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, [refTextarea]);\r\n    return react_1.default.createElement(CommentForm_1.CommentForm, { handleChange: handleChange, handleSubmit: handleSubmit, value: value, refTextarea: refTextarea });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/store/me/reduser.ts":
false,

/***/ "./src/store/reduser.ts":
/*!******************************!*\
  !*** ./src/store/reduser.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unterminated regular expression (26:1)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     }\\n| };\\n> /;\\n| var rootReduser = function (state, action) {\\n|     if (state === void 0) { state = exports.initialState; }\");\n\n//# sourceURL=webpack:///./src/store/reduser.ts?");

/***/ })

})