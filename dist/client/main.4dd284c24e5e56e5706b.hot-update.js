webpackHotUpdate("main",{

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\r\nvar noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\r\nfunction Dropdown(props) {\r\n    var button = props.button, btnStyles = props.btnStyles, children = props.children, _a = props.onOpen, onOpen = _a === void 0 ? noop_1.NOOP : _a, _b = props.onClose, onClose = _b === void 0 ? noop_1.NOOP : _b, isOpen = props.isOpen;\r\n    var btnRef = (0, react_1.useRef)(null);\r\n    var listRef = (0, react_1.useRef)(null);\r\n    var _c = (0, react_1.useState)(isOpen), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];\r\n    var _d = (0, react_1.useState)(null), coords = _d[0], setCoords = _d[1];\r\n    var getCoords = function () {\r\n        var _a;\r\n        var box = (_a = btnRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\r\n        if (box) {\r\n            return {\r\n                left: box.left,\r\n                top: box.top + box.height,\r\n                width: box.width,\r\n            };\r\n        }\r\n        return null;\r\n    };\r\n    (0, react_1.useEffect)(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    (0, react_1.useEffect)(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!isDropdownOpen)\r\n            return;\r\n        var coords = getCoords();\r\n        setCoords(coords);\r\n    }, [isDropdownOpen]);\r\n    var handleClose = function (event) {\r\n        var _a;\r\n        if (event.target instanceof Node && !((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n            setIsDropdownOpen(false);\r\n        }\r\n    };\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.body.querySelector('#dropdown_root');\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    return react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { ref: btnRef, className: dropdown_css_1.default.container },\r\n            react_1.default.createElement(\"div\", { className: btnStyles, onClick: handleOpen }, button),\r\n            isDropdownOpen && coords && (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, onClick: handleClose },\r\n                react_1.default.createElement(\"div\", { ref: listRef, className: dropdown_css_1.default.list, style: {\r\n                        position: 'absolute',\r\n                        top: \"\".concat(coords.top, \"px\"),\r\n                        left: \"\".concat(coords.left, \"px\"),\r\n                        minWidth: \"\".concat(Math.max(130, coords.width), \"px\"),\r\n                        minHeight: \"\".concat(Math.max(150, coords.width), \"px\"),\r\n                    }, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ })

})