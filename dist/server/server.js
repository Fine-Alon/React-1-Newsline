/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ./shared/Text */ \"./src/shared/Text/index.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar reduser_1 = __webpack_require__(/*! ./store/reduser */ \"./src/store/reduser.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar actions_1 = __webpack_require__(/*! ./store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar store = (0, redux_1.createStore)(reduser_1.rootReduser, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        dispatch((0, actions_1.saveToken)());\r\n    }, [dispatch]);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(\"br\", null),\r\n                react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 28, color: Text_1.EColors.orange }, \" Label1\"),\r\n                react_1.default.createElement(Text_1.Text, { size: 20 }, \" Label2\"),\r\n                react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16 }, \" Label3\")))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n    react_1.default.createElement(AppComponent, null)); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsComments.ts":
/*!***************************************!*\
  !*** ./src/hooks/usePostsComments.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsComments = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar usePostsComments = function (postId) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId, \"?sr_detail=true\"), {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var comment = shallowComments(res.data[1].data.children);\r\n                setData(comment);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(\"Error fetching comments:\", error);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n};\r\nexports.usePostsComments = usePostsComments;\r\nvar shallowComments = function (comments) {\r\n    var main = [];\r\n    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {\r\n        var comment = comments_1[_i];\r\n        var commentData = comment.data;\r\n        var data = {\r\n            id: commentData.id,\r\n            body: commentData.body,\r\n            author: commentData.author,\r\n            replies: []\r\n        };\r\n        // Check if the comment type is 't1'\r\n        if (comment.kind === 't1') {\r\n            main.push(data);\r\n            // Check if there are replies and they have children\r\n            // @ts-ignore\r\n            if (commentData.replies && commentData.replies.data.children.length > 0) {\r\n                // Recursively process nested comments\r\n                // @ts-ignore\r\n                var nestedComments = shallowComments(commentData.replies.data.children);\r\n                // console.log('nestedComments',nestedComments)\r\n                // @ts-ignore\r\n                data.replies = nestedComments;\r\n            }\r\n        }\r\n    }\r\n    return main;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsComments.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar useUserData = function () {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var isLoading = (0, react_redux_1.useSelector)(function (state) { return state.me.isLoading; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (token !== \"\" && token !== \"undefined\") {\r\n            dispatch((0, actions_1.meRequestAsync)());\r\n        }\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        isLoading: isLoading\r\n    };\r\n};\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black:          #333333;\\r\\n  --orange:         #CC6633;\\r\\n  --green:          #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexHtmlTemplate = void 0;\r\nvar indexHtmlTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\" ></script>\\n  <script>\\n     window.__token__ = '\".concat(token, \"'\\n  </script>\\n  <title>Reddit</title>\\n</head>\\n\\n<body>\\n  <div id='dropdown_root'></div>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id='modal_root'></div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexHtmlTemplate = indexHtmlTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexHtmlTemplate_1.indexHtmlTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n        auth: { username: 'EWrJZKDswW7yBmZbYwV4ZQ', password: \"vkeaVkx_2uVnXHcp6oAPy_IEZOuv7A\" },\r\n        headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" },\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexHtmlTemplate_1.indexHtmlTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar noop_1 = __webpack_require__(/*! ../../../utils/js/noop */ \"./src/utils/js/noop.ts\");\r\nvar Card = function (props) {\r\n    var postId = props.postId, subreddit = props.subreddit, _a = props.onDeletePost, onDeletePost = _a === void 0 ? noop_1.NOOP : _a, author = props.author, created = props.created, banner_img = props.banner_img, icon_img = props.icon_img, ups = props.ups, url = props.url, title = props.title, id = props.id;\r\n    var handelMenuClick = function (postId) {\r\n        onDeletePost(postId);\r\n    };\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(TextContent_1.TextContent, { created: created, id: id, postId: postId, subreddit: subreddit, author: author, title: title, url: url, icon_img: icon_img }),\r\n        react_1.default.createElement(Preview_1.Preview, { banner_img: banner_img }),\r\n        react_1.default.createElement(Menu_1.Menu, { postId: postId, onDeletePost: handelMenuClick }),\r\n        react_1.default.createElement(Controls_1.Controls, { ups: ups }));\r\n};\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nfunction Controls(_a) {\r\n    var ups = _a.ups;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n            react_1.default.createElement(\"span\", { className: card_css_1.default.karmaValue }, ups ? ups : '345'),\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.down },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\r\n        react_1.default.createElement(\"button\", { className: card_css_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: card_css_1.default.commentsNumber }, \"43\")),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ./MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Menu = function (_a) {\r\n    var _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, postId = _a.postId, onDeletePost = _a.onDeletePost;\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.CommentBtn, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: onDeletePost },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: onDeletePost },\r\n        { text: react_1.default.createElement(MenuLinks_1.Close, { styles: card_css_1.default.closeButton }), className: card_css_1.default.desktopHidden },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var _c = react_1.default.useState(isOpen), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { id: postId, className: card_css_1.default.menu },\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { btnStyles: card_css_1.default.menuSvg, button: react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: 'MenuSvg', height: 20, width: 20 })) }, isDropdownOpen &&\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.dropdown }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) })))));\r\n};\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuLinks/MenuLinks.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuLinks/MenuLinks.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Close = exports.Report = exports.Save = exports.Hide = exports.Share = exports.CommentBtn = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentBtn = function (props) {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'CommentsSvg', height: 15, width: 15 }),\r\n        \" \",\r\n        props.number,\r\n        \" Comments\");\r\n};\r\nexports.CommentBtn = CommentBtn;\r\nvar Share = function () {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'ShareSvg' }),\r\n        \"Share \");\r\n};\r\nexports.Share = Share;\r\nvar Hide = function () {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'HideSvg' }),\r\n        \"Hide \");\r\n};\r\nexports.Hide = Hide;\r\nvar Save = function () {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'SaveSvg' }),\r\n        \"Save \");\r\n};\r\nexports.Save = Save;\r\nvar Report = function () {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'ReportSvg' }),\r\n        \" Report \");\r\n};\r\nexports.Report = Report;\r\nvar Close = function (props) {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"button\", { className: props.styles }, \" Close\"));\r\n};\r\nexports.Close = Close;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuLinks/MenuLinks.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuLinks/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuLinks/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/MenuLinks.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuLinks/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nfunction Preview(_a) {\r\n    var banner_img = _a.banner_img;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: card_css_1.default.previewImg, src: banner_img ? banner_img\r\n                : \"https://cdn.dribbble.com/userupload/7783548/file/original-98c414a952d010a8c6c4035dc54fc00d.png?compress=1&resize=400x300&vertical=center\", alt: \"preview\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar dateTransformator_1 = __webpack_require__(/*! ../../../../../utils/js/dateTransformator */ \"./src/utils/js/dateTransformator.ts\");\r\nfunction MetaData(_a) {\r\n    var author = _a.author, url = _a.url, icon_img = _a.icon_img, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: icon_img ? icon_img\r\n                    : 'https://cdn.dribbble.com/userupload/7871949/file/original-26aa3025abe2b1a39bd21a3ba639b590.jpg?compress=1&crop=163x122-1437x1078&resize=400x300&vertical=center', alt: 'avatar' }),\r\n            react_1.default.createElement(\"a\", { href: url ? url : '#user-url', className: card_css_1.default.username }, author ? author : 'Rick Griens')),\r\n        react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: card_css_1.default.publishedLabel }, \"published\"),\r\n            created\r\n                ? (0, dateTransformator_1.utcToLeftTime)(created) + ' hours ago'\r\n                : ' 8 hours ago')));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\r\nfunction TextContent(_a) {\r\n    var author = _a.author, id = _a.id, subreddit = _a.subreddit, postId = _a.postId, title = _a.title, url = _a.url, icon_img = _a.icon_img, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { author: author, url: url, icon_img: icon_img, created: created }),\r\n        react_1.default.createElement(Title_1.Title, { postId: postId, subreddit: subreddit, title: title, id: id })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Post_1 = __webpack_require__(/*! ../../../../Post */ \"./src/shared/Post/index.ts\");\r\nvar noop_1 = __webpack_require__(/*! ../../../../../utils/js/noop */ \"./src/utils/js/noop.ts\");\r\nfunction Title(_a) {\r\n    var title = _a.title, subreddit = _a.subreddit, postId = _a.postId, id = _a.id, _b = _a.onDeletePost, onDeletePost = _b === void 0 ? noop_1.NOOP : _b;\r\n    var _c = (0, react_1.useState)(false), isModalOpen = _c[0], setIsModalOpen = _c[1];\r\n    var handelMenuClick = function (postId) {\r\n        onDeletePost(postId);\r\n    };\r\n    return (react_1.default.createElement(\"h2\", { className: card_css_1.default.title, onClick: function () {\r\n            setIsModalOpen(true);\r\n        } },\r\n        react_1.default.createElement(\"button\", { className: card_css_1.default.postLink }, title\r\n            ? title\r\n            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'),\r\n        isModalOpen &&\r\n            react_1.default.createElement(Post_1.Post, { id: id, postId: postId, subreddit: subreddit, handelMenuClick: handelMenuClick, onClose: function () {\r\n                    setIsModalOpen(false);\r\n                } })));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"title\": \"card__title--2eC9p\",\n\t\"metaData\": \"card__metaData--2-4Ht\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"userLink\": \"card__userLink--1NVQG\",\n\t\"avatar\": \"card__avatar--3eg0i\",\n\t\"username\": \"card__username--1I_6u\",\n\t\"preview\": \"card__preview--M1PGJ\",\n\t\"previewImg\": \"card__previewImg--37Jut\",\n\t\"menu\": \"card__menu--2VNdY\",\n\t\"menuButton\": \"card__menuButton--2icIq\",\n\t\"menuSvg\": \"card__menuSvg--cFsR1\",\n\t\"dropdown\": \"card__dropdown--Loivo\",\n\t\"closeButton\": \"card__closeButton--2Y2Nh\",\n\t\"mobileHidden\": \"card__mobileHidden--3548R\",\n\t\"desktopHidden\": \"card__desktopHidden--2ehWz\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"actions\": \"card__actions--1cmic\",\n\t\"karmaCounter\": \"card__karmaCounter--2eqMa\",\n\t\"karmaValue\": \"card__karmaValue--1HJaY\",\n\t\"down\": \"card__down--KLMht\",\n\t\"up\": \"card__up--K0BLJ\",\n\t\"commentsButton\": \"card__commentsButton--1yRBb\",\n\t\"commentsNumber\": \"card__commentsNumber--2xwYQ\",\n\t\"shareButton\": \"card__shareButton--24LVI\",\n\t\"saveButton\": \"card__saveButton--2Cz7O\",\n\t\"publishedLabel\": \"card__publishedLabel--3FDD2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsListGeneric.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/CardsListGeneric.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsListGeneric = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./Card/card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/posts/actions */ \"./src/store/posts/actions.ts\");\r\nvar onDeletePost = function (id) {\r\n    console.log(id);\r\n};\r\nfunction CardsListGeneric() {\r\n    // const postArr = useContext(postContext)\r\n    var postArr = (0, react_redux_1.useSelector)(function (state) { return state.posts.posts; });\r\n    var postArrError = (0, react_redux_1.useSelector)(function (state) { return state.posts.postsError; });\r\n    var after = (0, react_redux_1.useSelector)(function (state) { return state.posts.after; });\r\n    var _a = (0, react_1.useState)(true), isPending = _a[0], setIsPending = _a[1];\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        setIsPending(postArr.length === 0);\r\n    }, [postArr.length]);\r\n    var cardArr = postArr.map(function (post) { return ({\r\n        As: 'li',\r\n        text: react_1.default.createElement(Card_1.Card, { key: post.id, id: post.id, postId: post.id, subreddit: post.subreddit, author: post.author, created: post.created, icon_img: post.icon_img, banner_img: post.banner_img, ups: post.ups, url: post.url, title: post.title }),\r\n        className: card_css_1.default.card,\r\n        id: post.id || ''\r\n    }); });\r\n    (0, react_1.useEffect)(function () {\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                console.log('end!!!', entries);\r\n                dispatch((0, actions_1.setPost)(after));\r\n                console.log('after', after);\r\n            }\r\n        }, { threshold: 0, rootMargin: '100px' });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        // Cleanup function\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [postArr, bottomOfList.current, after, dispatch]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cards_list },\r\n        postArr.length === 0 && !postArrError && !isPending &&\r\n            react_1.default.createElement(\"div\", { role: \"alert\", style: { color: 'darkblue', textAlign: 'center' } }, \"NO POSTS YET...\"),\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: cardArr }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        postArrError && react_1.default.createElement(\"div\", { role: \"alert\", style: { color: 'darkred', textAlign: 'center' } }, postArrError),\r\n        !postArrError && isPending && react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: 'center' } }, \"Loading...\")));\r\n}\r\nexports.CardsListGeneric = CardsListGeneric;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsListGeneric.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cards_list\": \"cardslist__cards_list--3tf-F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Comments/Comments.css":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comments_block\": \"Comments__comments_block--1hfbB\",\n\t\"controls\": \"Comments__controls--_6p3b\",\n\t\"control\": \"Comments__control--17Dl0\",\n\t\"user_info\": \"Comments__user_info--kl-lq\",\n\t\"user_link\": \"Comments__user_link--1dLeK\",\n\t\"community\": \"Comments__community--3qzo-\",\n\t\"timing\": \"Comments__timing--1Qjdr\",\n\t\"comment_text\": \"Comments__comment_text--ZTs09\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Comments/Comments.css?");

