webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar EName;\r\n(function (EName) {\r\n    EName[\"HideSvg\"] = \"HideSvg\";\r\n    EName[\"CommentsSvg\"] = \"CommentsSvg\";\r\n    EName[\"MenuSvg\"] = \"MenuSvg\";\r\n    EName[\"ReportSvg\"] = \"ReportSvg\";\r\n    EName[\"SaveSvg\"] = \"SaveSvg\";\r\n    EName[\"ShareSvg\"] = \"ShareSvg\";\r\n})(EName || (EName = {}));\r\nvar iconComponent = {\r\n    HideSvg: react_1.default.createElement(icons_1.HideSvg, null),\r\n    CommentsSvg: react_1.default.createElement(icons_1.CommentsSvg, null),\r\n    MenuSvg: react_1.default.createElement(icons_1.MenuSvg, null),\r\n    ReportSvg: react_1.default.createElement(icons_1.ReportSvg, null),\r\n    SaveSvg: react_1.default.createElement(icons_1.SaveSvg, null),\r\n    ShareSvg: react_1.default.createElement(icons_1.ShareSvg, null),\r\n};\r\nvar Icon = function (_a) {\r\n    var name = _a.name, size = _a.size;\r\n    if (!(name in iconComponent)) {\r\n        console.error('there is not such svgComponent');\r\n        return null;\r\n    }\r\n    var svgElement = react_1.default.cloneElement(iconComponent[name], {\r\n        style: __assign(__assign({}, icon_css_1.default), { width: size, height: size })\r\n    });\r\n    return react_1.default.createElement(react_1.default.Fragment, null, svgElement);\r\n};\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ })

})