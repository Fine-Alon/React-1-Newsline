webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsArea/CommentForm/commentForm.css":
false,

/***/ "./src/shared/CommentsArea/CommentForm/CommentForm.tsx":
false,

/***/ "./src/shared/CommentsArea/CommentForm/CommentFormContainer.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/CommentFormContainer.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Андрей\\\\Desktop\\\\React-1-Newsline\\\\src\\\\shared\\\\CommentsArea\\\\CommentForm\\\\CommentFormContainer.tsx'\");\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentForm/commentForm.css":
false,

/***/ "./src/shared/CommentsArea/CommentsArea.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsArea/CommentsArea.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsArea = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentsArea_css_1 = __importDefault(__webpack_require__(/*! ./commentsArea.css */ \"./src/shared/CommentsArea/commentsArea.css\"));\r\nvar Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ../CardsList/Card/Menu/MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar usePostsCommentsTwo_1 = __webpack_require__(/*! ../../hooks/usePostsCommentsTwo */ \"./src/hooks/usePostsCommentsTwo.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentForm/CommentFormContainer */ \"./src/shared/CommentsArea/CommentForm/CommentFormContainer.tsx\");\r\nvar CommentsArea = function (_a) {\r\n    var postId = _a.postId, id = _a.id, handelMenuClick = _a.handelMenuClick;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsCommentsTwo_1.usePostsCommentsTwo)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        console.log('<<Final arr in CommentsArea>> ', data);\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.CommentBtn, { number: commentsData.length }), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: handelMenuClick },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: handelMenuClick },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentsArea_css_1.default.menu }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) })),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { id: id, postId: postId, refTextarea: refTextarea }),\r\n        commentsData.map(function (topLevelComments, index) { return (react_1.default.createElement(Comments_1.Comments, { id: id, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies })); }));\r\n};\r\nexports.CommentsArea = CommentsArea;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentsArea.tsx?");

/***/ })

})