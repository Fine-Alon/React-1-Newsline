webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/card.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CardsList/Card/card.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"button {\\r\\n    background: transparent;\\r\\n    border: 0;\\r\\n    padding: 0;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.card__card--7bN6- {\\r\\n    position: relative;\\r\\n    background-color: var(--white);\\r\\n    border-radius: 7px;\\r\\n    padding: 20px 20px 10px;\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n}\\r\\n\\r\\n.card__card--7bN6- > *,\\r\\n.card__textContent--3Ki_7 > * {\\r\\n    flex: 1 1 100%;\\r\\n}\\r\\n\\r\\n.card__card--7bN6- > * + * {\\r\\n    padding: 13px 0 0;\\r\\n}\\r\\n\\r\\n.card__card--7bN6-:hover h2 a,\\r\\n.card__card--7bN6-:focus-within h2 a {\\r\\n    color: var(--orange);\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__card--7bN6- {\\r\\n        background-color: transparent;\\r\\n        flex-flow: row nowrap;\\r\\n        max-height: 107px;\\r\\n        padding: 0 40px;\\r\\n        margin-bottom: 40px;\\r\\n    }\\r\\n\\r\\n    .card__card--7bN6- > * {\\r\\n        flex: 0 0;\\r\\n    }\\r\\n\\r\\n    .card__card--7bN6- > * + * {\\r\\n        padding: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1540px) {\\r\\n    .card__card--7bN6- {\\r\\n        padding: 20px 60px;\\r\\n        max-height: 147px;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    .card__card--7bN6-:hover,\\r\\n    .card__card--7bN6-:focus-within {\\r\\n        outline: 2px solid var(--grayF4);\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__title--2eC9p {\\r\\n    font-size: 16px;\\r\\n    line-height: 19px;\\r\\n    font-weight: normal;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.card__metaData--2-4Ht {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    align-items: center;\\r\\n    font-size: 10px;\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n@media (min-width: 1024px) {\\r\\n    .card__metaData--2-4Ht {\\r\\n        flex-flow: row-reverse nowrap;\\r\\n        justify-content: left;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__postLink--1dr-s {\\r\\n    overflow: hidden;\\r\\n    -webkit-line-clamp: 2;\\r\\n    -webkit-box-orient: vertical;\\r\\n    display: -webkit-box;\\r\\n}\\r\\n\\r\\n.card__postLink--1dr-s::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.card__textContent--3Ki_7 {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    padding: 22px 20px 13px;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__textContent--3Ki_7 {\\r\\n        flex-basis: 540px;\\r\\n        order: 1;\\r\\n        margin: 0 0 0 38px;\\r\\n        flex-flow: column-reverse nowrap;\\r\\n        justify-content: center;\\r\\n    }\\r\\n\\r\\n    .card__textContent--3Ki_7 > * {\\r\\n        flex: 0 0;\\r\\n    }\\r\\n\\r\\n    .card__title--2eC9p {\\r\\n        padding: 0 0 10px 0;\\r\\n        font-size: 20px;\\r\\n        line-height: 23px;\\r\\n    }\\r\\n\\r\\n    .card__postLink--1dr-s {\\r\\n        -webkit-line-clamp: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__userLink--1NVQG {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    align-items: center;\\r\\n    height: 20px;\\r\\n    padding: 0 6px 0 0;\\r\\n}\\r\\n\\r\\n.card__avatar--3eg0i {\\r\\n    border-radius: 20px;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    margin: 0 7px 0 0;\\r\\n}\\r\\n\\r\\n.card__username--1I_6u {\\r\\n    color: var(--orange);\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n    margin-right: 4px;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__userLink--1NVQG {\\r\\n        padding: 0 0 0 5px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1540px) {\\r\\n    .card__userLink--1NVQG:hover a {\\r\\n        text-decoration: underline;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__preview--M1PGJ {\\r\\n    max-height: 178px;\\r\\n    margin: 0 -20px;\\r\\n}\\r\\n\\r\\n.card__previewImg--37Jut {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n    object-position: center top;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__preview--M1PGJ {\\r\\n        flex-basis: 190px;\\r\\n        order: 0;\\r\\n        margin: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__menu--2VNdY {\\r\\n    position: absolute;\\r\\n    order: 2;\\r\\n    z-index: 20;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    flex: 0 0;\\r\\n    top: 25px;\\r\\n    right: 25px;\\r\\n    margin: 0 0 0 auto;\\r\\n}\\r\\n\\r\\n.card__menuButton--2icIq {\\r\\n    position: relative;\\r\\n    width: 31px;\\r\\n    height: 31px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    transform: rotate(90deg);\\r\\n    border-radius: 31px;\\r\\n}\\r\\n\\r\\n.card__menuSvg--cFsR1 {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo div svg {\\r\\n    position: absolute;\\r\\n    left: 16px;\\r\\n}\\r\\n\\r\\n.card__menuButton--2icIq:active {\\r\\n    background-color: rgba(51, 51, 51, 0.1);\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo {\\r\\n    position: absolute;\\r\\n    z-index: 2;\\r\\n    right: 0;\\r\\n    top: 23px;\\r\\n    box-shadow: 1px 5px 6px 2px rgba(0, 0, 0, 0.63);\\r\\n    border-radius: 3px;\\r\\n    background-color: var(--white);\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo div {\\r\\n    position: relative;\\r\\n    padding: 11px 20px 11px 40px;\\r\\n    border-bottom: 1px solid var(--greyEC);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo div:last-child {\\r\\n    padding: 0;\\r\\n    border-bottom: none;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo div:hover {\\r\\n    color: #CC6633;\\r\\n    border-bottom-color: #CC6633;\\r\\n}\\r\\n\\r\\n.card__dropdown--Loivo div:hover path {\\r\\n    fill: #CC6633;\\r\\n}\\r\\n\\r\\n.card__closeButton--2Y2Nh {\\r\\n    background-color: var(--greyD9);\\r\\n    padding: 12px 23px;\\r\\n    border-radius: 0 0 3px 3px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.card__mobileHidden--3548R {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.card__desktopHidden--2ehWz {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__menu--2VNdY {\\r\\n        position: relative;\\r\\n        z-index: 20;\\r\\n        order: 2;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        flex: 0 0;\\r\\n        top: unset;\\r\\n        right: unset;\\r\\n        margin: 0 0 0 auto;\\r\\n    }\\r\\n\\r\\n    .card__mobileHidden--3548R {\\r\\n        display: flex;\\r\\n    }\\r\\n\\r\\n    .card__desktopHidden--2ehWz {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .card__dropdown--Loivo div:last-child {\\r\\n        padding: 11px 20px 11px 40px;\\r\\n        border-bottom: 1px solid var(--greyEC);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    .card__menuButton--2icIq {\\r\\n        align-self: center;\\r\\n        transform: unset;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1540px) {\\r\\n    .card__menuButton--2icIq:hover {\\r\\n        background-color: rgba(51, 51, 51, 0.1);\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__controls--1mm-w {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.card__actions--1cmic {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n}\\r\\n\\r\\n.card__actions--1cmic > * + * {\\r\\n    margin: 0 0 0 13px;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__controls--1mm-w {\\r\\n        order: 3;\\r\\n        flex: 0 0;\\r\\n        margin: 0 0 0 24px;\\r\\n    }\\r\\n\\r\\n    .card__actions--1cmic {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__karmaCounter--2eqMa > * + * {\\r\\n    padding: 0 0 0 4px;\\r\\n}\\r\\n\\r\\n.card__karmaValue--1HJaY {\\r\\n    color: var(--greyC4);\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n}\\r\\n\\r\\nsvg.card__down--KLMht {\\r\\n    transform: rotate(180deg);\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__karmaCounter--2eqMa {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        flex-flow: column nowrap;\\r\\n    }\\r\\n\\r\\n    .card__karmaCounter--2eqMa > * + * {\\r\\n        padding: 7px 0 0;\\r\\n    }\\r\\n\\r\\n    .card__karmaValue--1HJaY {\\r\\n        font-size: 14px;\\r\\n        line-height: 16px;\\r\\n        color: var(--black);\\r\\n    }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1540px) {\\r\\n    .card__karmaCounter--2eqMa > button.card__up--K0BLJ:hover > svg > path {\\r\\n        fill: var(--green);\\r\\n    }\\r\\n\\r\\n    .card__karmaCounter--2eqMa > button.card__down--KLMht:hover > svg > path {\\r\\n        fill: var(--orange);\\r\\n    }\\r\\n\\r\\n    .card__textContent--3Ki_7 {\\r\\n        flex-basis: 672px;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n.card__commentsButton--1yRBb {\\r\\n    display: flex;\\r\\n    align-items: normal;\\r\\n}\\r\\n\\r\\n.card__commentsButton--1yRBb * {\\r\\n    color: var(--greyC4);\\r\\n}\\r\\n\\r\\n.card__commentsNumber--2xwYQ {\\r\\n    padding: 0 0 0 6px;\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .card__commentsButton--1yRBb {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\\r\\n.card__shareButton--24LVI {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.card__saveButton--2Cz7O {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.card__publishedLabel--3FDD2 {\\r\\n    margin-right: 5px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1024px) {\\r\\n\\r\\n    .card__publishedLabel--3FDD2 {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"title\": \"card__title--2eC9p\",\n\t\"metaData\": \"card__metaData--2-4Ht\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"userLink\": \"card__userLink--1NVQG\",\n\t\"avatar\": \"card__avatar--3eg0i\",\n\t\"username\": \"card__username--1I_6u\",\n\t\"preview\": \"card__preview--M1PGJ\",\n\t\"previewImg\": \"card__previewImg--37Jut\",\n\t\"menu\": \"card__menu--2VNdY\",\n\t\"menuButton\": \"card__menuButton--2icIq\",\n\t\"menuSvg\": \"card__menuSvg--cFsR1\",\n\t\"dropdown\": \"card__dropdown--Loivo\",\n\t\"closeButton\": \"card__closeButton--2Y2Nh\",\n\t\"mobileHidden\": \"card__mobileHidden--3548R\",\n\t\"desktopHidden\": \"card__desktopHidden--2ehWz\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"actions\": \"card__actions--1cmic\",\n\t\"karmaCounter\": \"card__karmaCounter--2eqMa\",\n\t\"karmaValue\": \"card__karmaValue--1HJaY\",\n\t\"down\": \"card__down--KLMht\",\n\t\"up\": \"card__up--K0BLJ\",\n\t\"commentsButton\": \"card__commentsButton--1yRBb\",\n\t\"commentsNumber\": \"card__commentsNumber--2xwYQ\",\n\t\"shareButton\": \"card__shareButton--24LVI\",\n\t\"saveButton\": \"card__saveButton--2Cz7O\",\n\t\"publishedLabel\": \"card__publishedLabel--3FDD2\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ../card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\r\nvar MenuLinks_1 = __webpack_require__(/*! ./MenuLinks */ \"./src/shared/CardsList/Card/Menu/MenuLinks/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Menu = function (_a) {\r\n    var postId = _a.postId, onDeletePost = _a.onDeletePost;\r\n    var menuListDesk = [\r\n        { text: react_1.default.createElement(MenuLinks_1.Comments, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Share, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Hide, null), onClick: onDeletePost },\r\n        { text: react_1.default.createElement(MenuLinks_1.Save, null), className: card_css_1.default.mobileHidden },\r\n        { text: react_1.default.createElement(MenuLinks_1.Report, null), onClick: onDeletePost },\r\n        { text: react_1.default.createElement(MenuLinks_1.Close, { styles: card_css_1.default.closeButton }), className: card_css_1.default.desktopHidden },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var _b = react_1.default.useState(true), isDropdownClose = _b[0], setIsDropdownClose = _b[1];\r\n    return react_1.default.createElement(\"div\", { className: card_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { btnStyles: card_css_1.default.menuSvg, button: react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\r\n                react_1.default.createElement(icons_1.MenuSvg, null)) }, isDropdownClose &&\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.dropdown }, react_1.default.createElement(GenericList_1.GenericList, { list: menuListDesk.map(function (item) { return (__assign(__assign({}, item), { postId: postId, onClick: function () { return item.onClick(postId); } })); }) }))));\r\n};\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ })

})