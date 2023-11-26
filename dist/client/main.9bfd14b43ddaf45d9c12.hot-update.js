webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ./shared/Text */ \"./src/shared/Text/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postContext_1 = __webpack_require__(/*! ./shared/context/postContext */ \"./src/shared/context/postContext.tsx\");\r\nvar formContext_1 = __webpack_require__(/*! ./shared/context/formContext */ \"./src/shared/context/formContext.tsx\");\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    /*const onDeletePost = (id: string) => {\r\n        console.log(id)\r\n        // setCardArr(cardArr.filter(card => card.id !== id))\r\n    }\r\n    const handleAddItem = () => {\r\n        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))\r\n    }*/\r\n    var FormContextProvider = formContext_1.formContext.Provider;\r\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postContext_1.PostContextProvider, null,\r\n                react_1.default.createElement(FormContextProvider, { value: {} },\r\n                    react_1.default.createElement(Layout_1.Layout, null,\r\n                        react_1.default.createElement(Header_1.Header, null),\r\n                        react_1.default.createElement(Content_1.Content, null,\r\n                            react_1.default.createElement(\"br\", null),\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 28, color: Text_1.EColors.orange }, \" Label1\"),\r\n                            react_1.default.createElement(Text_1.Text, { size: 20 }, \" Label2\"),\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16 }, \" Label3\"))))))));\r\n}\r\n/*    const initialCardArr = [\r\n        {text: <Card/>},\r\n    ].map(item => ({...generateId(item)}))\r\n\r\n    const cardArrWithProps = initialCardArr.map(li => ({\r\n        As: 'li' as const,\r\n        text: <Card onDeletePost={onDeletePost} postId={li.id}/>,\r\n        className: cardStyles.card,\r\n        id: li.id\r\n    }))\r\n\r\n    const [cardArr, setCardArr] = React.useState(cardArrWithProps)\r\n    */\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/context/formContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/formContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.formContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nexports.formContext = react_1.default.createContext({});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/formContext.tsx?");

/***/ })

})