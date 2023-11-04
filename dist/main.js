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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes_boards_logic */ \"./src/notes_boards_logic.js\");\n/* harmony import */ var _note_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note_user_actions */ \"./src/note_user_actions.js\");\n\n\n\n/* Dumb test */\n(0,_notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.initiatefirstBoard)();\n(0,_note_user_actions__WEBPACK_IMPORTED_MODULE_1__.callActions)();\n\n/* Notes Test\nconst planningStep = noteFactory(\"Plan Général / Algorithme\", \"Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre\", \n\"Dès le début, et à réévaluer/modifier si besoin\",\"Haute\", \"Premières phrases écrites il y a une semaine\", allBoards[0]);\nallBoards[0].notesList.push(planningStep);\nconsole.log(allBoards[0].notesList.length)\n\nconst drawingStep = noteFactory(\"Brouillon\", \"Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire\", \n\"Aussi tôt que possible\",\"Haute\", \"Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires\", allBoards[0]);\nallBoards[0].notesList.push(drawingStep);\nconsole.log(allBoards[0].notesList.length);\n*/\n\n/* Modal Test */\n\nwindow.addEventListener('load', () => {\n    // close modals on background click\n    document.addEventListener('click', event => {\n        if (event.target.classList.contains('close')) {\n            _note_user_actions__WEBPACK_IMPORTED_MODULE_1__.updateUi.hideModal();\n        }\n    });\n});\n\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/note_user_actions.js":
/*!**********************************!*\
  !*** ./src/note_user_actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callActions: () => (/* binding */ callActions),\n/* harmony export */   getInputData: () => (/* binding */ getInputData),\n/* harmony export */   updateUi: () => (/* binding */ updateUi)\n/* harmony export */ });\n/* harmony import */ var _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes_boards_logic */ \"./src/notes_boards_logic.js\");\n\n\n\nconst boardsContainer = document.querySelector(\".boards-container\");\n\nfunction callActions() {\n    /*const noteCreationBtn = document.querySelector('.note-creation');*/\n    const boardCreationBtn = document.querySelector('.board-creation');\n\n    boardsContainer.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains('note-creation')) {\n            alert(\"Add some information to your new note\");\n            let boardId = e.target.parentElement.getAttribute(\"data-board-id\");\n            let boardIndex = _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexedData.boardIndex(boardId);\n            _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.changeData.addNote(boardIndex);\n            updateUi.showNote(boardId, boardIndex);\n            /*\n            let boardIndex = findIndexedData.boardIndex(boardId);\n            console.log(boardIndex);\n            console.log((allBoards[boardIndex].notesList));\n            console.log((allBoards[boardIndex].notesList).slice(-1)); */\n        }\n        else if (e.target.classList.contains('modal')) {\n            let noteId = e.target.getAttribute(\"data-note-id\");\n            /*console.log(id);*/\n            updateUi.showModal(noteId);\n            /*console.log(\"modal\");\n            console.log(e.target);\n            console.log(e.target.id);*/\n        }\n        else if (e.target.parentElement.classList.contains('modal')) {\n            let noteId = e.target.parentElement.getAttribute(\"data-note-id\");\n            /*console.log(id);*/\n            updateUi.showModal(noteId);\n            /*console.log(\"modal\");\n            console.log(e.target.parentElement);\n            console.log(e.target.parentElement.id); */\n        }\n        else if (e.target.classList.contains('delete')) {\n            console.log (e.target);\n            console.log(e.target.parentElement);\n            let noteId = e.target.parentElement.getAttribute(\"data-note-id\");\n            let parentId = e.target.parentElement.getAttribute(\"data-parent-id\");\n            updateUi.removeNote(parentId, noteId);\n            _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.changeData.deleteNote(parentId, noteId);\n        }\n    });\n\n    boardCreationBtn.addEventListener(\"click\", (e) => {\n        alert(\"Add some information to your new board\");\n        _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.changeData.addBoard();\n        updateUi.showBoard();\n    });\n\n    /*deleteBtn.addEventListener('click', (e) =>{\n        console.log(e.target.parentElement)\n    });*/\n}\n\nlet getInputData = {\n    noteCreation() {\n        let title = prompt(\"Title:\");\n        let description = prompt(\"Description:\");\n        let dueDate = \"ASAP\";\n        let priority = prompt(\"How important is it ?\");\n        let notes = prompt(\"Additionnal remarks:\");\n        return {title, description, dueDate, priority, notes};\n    },\n    boardCreation() {\n        let title = prompt(\"Title:\");\n        return {title};\n    },\n}\n\nlet updateUi = {\n    showNote(boardId, boardIndex) {\n        let currentBoard = document.querySelector(`.board[data-board-id=\"${boardId}\"]`);\n        /*console.log(currentBoard);*/\n        const noteData = _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexedData.newNote(boardIndex)[0];\n\n        const cardMinContents = `<button class=\"card modal\" data-note-id=\"${noteData.noteId}\"><div class=\"card-title\">${noteData.title}</div>\n        <p class=\"due-date\">${noteData.dueDate}</p></button>`;\n        currentBoard.insertAdjacentHTML(\"beforeend\", cardMinContents);\n        \n        const modalStart = `<div id=\"${noteData.noteId}\" class=\"note-modal\"> \n        <div class=\"note-modal-body\" data-note-id=\"${noteData.noteId}\" data-parent-id=\"${boardId}\">`;\n        const noteModalTitle = `<h1>${noteData.title}</h1>`;\n        const modalOptions = `<button class=\"delete\">Delete Note</button>`;\n        const noteModalData = \n            `<p class=\"due-date\">${noteData.dueDate}</p>\n            <p class=\"priority\">${noteData.priority}</p>\n            <p class=\"description\">${noteData.description}</p>\n            <p class=\"notes\">${noteData.notes}</p>`;\n        const closeBtn =`<button class=\"close\">Close</button>`;\n        const modalEnd =`</div></div>`;\n        const fullModalContents = modalStart+noteModalTitle+modalOptions+noteModalData+closeBtn+modalEnd;\n        currentBoard.insertAdjacentHTML(\"beforeend\", fullModalContents);\n    },\n    removeNote(parentId, noteId) {\n        let noteCard = document.querySelector(`[data-note-id=\"${noteId}\"]`);\n        let noteModal = document.getElementById(noteId);\n\n        /*\n        console.log(noteCard);\n        console.log(noteModal); */\n        noteCard.remove();\n        noteModal.remove();\n\n    },\n    showBoard() {\n        let newBoard = _notes_boards_logic__WEBPACK_IMPORTED_MODULE_0__.allBoards.slice(-1);\n        const boardContents = `<div class=\"board\" data-board-id=\"${newBoard[0].boardId}\"><h2 class=\"board-title\">${newBoard[0].title}</h2>\n        <button class=\"note-creation\">Add Note</button></div>`;\n        boardsContainer.insertAdjacentHTML(\"beforeend\", boardContents);\n    },\n    removeBoard() {\n\n    },\n    showModal(noteId) {\n        document.getElementById(noteId).classList.add('open');\n        document.body.classList.add('note-modal-open');\n    },\n    hideModal() {\n        document.querySelector('.note-modal.open').classList.remove('open');\n        document.body.classList.remove('note-modal-open');\n    },\n}\n\n\n\n\n\n//# sourceURL=webpack://todo_list/./src/note_user_actions.js?");

