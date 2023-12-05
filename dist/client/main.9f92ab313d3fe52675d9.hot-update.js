webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsCommentsTwo.ts":
/*!******************************************!*\
  !*** ./src/hooks/usePostsCommentsTwo.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsCommentsTwo = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar usePostsCommentsTwo = function (postId) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId, \"?sr_detail=true\"), {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var comment = shallowComments(res.data[1].data.children);\r\n                console.log('<<Final Arr from hook to post..>> :', data);\r\n                setData(comment);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(\"Error fetching comments:\", error);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n};\r\nexports.usePostsCommentsTwo = usePostsCommentsTwo;\r\nvar shallowComments = function (comments) {\r\n    var main = [];\r\n    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {\r\n        var comment = comments_1[_i];\r\n        var commentData = comment.data;\r\n        var data = {\r\n            id: commentData.id,\r\n            body: commentData.body,\r\n            author: commentData.author,\r\n            replies: []\r\n        };\r\n        // Check if the comment type is 't1'\r\n        if (comment.kind === 't1') {\r\n            main.push(data);\r\n            // Check if there are replies and they have children\r\n            // @ts-ignore\r\n            if (commentData.replies && commentData.replies.data.children.length > 0) {\r\n                // Recursively process nested comments\r\n                // @ts-ignore\r\n                var nestedComments = shallowComments(commentData.replies.data.children);\r\n                // console.log('nestedComments',nestedComments)\r\n                // @ts-ignore\r\n                data.replies = nestedComments;\r\n            }\r\n        }\r\n    }\r\n    return main;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsCommentsTwo.ts?");

/***/ }),

/***/ "./src/shared/Comments/Comments.tsx":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comments_css_1 = __importDefault(__webpack_require__(/*! ./Comments.css */ \"./src/shared/Comments/Comments.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentsArea/CommentForm */ \"./src/shared/CommentsArea/CommentForm/index.ts\");\r\nvar Comments = function (props) {\r\n    var id = props.id, commentBody = props.commentBody, innerComments = props.innerComments, name = props.name, postId = props.postId, icon = props.icon;\r\n    var _a = (0, react_1.useState)(false), openCommentDesk = _a[0], setOpenCommentDesk = _a[1];\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var handleClick = function () {\r\n        var _a;\r\n        setOpenCommentDesk(!openCommentDesk);\r\n        (_a = refTextarea.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    };\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: Comments_css_1.default.comments_block },\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.user_info },\r\n                react_1.default.createElement(\"a\", { href: '#', className: Comments_css_1.default.user_link },\r\n                    icon ? icon : react_1.default.createElement(Icon_1.Icon, { name: 'AnonSvg', height: 20, width: 20 }),\r\n                    react_1.default.createElement(\"span\", null, name ? name : 'name')),\r\n                react_1.default.createElement(\"span\", { className: Comments_css_1.default.timing }, \"Timing\"),\r\n                react_1.default.createElement(\"span\", { className: Comments_css_1.default.community }, \"Community\")),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.comment_text }, commentBody ? commentBody :\r\n                react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut consequatur dolor doloribus ea, fuga id laudantium pariatur rerum voluptas. Ab consectetur delectus dignissimos doloremque dolores eos ex excepturi exercitationem!\")),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.controls },\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control, onClick: handleClick },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: 'CommentsSvg', height: 15, width: 15 }),\r\n                    react_1.default.createElement(\"span\", null, \"Answer\")),\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control },\r\n                    react_1.default.createElement(icons_1.ShareSvg, null),\r\n                    react_1.default.createElement(\"span\", null, \"Share\")),\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control },\r\n                    react_1.default.createElement(icons_1.ReportSvg, null),\r\n                    react_1.default.createElement(\"span\", null, \"Report\")))), innerComments === null || innerComments === void 0 ? void 0 :\r\n        innerComments.map(function (topLevelComments, index) { return (react_1.default.createElement(\"div\", { style: { padding: '20px' } },\r\n            react_1.default.createElement(exports.Comments, { id: id, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies }))); }),\r\n        openCommentDesk ? react_1.default.createElement(CommentForm_1.CommentForm, { refTextarea: refTextarea }) : null);\r\n};\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Comments/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Comments/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentsArea.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsArea/CommentsArea.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsArea = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentsArea_css_1 = __importDefault(__webpack_require__(/*! ./commentsArea.css */ \"./src/shared/CommentsArea/commentsArea.css\"));\r\nvar Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ../CardsList/Card/Menu/MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentsArea/CommentForm/index.ts\");\r\nvar usePostsCommentsTwo_1 = __webpack_require__(/*! ../../hooks/usePostsCommentsTwo */ \"./src/hooks/usePostsCommentsTwo.ts\");\r\nvar CommentsArea = function (_a) {\r\n    var postId = _a.postId, id = _a.id, handelMenuClick = _a.handelMenuClick;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsCommentsTwo_1.usePostsCommentsTwo)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        console.log('<<Final arr in CommentsArea>> ', data);\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.CommentBtn, { number: commentsData.length }), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: handelMenuClick },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: handelMenuClick },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentsArea_css_1.default.menu }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) })),\r\n        react_1.default.createElement(CommentForm_1.CommentForm, { id: id, postId: postId, refTextarea: refTextarea }),\r\n        commentsData.map(function (topLevelComments, index) { return (react_1.default.createElement(Comments_1.Comments, { id: id, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies })); }));\r\n};\r\nexports.CommentsArea = CommentsArea;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentsArea.tsx?");

/***/ })

})