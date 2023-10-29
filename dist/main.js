/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board_factory.js":
/*!******************************!*\
  !*** ./src/board_factory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ boardBuilder)\n/* harmony export */ });\nfunction boardBuilder (title, ...notes) {\n    const projectBoard = [...notes];\n    return {title, projectBoard};\n};\n\n//# sourceURL=webpack://todo_list/./src/board_factory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _note_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_factory.js */ \"./src/note_factory.js\");\n/* harmony import */ var _board_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board_factory.js */ \"./src/board_factory.js\");\n\n\n/*import userActions from \"./note_user_actions.js\";*/\n\nconst planningStep = (0,_note_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Plan Général / Algorithme\", \"Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre\", \n\"Dès le début, et à réévaluer/modifier si besoin\",\"Haute\", \"Premières phrases écrites il y a une semaine\");\n\nconst drawingStep = (0,_note_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Brouillon\", \"Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire\", \n\"Aussi tôt que possible\",\"Haute\", \"Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires\");\nconsole.log(drawingStep);\nconsole.log(drawingStep.noteTitle);\nconsole.log(drawingStep.noteDesc);\n\n\nconst firstBoard = (0,_board_factory_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"ToDoList\", planningStep, drawingStep);\n/*console.log(firstBoard);\nconsole.log(firstBoard.title)\nconsole.log(firstBoard.projectBoard);\nconsole.log(firstBoard.projectBoard[0]);*/\n\nfunction noteCreation() {\n    alert(\"Add some information to your new note\");\n    let title = prompt(\"Title:\");\n    let description = prompt(\"Description:\");\n    let priority = prompt(\"How important is it ?\");\n    let notes = prompt(\"Additionnal remarks:\");\n    const newNote = (0,_note_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, priority, notes);\n    firstBoard.projectBoard.push(newNote);\n    console.log(firstBoard);\n};\nnoteCreation();\n\n/*\nfunction storeBoards() {\n    let allBoard = [];\n};\n*/\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/note_factory.js":
/*!*****************************!*\
  !*** ./src/note_factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ noteBuilder)\n/* harmony export */ });\n\n\nfunction noteBuilder (title, description, dueDate, priority, notes) {\n    const noteTitle = `Title: ${title}`;\n    const noteDesc = `Description: ${description}`;\n    return {noteTitle, noteDesc, dueDate, priority, notes};\n}\n\n//# sourceURL=webpack://todo_list/./src/note_factory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;