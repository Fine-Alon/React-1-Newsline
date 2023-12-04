webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsCommentsTwo.ts":
/*!******************************************!*\
  !*** ./src/hooks/usePostsCommentsTwo.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsCommentsTwo = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\n/*interface IComment {\r\n    data: ICommentData[]\r\n    kind: string\r\n}*/\r\nvar usePostsCommentsTwo = function (postId) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId, \"?sr_detail=true\"), {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var comment = shallowComments(res.data[1].data.children);\r\n                console.log('<<Final Arr from hook to post..>> :', data);\r\n                setData(comment);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(\"Error fetching comments:\", error);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n};\r\nexports.usePostsCommentsTwo = usePostsCommentsTwo;\r\n// @ts-ignore\r\nvar shallowComments = function (comments) {\r\n    var main = [];\r\n    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {\r\n        var comment = comments_1[_i];\r\n        var commentData = comment.data;\r\n        var commentKind = comment.kind;\r\n        var data = {\r\n            id: commentData.id,\r\n            body: commentData.body,\r\n            author: commentData.author,\r\n            replies: []\r\n        };\r\n        // Check if the comment type is 't1'\r\n        // @ts-ignore\r\n        if (commentKind === 't1') {\r\n            console.log('<<DATA Kind-t1>> :');\r\n            main.push(data);\r\n            // Check if there are replies and they have children\r\n            // @ts-ignore\r\n            if (commentData.replies && commentData.replies.data.children.length > 0) {\r\n                console.log('<<we in REPLIES>>');\r\n                // Recursively process nested comments\r\n                // @ts-ignore\r\n                var nestedComments = shallowComments(commentData.replies.data.children);\r\n                // @ts-ignore\r\n                data.replies = nestedComments;\r\n            }\r\n        }\r\n        return shallow;\r\n    }\r\n    // @ts-ignore\r\n    main.push(shallow);\r\n    return main;\r\n};\r\n/*const categorizeComments = (topLevelComments: IComment[]): ICommentData[][] => {\r\n    const categorizedComments: ICommentData[][] = [];\r\n    categorizeRecursive(topLevelComments, categorizedComments, 0);\r\n    return categorizedComments;\r\n}\r\n\r\n// [{},{},{},{},{},{},{},{},{},{},{},{},{},{},]    -->  topLevelComments\r\n// {kind: 't1',data:{} } --> comment\r\n// {id,body,author, replies={} }\r\n// replies = {kind:\"Listing\", {data}}\r\n// replies = {{data}}\r\nconst categorizeRecursive = (comments: IComment[], result: ICommentData[][], level: number) => {\r\n    const commentArray: ICommentData[] = [];\r\n\r\n    comments.forEach((comment: IComment) => {\r\n        // @ts-ignore\r\n        if (comment.kind === 't1') {\r\n            const data = {\r\n                // @ts-ignore\r\n                id: comment.data.id,\r\n                // @ts-ignore\r\n                body: comment.data.body,\r\n                // @ts-ignore\r\n                author: comment.data.author,\r\n                // @ts-ignore\r\n                replies: comment.data.replies && comment.data.replies.data.children\r\n                    // @ts-ignore\r\n                    ? categorizeRecursive(comment.data.replies.data.children, result, level + 1)\r\n                    : undefined,\r\n            };\r\n\r\n            // You should push the comment data into commentArray\r\n            // @ts-ignore\r\n            commentArray.push(data);\r\n        }\r\n    });\r\n\r\n    // Ensure the array for the current level exists\r\n    result[level] = result[level] || [];\r\n    // @ts-ignore\r\n    result[level].push(...commentArray);\r\n\r\n    // @ts-ignore\r\n    return commentArray;\r\n};*/\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsCommentsTwo.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentList = exports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\r\nvar PostContent_1 = __webpack_require__(/*! ./PostContent */ \"./src/shared/Post/PostContent/index.ts\");\r\nvar usePostsCommentsTwo_1 = __webpack_require__(/*! ../../hooks/usePostsCommentsTwo */ \"./src/hooks/usePostsCommentsTwo.ts\");\r\nvar Post = function (_a) {\r\n    var onClose = _a.onClose, subreddit = _a.subreddit, id = _a.id, handelMenuClick = _a.handelMenuClick, postId = _a.postId;\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var handelClick = function (event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        };\r\n        document.addEventListener('click', handelClick);\r\n        return function () {\r\n            document.removeEventListener('click', handelClick);\r\n        };\r\n    }, [onClose]);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node) {\r\n        console.error(\"Element with ID 'modal_root' not found.\");\r\n        return null;\r\n    }\r\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(PostContent_1.PostContent, null),\r\n        react_1.default.createElement(CommentList, { postId: id })), node);\r\n};\r\nexports.Post = Post;\r\nfunction CommentList(_a) {\r\n    var postId = _a.postId;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsCommentsTwo_1.usePostsCommentsTwo)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        console.log('<<Final arr in Post>> :', data);\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    return (react_1.default.createElement(\"div\", null, \"API Reddit suspect be here\"));\r\n}\r\nexports.CommentList = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ })

})