/***/ }),

/***/ "./src/shared/Comments/Comments.tsx":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Comments_css_1 = __importDefault(__webpack_require__(/*! ./Comments.css */ \"./src/shared/Comments/Comments.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentsArea/CommentFormContainer */ \"./src/shared/CommentsArea/CommentFormContainer/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar Comments = function (props) {\r\n    var id = props.id, commentBody = props.commentBody, innerComments = props.innerComments, name = props.name, postId = props.postId, icon = props.icon;\r\n    var _a = (0, react_1.useState)(false), openCommentDesk = _a[0], setOpenCommentDesk = _a[1];\r\n    // const refTextarea = useRef<HTMLTextAreaElement>(null)\r\n    var handleClick = function () {\r\n        setOpenCommentDesk(!openCommentDesk);\r\n        // refTextarea.current?.focus()\r\n    };\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: Comments_css_1.default.comments_block },\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.user_info },\r\n                react_1.default.createElement(\"a\", { href: '#', className: Comments_css_1.default.user_link },\r\n                    icon ? icon : react_1.default.createElement(Icon_1.Icon, { name: 'AnonSvg', height: 20, width: 20 }),\r\n                    react_1.default.createElement(\"span\", null, name ? name : 'name')),\r\n                react_1.default.createElement(\"span\", { className: Comments_css_1.default.timing }, \"Timing\"),\r\n                react_1.default.createElement(\"span\", { className: Comments_css_1.default.community }, \"Community\")),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.comment_text }, commentBody ? commentBody\r\n                : react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut dolor doloribus !\")),\r\n            react_1.default.createElement(\"div\", { className: Comments_css_1.default.controls },\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control, onClick: handleClick },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: 'CommentsSvg', height: 15, width: 15 }),\r\n                    react_1.default.createElement(\"span\", null, \"Answer\")),\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control },\r\n                    react_1.default.createElement(icons_1.ShareSvg, null),\r\n                    react_1.default.createElement(\"span\", null, \"Share\")),\r\n                react_1.default.createElement(\"button\", { className: Comments_css_1.default.control },\r\n                    react_1.default.createElement(icons_1.ReportSvg, null),\r\n                    react_1.default.createElement(\"span\", null, \"Report\")))), innerComments === null || innerComments === void 0 ? void 0 :\r\n        innerComments.map(function (topLevelComments, index) {\r\n            var uniqueKey = (0, generateRandomIndex_1.generateRandomString)();\r\n            return (react_1.default.createElement(\"div\", { key: uniqueKey + index, style: { paddingLeft: '60px' } },\r\n                react_1.default.createElement(exports.Comments, { key: uniqueKey, id: topLevelComments.author, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies })));\r\n        }),\r\n        openCommentDesk ? react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { name: name, id: id }) : null);\r\n};\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Comments/Comments.tsx?");

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

/***/ "./src/shared/CommentsArea/CommentForm/CommentForm.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/CommentForm.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentForm_css_1 = __importDefault(__webpack_require__(/*! ./commentForm.css */ \"./src/shared/CommentsArea/CommentForm/commentForm.css\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar CommentForm = function (props) {\r\n    var value = props.value, handleChange = props.handleChange, name = props.name, id = props.id, handleSubmitt = props.handleSubmitt, postId = props.postId;\r\n    var refTextarea = (0, react_1.useRef)(null);\r\n    var _a = (0, react_hook_form_1.useForm)({ defaultValues: { comment: value } }), register = _a.register, handleSubmit = _a.handleSubmit, watch = _a.watch;\r\n    var onSubmit = function (data) { return alert('Form was sent'); };\r\n    // Use useEffect to focus the textarea when the component mounts\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refTextarea.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { id: postId, key: postId, className: commentForm_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\r\n            react_1.default.createElement(\"textarea\", __assign({ placeholder: \"\".concat(name ? name : 'Whoever u are', \", leave your comment\"), className: commentForm_css_1.default.input }, register(\"comment\", { required: false }), { \r\n                // it is possible to uncomment <<ref={refTextarea}>> below to see focus on textarea when\r\n                // post window is open. But!!! it will do warning about rendering, so u need chang initial value approach\r\n                //       ref={refTextarea}\r\n                onChange: handleChange })),\r\n            react_1.default.createElement(\"div\", { className: commentForm_css_1.default.form_bottom },\r\n                react_1.default.createElement(\"span\", { className: commentForm_css_1.default.controls }, \"here will be some CONTROLS\"),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: commentForm_css_1.default.btnSubmit }, \"comment\"))));\r\n};\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentForm/commentForm.css":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/commentForm.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentForm__form--1HMZ-\",\n\t\"input\": \"commentForm__input--Iq-N9\",\n\t\"form_bottom\": \"commentForm__form_bottom--5xRpD\",\n\t\"controls\": \"commentForm__controls--1HPGs\",\n\t\"btnSubmit\": \"commentForm__btnSubmit--3MgUY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/commentForm.css?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentForm/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CommentsArea/CommentForm/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentsArea/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentsArea/CommentForm/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar CommentFormContainer = function (_a) {\r\n    var name = _a.name, id = _a.id, postId = _a.postId;\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var handleChange = function (event) {\r\n        dispatch((0, actions_1.updateCommentAC)(event.target.value));\r\n    };\r\n    var handleSubmit = function (event) {\r\n        event.preventDefault();\r\n    };\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { handleChange: handleChange, name: name, postId: postId, handleSubmitt: handleSubmit, value: value }));\r\n};\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentFormContainer/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CommentsArea/CommentFormContainer/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsArea/CommentsArea.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsArea/CommentsArea.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsArea = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsArea_css_1 = __importDefault(__webpack_require__(/*! ./commentsArea.css */ \"./src/shared/CommentsArea/commentsArea.css\"));\r\nvar Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ../CardsList/Card/Menu/MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar usePostsComments_1 = __webpack_require__(/*! ../../hooks/usePostsComments */ \"./src/hooks/usePostsComments.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer/CommentFormContainer */ \"./src/shared/CommentsArea/CommentFormContainer/CommentFormContainer.tsx\");\r\nvar CommentsArea = function (_a) {\r\n    var postId = _a.postId, id = _a.id, handelMenuClick = _a.handelMenuClick;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsComments_1.usePostsComments)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.CommentBtn, { number: commentsData.length }), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: handelMenuClick },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: commentsArea_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: handelMenuClick },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentsArea_css_1.default.menu }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) })),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { id: id, postId: postId }),\r\n        commentsData.map(function (topLevelComments, index) {\r\n            var uniqueKey = (0, generateRandomIndex_1.generateRandomString)();\r\n            return (react_1.default.createElement(Comments_1.Comments, { key: uniqueKey, id: id, commentBody: topLevelComments.body, postId: postId, name: topLevelComments.author, innerComments: topLevelComments.replies }));\r\n        }));\r\n};\r\nexports.CommentsArea = CommentsArea;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/CommentsArea.tsx?");

