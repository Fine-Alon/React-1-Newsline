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

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.setTokenAC = exports.SET_TOKEN = exports.updateCommentAC = exports.UPDATE_COMMENT = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\n// --------------------------    ME_REQUEST   ---------------------------------------//\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\n// --------------------------    ME_REQUEST_SUCCESS   ---------------------------------------//\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\n// --------------------------    ME_REQUEST_ERROR   ---------------------------------------//\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\n// --------------------------    UPDATE_COMMENT   ---------------------------------------//\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateCommentAC = function (payload) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    payload: payload,\r\n}); };\r\nexports.updateCommentAC = updateCommentAC;\r\n// --------------------------    SET_TOKEN   ---------------------------------------//\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setTokenAC = function (payload) { return ({\r\n    type: exports.SET_TOKEN,\r\n    payload: payload,\r\n}); };\r\nexports.setTokenAC = setTokenAC;\r\n// --------------------------    ME_REQUEST_ASYNC   ---------------------------------------//\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.meRequest)());\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/api/v1/me.json', {\r\n            headers: { Authorization: \"bearer \".concat(getState().token) }\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            dispatch((0, exports.meRequestSuccess)({ iconImg: userData.icon_img, name: userData.name }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.meRequestError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ })

})