webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ./shared/Text */ \"./src/shared/Text/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postContext_1 = __webpack_require__(/*! ./shared/context/postContext */ \"./src/shared/context/postContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar store = (0, redux_1.createStore)(store_1.rootReduser, (0, redux_devtools_extension_1.composeWithDevTools)());\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    return (react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n        react_1.default.createElement(postContext_1.PostContextProvider, null,\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Header_1.Header, null),\r\n                react_1.default.createElement(Content_1.Content, null,\r\n                    react_1.default.createElement(\"br\", null),\r\n                    react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 28, color: Text_1.EColors.orange }, \" Label1\"),\r\n                    react_1.default.createElement(Text_1.Text, { size: 20 }, \" Label2\"),\r\n                    react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16 }, \" Label3\"))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n    react_1.default.createElement(AppComponent, null)); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener(\"load\", function () {\r\n    ReactDom.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentsArea.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsArea/CommentsArea.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsArea = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentsArea_css_1 = __importDefault(__webpack_require__(/*! ./commentsArea.css */ \"./src/shared/CommentsArea/commentsArea.css\"));\r\nvar Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ../CardsList/Card/Menu/MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar usePostsComments_1 = __webpack_require__(/*! ../../hooks/usePostsComments */ \"./src/hooks/usePostsComments.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer/CommentFormContainer */ \"./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx\");\r\nvar CommentsArea = function (_a) {\r\n    var postId = _a.postId, id = _a.id, handelMenuClick = _a.handelMenuClick;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsComments_1.usePostsComments)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.CommentBtn, { number: commentsData.length }), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: handelMenuClick },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: handelMenuClick },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentsArea_css_1.default.menu }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) })),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { id: id, postId: postId, refTextarea: refTextarea }),\r\n        commentsData.map(function (topLevelComments, index) {\r\n            var uniqueKey = (0, generateRandomIndex_1.generateRandomString)();\r\n            return (react_1.default.createElement(Comments_1.Comments, { key: uniqueKey, id: id, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies }));\r\n        }));\r\n};\r\nexports.CommentsArea = CommentsArea;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentsArea.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentsArea/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsArea */ \"./src/shared/CommentsArea/CommentsArea.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/index.ts?");

/***/ })

})