/***/ }),

/***/ "./src/shared/CommentsArea/commentsArea.css":
/*!**************************************************!*\
  !*** ./src/shared/CommentsArea/commentsArea.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"commentsArea__menu--12rch\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/commentsArea.css?");

/***/ }),

/***/ "./src/shared/CommentsArea/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentsArea/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsArea */ \"./src/shared/CommentsArea/CommentsArea.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsArea/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nvar CardsListGeneric_1 = __webpack_require__(/*! ../CardsList/CardsListGeneric */ \"./src/shared/CardsList/CardsListGeneric.tsx\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/posts/actions */ \"./src/store/posts/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar Content = function (_a) {\r\n    var children = _a.children;\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var after = (0, react_redux_1.useSelector)(function (state) { return state.posts.after; });\r\n    (0, react_1.useEffect)(function () {\r\n        dispatch((0, actions_1.setPost)(after));\r\n    }, [dispatch]);\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(CardsListGeneric_1.CardsListGeneric, null),\r\n        children);\r\n};\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nvar noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\r\nfunction Dropdown(props) {\r\n    var button = props.button, btnStyles = props.btnStyles, children = props.children, _a = props.onOpen, onOpen = _a === void 0 ? noop_1.NOOP : _a, _b = props.onClose, onClose = _b === void 0 ? noop_1.NOOP : _b, isOpen = props.isOpen;\r\n    var btnRef = (0, react_1.useRef)(null);\r\n    var listRef = (0, react_1.useRef)(null);\r\n    var _c = (0, react_1.useState)(isOpen), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];\r\n    var _d = (0, react_1.useState)(null), coords = _d[0], setCoords = _d[1];\r\n    var getCoords = function () {\r\n        var _a;\r\n        var box = (_a = btnRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\r\n        if (box) {\r\n            return {\r\n                left: box.left,\r\n                top: box.top + box.height,\r\n                width: box.width,\r\n            };\r\n        }\r\n        return null;\r\n    };\r\n    (0, react_1.useEffect)(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    (0, react_1.useEffect)(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!isDropdownOpen)\r\n            return;\r\n        var coords = getCoords();\r\n        setCoords(coords);\r\n    }, [isDropdownOpen]);\r\n    var handleClose = function (event) {\r\n        var _a;\r\n        if (event.target instanceof Node && !((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n            setIsDropdownOpen(false);\r\n        }\r\n    };\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.body.querySelector('#dropdown_root');\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { ref: btnRef, className: dropdown_css_1.default.container },\r\n            react_1.default.createElement(\"div\", { className: btnStyles, onClick: handleOpen }, button),\r\n            isDropdownOpen && coords && (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, onClick: handleClose },\r\n                react_1.default.createElement(\"div\", { ref: listRef, className: dropdown_css_1.default.list, style: {\r\n                        position: 'absolute',\r\n                        top: \"\".concat(coords.top, \"px\"),\r\n                        left: \"\".concat(coords.left, \"px\"),\r\n                        minWidth: \"\".concat(Math.max(130, coords.width), \"px\"),\r\n                        minHeight: \"\".concat(Math.max(150, coords.width), \"px\"),\r\n                    }, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, id = _a.id, _c = _a.onClick, onClick = _c === void 0 ? noop_1.NOOP : _c, href = _a.href, className = _a.className;\r\n        return (react_1.default.createElement(As, { key: id, className: className, onClick: function () { return onClick(id); }, href: href }, text));\r\n    }));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar Header = function () {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null)));\r\n};\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar SearchBlock = function () {\r\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, isLoading = _a.isLoading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        \"search block\",\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { userName: data.name, isLoading: isLoading, avatarSrc: data.iconImg })));\r\n};\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar UserBlock = function (_a) {\r\n    var avatarSrc = _a.avatarSrc, isLoading = _a.isLoading, userName = _a.userName;\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('EWrJZKDswW7yBmZbYwV4ZQ', \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\"), className: userblock_css_1.default.userBox },\r\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n                ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n                : react_1.default.createElement(Icon_1.Icon, { name: 'AnonSvg', height: 50, width: 50 })),\r\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.username, style: { paddingRight: 12 } }, isLoading\r\n                ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.grey99 }, \"Loading...\"))\r\n                : (react_1.default.createElement(Text_1.Text, { size: 20, color: userName ? Text_1.EColors.black : Text_1.EColors.grey99 }, userName || 'Anonymous')))));\r\n};\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"userName\": \"userblock__userName--foIO-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar EName;\r\n(function (EName) {\r\n    EName[\"HideSvg\"] = \"HideSvg\";\r\n    EName[\"CommentsSvg\"] = \"CommentsSvg\";\r\n    EName[\"MenuSvg\"] = \"MenuSvg\";\r\n    EName[\"ReportSvg\"] = \"ReportSvg\";\r\n    EName[\"SaveSvg\"] = \"SaveSvg\";\r\n    EName[\"ShareSvg\"] = \"ShareSvg\";\r\n    EName[\"AnonSvg\"] = \"AnonSvg\";\r\n})(EName || (EName = {}));\r\nvar iconComponent = {\r\n    HideSvg: react_1.default.createElement(icons_1.HideSvg, null),\r\n    CommentsSvg: react_1.default.createElement(icons_1.CommentsSvg, null),\r\n    MenuSvg: react_1.default.createElement(icons_1.MenuSvg, null),\r\n    ReportSvg: react_1.default.createElement(icons_1.ReportSvg, null),\r\n    SaveSvg: react_1.default.createElement(icons_1.SaveSvg, null),\r\n    ShareSvg: react_1.default.createElement(icons_1.ShareSvg, null),\r\n    AnonSvg: react_1.default.createElement(icons_1.AnonSvg, null),\r\n};\r\nvar Icon = function (_a) {\r\n    var name = _a.name, width = _a.width, height = _a.height;\r\n    if (!(name in iconComponent)) {\r\n        console.error('there is not such svgComponent');\r\n        return null;\r\n    }\r\n    var svgElement = react_1.default.cloneElement(iconComponent[name], {\r\n        width: width,\r\n        height: height,\r\n    });\r\n    return react_1.default.createElement(react_1.default.Fragment, null, svgElement);\r\n};\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ../Layout/layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentList = exports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nvar PostContent_1 = __webpack_require__(/*! ./PostContent */ \"./src/shared/Post/PostContent/index.ts\");\r\nvar usePostsComments_1 = __webpack_require__(/*! ../../hooks/usePostsComments */ \"./src/hooks/usePostsComments.ts\");\r\nvar CommentsArea_1 = __webpack_require__(/*! ../CommentsArea */ \"./src/shared/CommentsArea/index.ts\");\r\nvar Post = function (_a) {\r\n    var onClose = _a.onClose, subreddit = _a.subreddit, id = _a.id, handelMenuClick = _a.handelMenuClick, postId = _a.postId;\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var handelClick = function (event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        };\r\n        document.addEventListener('click', handelClick);\r\n        return function () {\r\n            document.removeEventListener('click', handelClick);\r\n        };\r\n    }, [onClose]);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node) {\r\n        console.error(\"Element with ID 'modal_root' not found.\");\r\n        return null;\r\n    }\r\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(PostContent_1.PostContent, null),\r\n        react_1.default.createElement(CommentsArea_1.CommentsArea, { id: id, postId: postId, handelMenuClick: handelMenuClick })), node);\r\n};\r\nexports.Post = Post;\r\nfunction CommentList(_a) {\r\n    var postId = _a.postId;\r\n    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];\r\n    var data = (0, usePostsComments_1.usePostsComments)(postId);\r\n    (0, react_1.useEffect)(function () {\r\n        console.log('<<Final arr in Post>> :', data);\r\n        setCommentsData(data);\r\n    }, [data]); // Only re-run when data changes\r\n    if (!data)\r\n        return null;\r\n    return (react_1.default.createElement(\"div\", null, \"API Reddit suspect be here\"));\r\n}\r\nexports.CommentList = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostContent/PostContent.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/PostContent/PostContent.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar postContent_css_1 = __importDefault(__webpack_require__(/*! ./postContent.css */ \"./src/shared/Post/PostContent/postContent.css\"));\r\nvar PostContent = function () {\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"h2\", null, \"Here will be post Lorem ipsum dolor sit amet, consectetur perferendis.\"),\r\n        react_1.default.createElement(\"div\", { className: postContent_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fugit minima molestiae nobis quae quibusdam ratione ut! Aspernatur distinctio dolores obcaecati reiciendis sequi. Ab dignissimos dolor ea ex maxime, non optio provident quam quibusdam quis quos repellat totam ullam? Accusamus ad alias aliquam iure minima vitae? A accusantium aliquam asperiores corporis, eaque enim illo inventore ipsum iste laboriosam libero odio porro qui quidem quisquam repellendus sunt veritatis. Aut delectus in iusto perferendis quis sit. At delectus dolores\"),\r\n            react_1.default.createElement(\"p\", null, \" earum error facilis iusto odit officiis, quis repudiandae rerum velit voluptates voluptatibus. Culpa cum dolorem esse nesciunt optio sunt voluptate. Aperiam consequatur fugiat quae vero? Ad excepturi harum unde. Adipisci architecto commodi culpa, deleniti, dolorum error fugiat fugit hic impedit incidunt ipsum itaque minima molestias numquam perspiciatis praesentium quam, quod soluta temporibus veniam voluptatem voluptatibus?\"),\r\n            react_1.default.createElement(\"p\", null, \" earum error facilis iusto odit officiis, quis repudiandae rerum velit voluptates voluptatibus. Culpa cum dolorem esse nesciunt optio sunt voluptate. Aperiam consequatur fugiat quae vero? Ad excepturi harum nobis quas quisquam, sequi tempora. Alias dignissimos ex laborum nemo nihil quam quibusdam repellendus, , temporibus unde. Adipisci architecto commodi culpa, deleniti, dolorum error fugiat fugit hic impedit incidunt ipsum itaque minima molestias numquam perspiciatis praesentium quam, quod soluta temporibus veniam voluptatem voluptatibus?\")));\r\n};\r\nexports.PostContent = PostContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostContent/PostContent.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostContent/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/PostContent/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostContent */ \"./src/shared/Post/PostContent/PostContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostContent/index.ts?");

