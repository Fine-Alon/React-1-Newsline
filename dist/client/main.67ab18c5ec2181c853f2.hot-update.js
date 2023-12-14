webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsComments.ts":
/*!***************************************!*\
  !*** ./src/hooks/usePostsComments.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsComments = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar usePostsComments = function (postId) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId, \"?sr_detail=true\"), {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var comment = shallowComments(res.data[1].data.children);\r\n                setData(comment);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(\"Error fetching comments:\", error);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n};\r\nexports.usePostsComments = usePostsComments;\r\nvar shallowComments = function (comments) {\r\n    var main = [];\r\n    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {\r\n        var comment = comments_1[_i];\r\n        var commentData = comment.data;\r\n        var data = {\r\n            id: commentData.id,\r\n            body: commentData.body,\r\n            author: commentData.author,\r\n            replies: []\r\n        };\r\n        // Check if the comment type is 't1'\r\n        if (comment.kind === 't1') {\r\n            main.push(data);\r\n            // Check if there are replies and they have children\r\n            // @ts-ignore\r\n            if (commentData.replies && commentData.replies.data.children.length > 0) {\r\n                // Recursively process nested comments\r\n                // @ts-ignore\r\n                var nestedComments = shallowComments(commentData.replies.data.children);\r\n                // console.log('nestedComments',nestedComments)\r\n                // @ts-ignore\r\n                data.replies = nestedComments;\r\n            }\r\n        }\r\n    }\r\n    return main;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsComments.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar usePostData = function () {\r\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 || token !== undefined) {\r\n            axios_1.default\r\n                .get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n                headers: { Authorization: \"bearer \".concat(token) }\r\n            })\r\n                .then(function (res) {\r\n                // console.log(res.data.data.children[1].data.subreddit)\r\n                var bestPostArr = res.data.data.children.map(function (data) { return ({\r\n                    id: data.data.id,\r\n                    subreddit: data.data.subreddit,\r\n                    title: data.data.title,\r\n                    author: data.data.author,\r\n                    created: data.data.created_utc * 1000,\r\n                    banner_img: data.data.sr_detail.banner_img,\r\n                    icon_img: data.data.sr_detail.icon_img,\r\n                    ups: data.data.ups,\r\n                    url: data.data.url,\r\n                }); });\r\n                setPosts(bestPostArr);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, []);\r\n    return [posts];\r\n};\r\nexports.usePostData = usePostData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

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

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.setTokenAC = exports.SET_TOKEN = exports.updateCommentAC = exports.UPDATE_COMMENT = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\n// --------------------------    ME_REQUEST   ---------------------------------------//\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\n// --------------------------    ME_REQUEST_SUCCESS   ---------------------------------------//\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\n// --------------------------    ME_REQUEST_ERROR   ---------------------------------------//\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\n// --------------------------    UPDATE_COMMENT   ---------------------------------------//\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateCommentAC = function (payload) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    payload: payload,\r\n}); };\r\nexports.updateCommentAC = updateCommentAC;\r\n// --------------------------    SET_TOKEN   ---------------------------------------//\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setTokenAC = function (payload) { return ({\r\n    type: exports.SET_TOKEN,\r\n    payload: payload,\r\n}); };\r\nexports.setTokenAC = setTokenAC;\r\n// --------------------------    ME_REQUEST_ASYNC   ---------------------------------------//\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.meRequest)());\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/api/v1/me.json', {\r\n            headers: { Authorization: \"bearer \".concat(getState().token) }\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            dispatch((0, exports.meRequestSuccess)({ iconImg: userData.icon_img, name: userData.name }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.meRequestError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reduser.ts":
/*!*********************************!*\
  !*** ./src/store/me/reduser.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nvar reduser_1 = __webpack_require__(/*! ../reduser */ \"./src/store/reduser.ts\");\r\nvar meReducer = function (state, action) {\r\n    if (state === void 0) { state = reduser_1.initialState.me; }\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { isLoading: true });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { isLoading: false, data: action.data });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, isLoading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reduser.ts?");

/***/ }),

/***/ "./src/store/reduser.ts":
/*!******************************!*\
  !*** ./src/store/reduser.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.initialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reduser_1 = __webpack_require__(/*! ./me/reduser */ \"./src/store/me/reduser.ts\");\r\nexports.initialState = {\r\n    commentText: 'hello SkillBox!',\r\n    token: '',\r\n    me: {\r\n        isLoading: false,\r\n        error: '',\r\n        data: {}\r\n    }\r\n};\r\nvar rootReduser = function (state, action) {\r\n    if (state === void 0) { state = exports.initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.payload });\r\n        case actions_1.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.payload });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reduser_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reduser.ts?");

/***/ })

})