/***/ }),

/***/ "./src/notes_boards_logic.js":
/*!***********************************!*\
  !*** ./src/notes_boards_logic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allBoards: () => (/* binding */ allBoards),\n/* harmony export */   boardBuilder: () => (/* binding */ boardBuilder),\n/* harmony export */   changeData: () => (/* binding */ changeData),\n/* harmony export */   findIndexedData: () => (/* binding */ findIndexedData),\n/* harmony export */   initiatefirstBoard: () => (/* binding */ initiatefirstBoard),\n/* harmony export */   noteBuilder: () => (/* binding */ noteBuilder)\n/* harmony export */ });\n/* harmony import */ var _note_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_user_actions */ \"./src/note_user_actions.js\");\n\n\n\n\nlet allBoards = [];\n/* min ID values for boards & notes, incremented when they are created\nto prevent identical IDs if user delete and then add new items */\nlet minNoteId = 0;\nlet minBoardId = 0;\n\nfunction boardBuilder (title, ...notes) {\n    let notesList = [...notes];\n    const boardId =  allBoards.length>=minBoardId ? allBoards.length : minBoardId;\n    return {title, notesList, boardId};\n};\n\nfunction noteBuilder (title, description, dueDate, priority, notes, parentBoard) {\n    let noteTitle = `Title: ${title}`;\n    let noteDesc = `Description: ${description}`;\n    const noteId = parentBoard.notesList.length>=minNoteId ? parentBoard.notesList.length : minNoteId;\n\n    return {noteTitle, noteDesc, title, description, dueDate, priority, notes, parentBoard, noteId};\n};\n\nfunction initiatefirstBoard() {\n    let firstBoard = boardBuilder(\"ToDoList\");\n    allBoards.push(firstBoard);\n    console.log(allBoards[0]);\n    _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.updateUi.showBoard();\n}\n\nlet changeData = {\n    addNote(parentId) {\n        const newNoteData = _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.getInputData.noteCreation();\n        const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes, allBoards[parentId]);\n        allBoards[parentId].notesList.push(newNote);\n        minNoteId = ++minNoteId;\n        console.log(allBoards);\n    },\n    deleteNote(parentId, noteId) {\n        const noteIndex = findIndexedData.noteIndex(parentId, noteId);\n        allBoards[parentId].notesList.splice(noteIndex, 1);\n        console.log(allBoards);\n    },\n    addBoard() {\n        const newBoardData = _note_user_actions__WEBPACK_IMPORTED_MODULE_0__.getInputData.boardCreation();\n        const newBoard = boardBuilder(newBoardData.title);\n        allBoards.push(newBoard);\n        minBoardId = ++minBoardId;\n        console.log(allBoards);\n    },\n    removeBoard() {\n\n    },\n};\n\nlet findIndexedData = {\n    newNote(parentBoardIndex) {\n        const lastParentItem = (allBoards[parentBoardIndex].notesList).slice(-1);\n        return lastParentItem;\n    },\n    noteIndex(idParent, idNote) {\n        let parentIndex = this.boardIndex(idParent);\n        let index = allBoards[parentIndex].notesList.findIndex(item => item.noteId == idNote);\n        return index;\n    },\n    boardIndex(id) {\n        let index = allBoards.findIndex(item => item.boardId == id);\n        return index;\n    }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/notes_boards_logic.js?");

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