/***/ }),

/***/ "./src/shared/Post/PostContent/postContent.css":
/*!*****************************************************!*\
  !*** ./src/shared/Post/PostContent/postContent.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"postContent__content--33vy2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostContent/postContent.css?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"greyF4\"] = \"greyF4\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n    EColors[\"greyF9\"] = \"greyF9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nvar Text = function (props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, children = props.children, size = props.size, _e = props.color, color = _e === void 0 ? EColors.black : _e, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], text_css_1.default[color], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n};\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"grayF3\": \"text__grayF3--1zp-f\",\n\t\"grayD9\": \"text__grayD9--3Y4yY\",\n\t\"grayC4\": \"text__grayC4--3U0c5\",\n\t\"gray99\": \"text__gray99--DhweW\",\n\t\"gray66\": \"text__gray66--3ORMR\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/icons/AnonSvg.jsx":
/*!**************************************!*\
  !*** ./src/shared/icons/AnonSvg.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AnonSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 50, height: 50 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 50,\r\n            width: props.width ? props.width : 50\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" }));\r\n};\r\nexports.AnonSvg = AnonSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnonSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/CommentsSvg.jsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentsSvg.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentsSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 15, height: 15 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 15,\r\n            width: props.width ? props.width : 15\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" }));\r\n};\r\nexports.CommentsSvg = CommentsSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentsSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/HideSvg.jsx":
/*!**************************************!*\
  !*** ./src/shared/icons/HideSvg.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HideSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar HideSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 14, height: 14 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 14,\r\n            width: props.width ? props.width : 14\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14\\r\\n     3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43\\r\\n      11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417\\r\\n    10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159\\r\\n     9.485 11.417 10.43Z\", fill: \"#999999\" }));\r\n};\r\nexports.HideSvg = HideSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/HideSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/MenuSvg.jsx":
/*!**************************************!*\
  !*** ./src/shared/icons/MenuSvg.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar MenuSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 5, height: 20 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 5,\r\n            width: props.width ? props.width : 20\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }));\r\n};\r\nexports.MenuSvg = MenuSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/ReportSvg.jsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ReportSvg.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReportSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar ReportSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 16, height: 14 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 16,\r\n            width: props.width ? props.width : 14\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" }));\r\n};\r\nexports.ReportSvg = ReportSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ReportSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/SaveSvg.jsx":
/*!**************************************!*\
  !*** ./src/shared/icons/SaveSvg.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar SaveSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 14, height: 14 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 14,\r\n            width: props.width ? props.width : 14\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" }));\r\n};\r\nexports.SaveSvg = SaveSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/ShareSvg.jsx":
/*!***************************************!*\
  !*** ./src/shared/icons/ShareSvg.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareSvg = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar ShareSvg = function (props) {\r\n    var _a = react_1.default.useState({ width: 12, height: 14 }), dimensions = _a[0], setDimensions = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setDimensions({\r\n            height: props.height ? props.height : 12,\r\n            width: props.width ? props.width : 14\r\n        });\r\n    }, [props.height, props.width]);\r\n    return react_1.default.createElement(\"svg\", { width: dimensions.width, height: dimensions.height, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" }));\r\n};\r\nexports.ShareSvg = ShareSvg;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareSvg.jsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuSvg */ \"./src/shared/icons/MenuSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./HideSvg */ \"./src/shared/icons/HideSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveSvg */ \"./src/shared/icons/SaveSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsSvg */ \"./src/shared/icons/CommentsSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareSvg */ \"./src/shared/icons/ShareSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ReportSvg */ \"./src/shared/icons/ReportSvg.jsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonSvg */ \"./src/shared/icons/AnonSvg.jsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.setTokenAC = exports.SET_TOKEN = exports.updateCommentAC = exports.UPDATE_COMMENT = exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\n// --------------------------    ME_REQUEST   ---------------------------------------//\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\n// --------------------------    ME_REQUEST_SUCCESS   ---------------------------------------//\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\n// --------------------------    ME_REQUEST_ERROR   ---------------------------------------//\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\n// --------------------------    ME_REQUEST_THUNK   ---------------------------------------//\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.meRequest)());\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/api/v1/me.json', {\r\n            headers: { Authorization: \"bearer \".concat(getState().token) }\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            dispatch((0, exports.meRequestSuccess)({ iconImg: userData.icon_img, name: userData.name }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.meRequestError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n// --------------------------    UPDATE_COMMENT   ---------------------------------------//\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateCommentAC = function (payload) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    payload: payload,\r\n}); };\r\nexports.updateCommentAC = updateCommentAC;\r\n// --------------------------    SET_TOKEN   ---------------------------------------//\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setTokenAC = function (payload) { return ({\r\n    type: exports.SET_TOKEN,\r\n    payload: payload,\r\n}); };\r\nexports.setTokenAC = setTokenAC;\r\n// --------------------------    SAVE_TOKEN   ---------------------------------------//\r\nvar saveToken = function () {\r\n    return function (dispatch, getState) {\r\n        var token = window.__token__;\r\n        if (token) {\r\n            console.log('token from SAVE_TOKEN from actions');\r\n            dispatch((0, exports.setTokenAC)(token));\r\n        }\r\n    };\r\n};\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

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

