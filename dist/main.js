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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes_boards_logic */ \"./src/notes_boards_logic.js\");\n/* harmony import */ var _note_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note_user_actions */ \"./src/note_user_actions.js\");\n\n\n/*import userActions from \"./note_user_actions.js\";*/\n\n/* Dumb test */\n(0,_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.initiatefirstBoard)();\n(0,_note_user_actions__WEBPACK_IMPORTED_MODULE_1__.callActions)();\n\n\nconst planningStep = (0,_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.noteBuilder)(\"Plan Général / Algorithme\", \"Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre\", \n\"Dès le début, et à réévaluer/modifier si besoin\",\"Haute\", \"Premières phrases écrites il y a une semaine\", _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0]);\n_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0].notesList.push(planningStep);\nconsole.log(_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0].notesList.length)\n\nconst drawingStep = (0,_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.noteBuilder)(\"Brouillon\", \"Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire\", \n\"Aussi tôt que possible\",\"Haute\", \"Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires\", _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0]);\n_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0].notesList.push(drawingStep);\nconsole.log(_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards[0].notesList.length);\n\n\n/*\nfunction noteCreation() {\n    alert(\"Add some information to your new note\");\n    let title = prompt(\"Title:\");\n    let description = prompt(\"Description:\");\n    let dueDate = \"ASAP\";\n    let priority = prompt(\"How important is it ?\");\n    let notes = prompt(\"Additionnal remarks:\");\n    const newNote = noteFactory(title, description, dueDate, priority, notes, firstBoard);\n    firstBoard.notesList.push(newNote);\n    console.log(firstBoard);\n};\nnoteCreation();\nconsole.log(firstBoard.notesList.length);\nconsole.log(firstBoard);\nconsole.log(allBoards);\nconsole.log(allBoards.length);\n*/\n\n\n/*\nfunction storeBoards() {\n    let allBoard = [];\n};\n*/\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/note_user_actions.js":
/*!**********************************!*\
  !*** ./src/note_user_actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callActions: () => (/* binding */ callActions),\n/* harmony export */   getInputData: () => (/* binding */ getInputData),\n/* harmony export */   updateUi: () => (/* binding */ updateUi)\n/* harmony export */ });\n/* harmony import */ var _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes_boards_logic */ \"./src/notes_boards_logic.js\");\n\n\n\nfunction callActions() {\n    const noteCreationBtn = document.querySelector('.note-creation');\n    const boardCreationBtn = document.querySelector('.board-creation');\n\n    noteCreationBtn.addEventListener(\"click\", (e) => {\n        alert(\"Add some information to your new note\");\n        /*changeData.addNote();*/\n        let dataId = e.target.parentElement.getAttribute(\"data-id\");\n        updateUi.showNote(dataId);\n    });\n\n    boardCreationBtn.addEventListener(\"click\", (e) => {\n        alert(\"Add some information to your new board\");\n        _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.changeData.addBoard();\n        updateUi.showBoard();\n    });\n    \n}\n\nlet getInputData = {\n    noteCreation() {\n        let title = prompt(\"Title:\");\n        let description = prompt(\"Description:\");\n        let dueDate = \"ASAP\";\n        let priority = prompt(\"How important is it ?\");\n        let notes = prompt(\"Additionnal remarks:\");\n        return {title, description, dueDate, priority, notes};\n    },\n    boardCreation() {\n        let title = prompt(\"Title:\");\n        return {title};\n    },\n}\n\nlet updateUi = {\n    boardsContainer: document.querySelector(\".boards-container\"),\n    showNote(boardId) {\n        let currentBoard = document.querySelector(`.board[data-id=\"${boardId}\"]`);\n        console.log(currentBoard);\n        \n    },\n    removeNote() {\n\n    },\n    showBoard() {\n        let newBoard = _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards.slice(-1);\n        const boardContents = `<div class=\"board\" data-id=\"${newBoard[0].boardID}\"><h2 class=\"board-title\">${newBoard[0].title}</h2>\n        <button class=\"note-creation\">Add Note</button></div>`;\n        updateUi.boardsContainer.insertAdjacentHTML(\"beforeend\", boardContents);\n    },\n    removeBoard() {\n\n    },\n}\n\n//# sourceURL=webpack://todo_list/./src/note_user_actions.js?");

/***/ }),

/***/ "./src/notes_boards_logic.js":
/*!***********************************!*\
  !*** ./src/notes_boards_logic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allBoards: () => (/* binding */ allBoards),\n/* harmony export */   boardBuilder: () => (/* binding */ boardBuilder),\n/* harmony export */   changeData: () => (/* binding */ changeData),\n/* harmony export */   initiatefirstBoard: () => (/* binding */ initiatefirstBoard),\n/* harmony export */   noteBuilder: () => (/* binding */ noteBuilder)\n/* harmony export */ });\n/* harmony import */ var _note_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_user_actions */ \"./src/note_user_actions.js\");\n\n\n\n\nlet allBoards = [];\nlet minNoteId = 0;\nlet minBoardId = 0;\n\nfunction boardBuilder (title, ...notes) {\n    let notesList = [...notes];\n    const boardID =  allBoards.length>=minBoardId ? allBoards.length : minBoardId;\n    return {title, notesList, boardID};\n};\n\nfunction noteBuilder (title, description, dueDate, priority, notes, parentBoard) {\n    let noteTitle = `Title: ${title}`;\n    let noteDesc = `Description: ${description}`;\n    const noteId = parentBoard.notesList.length>=minNoteId ? parentBoard.notesList.length : minNoteId;\n\n    return {noteTitle, noteDesc, dueDate, priority, notes, parentBoard, noteId};\n};\n\nfunction initiatefirstBoard() {\n    let firstBoard = boardBuilder(\"ToDoList\");\n    allBoards.push(firstBoard);\n    console.log(allBoards[0]);\n    _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.updateUi.showBoard();\n}\n\nlet changeData = {\n    addNote() {\n        const newNoteData = _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.getInputData.noteCreation();\n        const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes, allBoards[0]);\n        allBoards[0].notesList.push(newNote);\n        minNoteId = ++minNoteId;\n        console.log(allBoards[0]);\n    },\n    deleteNote() {\n\n    },\n    addBoard() {\n        const newBoardData = _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.getInputData.boardCreation();\n        const newBoard = boardBuilder(newBoardData.title);\n        allBoards.push(newBoard);\n        minBoardId = ++minBoardId;\n        console.log(allBoards);\n    },\n    removeBoard() {\n\n    },\n};\n\n\n//# sourceURL=webpack://todo_list/./src/notes_boards_logic.js?");

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