/***/ "./src/store/posts/actions.ts":
/*!************************************!*\
  !*** ./src/store/posts/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setPostsErrorAC = exports.SET_POSTS_ERROR = exports.setPostsAfterAC = exports.SET_POSTS_AFTER = exports.setPost = exports.setPostsAC = exports.SET_POSTS = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\n// --------------------------    SET_POSTS   ---------------------------------------//\r\nexports.SET_POSTS = 'SET_POSTS';\r\nvar setPostsAC = function (posts) { return ({\r\n    type: exports.SET_POSTS,\r\n    payload: posts\r\n}); };\r\nexports.setPostsAC = setPostsAC;\r\nvar setPost = function (nextAfter) {\r\n    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var token, prevPosts, _a, children, after, bestPostArr, error_1;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    token = getState().token;\r\n                    prevPosts = getState().posts.posts;\r\n                    if (!(token && token.length > 0 || token !== undefined)) return [3 /*break*/, 4];\r\n                    _b.label = 1;\r\n                case 1:\r\n                    _b.trys.push([1, 3, , 4]);\r\n                    return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n                            headers: { Authorization: \"bearer \".concat(token) },\r\n                            params: { limit: 10, after: nextAfter }\r\n                        })];\r\n                case 2:\r\n                    _a = (_b.sent()).data.data, children = _a.children, after = _a.after;\r\n                    bestPostArr = children.map(function (data) { return ({\r\n                        id: data.data.id,\r\n                        subreddit: data.data.subreddit,\r\n                        title: data.data.title,\r\n                        author: data.data.author,\r\n                        created: data.data.created_utc * 1000,\r\n                        banner_img: data.data.sr_detail.banner_img,\r\n                        icon_img: data.data.sr_detail.icon_img,\r\n                        ups: data.data.ups,\r\n                        url: data.data.url,\r\n                    }); });\r\n                    dispatch((0, exports.setPostsErrorAC)(''));\r\n                    dispatch((0, exports.setPostsAC)(prevPosts.concat.apply(prevPosts, bestPostArr)));\r\n                    dispatch((0, exports.setPostsAfterAC)(after));\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    error_1 = _b.sent();\r\n                    dispatch((0, exports.setPostsErrorAC)(error_1.message));\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.setPost = setPost;\r\n// --------------    SET_POSTS_AFTER attribute that helps observe end of listing    ---------//\r\nexports.SET_POSTS_AFTER = 'SET_POSTS_AFTER';\r\nvar setPostsAfterAC = function (after) { return ({\r\n    type: exports.SET_POSTS_AFTER,\r\n    payload: after\r\n}); };\r\nexports.setPostsAfterAC = setPostsAfterAC;\r\n// --------------------------    SET_POSTS_ERROR   ---------------------------------------//\r\nexports.SET_POSTS_ERROR = 'SET_POSTS_ERROR';\r\nvar setPostsErrorAC = function (error) { return ({\r\n    type: exports.SET_POSTS_ERROR,\r\n    payload: error\r\n}); };\r\nexports.setPostsErrorAC = setPostsErrorAC;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/actions.ts?");

/***/ }),

/***/ "./src/store/posts/reduser.ts":
/*!************************************!*\
  !*** ./src/store/posts/reduser.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = void 0;\r\nvar reduser_1 = __webpack_require__(/*! ../reduser */ \"./src/store/reduser.ts\");\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/posts/actions.ts\");\r\nvar postsReducer = function (state, action) {\r\n    if (state === void 0) { state = reduser_1.initialState.posts; }\r\n    switch (action.type) {\r\n        case actions_1.SET_POSTS:\r\n            return __assign(__assign({}, state), { posts: action.payload });\r\n        case actions_1.SET_POSTS_AFTER:\r\n            return __assign(__assign({}, state), { after: action.payload });\r\n        case actions_1.SET_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { postsError: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/reduser.ts?");

/***/ }),

/***/ "./src/store/reduser.ts":
/*!******************************!*\
  !*** ./src/store/reduser.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReduser = exports.initialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reduser_1 = __webpack_require__(/*! ./me/reduser */ \"./src/store/me/reduser.ts\");\r\nvar reduser_2 = __webpack_require__(/*! ./posts/reduser */ \"./src/store/posts/reduser.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./posts/actions */ \"./src/store/posts/actions.ts\");\r\nexports.initialState = {\r\n    commentText: 'hello SkillBox!',\r\n    token: '',\r\n    me: {\r\n        isLoading: false,\r\n        error: '',\r\n        data: {}\r\n    },\r\n    posts: {\r\n        posts: [],\r\n        after: '',\r\n        postsError: '',\r\n    }\r\n};\r\nvar rootReduser = function (state, action) {\r\n    if (state === void 0) { state = exports.initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.payload });\r\n        case actions_1.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.payload });\r\n        case actions_2.SET_POSTS:\r\n        case actions_2.SET_POSTS_AFTER:\r\n        case actions_2.SET_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { posts: (0, reduser_2.postsReducer)(state.posts, action) });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reduser_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReduser = rootReduser;\r\n\n\n//# sourceURL=webpack:///./src/store/reduser.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value(), _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/dateTransformator.ts":
/*!*******************************************!*\
  !*** ./src/utils/js/dateTransformator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.utcToLeftTime = void 0;\r\nvar utcToLeftTime = function (millSec) {\r\n    var currentDate = new Date();\r\n    var date = new Date(millSec);\r\n    // Calculate the time difference in milliseconds\r\n    var timeDifference = currentDate.getTime() - date.getTime();\r\n    // Create a new Date object representing the time difference\r\n    var timeDifferenceDate = new Date(timeDifference);\r\n    var hours = timeDifferenceDate.getHours().toString().padStart(2, '0');\r\n    var minutes = timeDifferenceDate.getMinutes().toString().padStart(2, '0');\r\n    // const seconds = timeDifferenceDate.getSeconds().toString().padStart(2, '0');\r\n    var formattedTime = \"\".concat(hours, \":\").concat(minutes); //      11:04  (:03)\r\n    return formattedTime;\r\n};\r\nexports.utcToLeftTime = utcToLeftTime;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/dateTransformator.ts?");

/***/ }),

/***/ "./src/utils/js/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/js/generateRandomIndex.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, assoc_1.assoc)('id', exports.generateRandomString);\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', exports.generateRandomString)(obj); };\r\nexports.generateId = generateId;\r\n/*const initialCardArr = [\r\n        {text: <Card/>},\r\n    ].map(item => ({...generateId(item)})) */\r\n\n\n//# sourceURL=webpack:///./src/utils/js/generateRandomIndex.ts?");

/***/ }),

/***/ "./src/utils/js/noop.ts":
/*!******************************!*\
  !*** ./src/utils/js/noop.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NOOP = void 0;\r\nvar NOOP = function () { };\r\nexports.NOOP = NOOP;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/noop.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });