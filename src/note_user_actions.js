import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards, findIndexedData} from "./notes_boards_logic";
export {callActions, updateUi, getInputData};

const boardsContainer = document.querySelector(".boards-container");

function callActions() {
    const boardCreationBtn = document.querySelector('.board-creation');
    boardCreationBtn.addEventListener("click", (e) => {
        alert("Add some information to your new board");
        changeData.addBoard();
        updateUi.showBoard();
        updateUi.showBoardList();
    });

    const boardDeletionBtn = document.querySelector('.board-deletion');
    boardDeletionBtn.addEventListener("click", (e) => {
        updateUi.showModal('board-deletion');
        updateUi.showBoardList();
    });

    updateUi.showBoardList();

/* Event delegation for dynamically created contents: header-specific events, then board-container events */

    const header = document.querySelector('.header');
    header.addEventListener("click", (e) => { 
        if (e.target.classList.contains('confirm-del')) {
            let selectElement = document.getElementById("board-select");
            let selectedId = selectElement.selectedOptions[0].getAttribute("data-board-id");
            updateUi.removeBoard(selectedId);
            changeData.removeBoard(selectedId);
            updateUi.showBoardList();
        }
    });

    boardsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('note-creation')) {
            alert("Add some information to your new note");
            let boardId = e.target.parentElement.getAttribute("data-board-id");
            let boardIndex = findIndexedData.boardIndex(boardId);
            changeData.addNote(boardIndex);
            updateUi.showNote(boardId, boardIndex);
        }
        else if (e.target.classList.contains('modal')) {

            if ((e.target.getAttribute("data-note-id")) != null || (e.target.parentElement.getAttribute("data-note-id")) != null) {
                let noteId = (e.target.getAttribute("data-note-id")) == null ? (e.target.parentElement.getAttribute("data-note-id")) 
                    : (e.target.getAttribute("data-note-id"));
                updateUi.showModal(noteId);
            }
        }
        else if (e.target.classList.contains('delete-note')) {
            let noteId = e.target.parentElement.getAttribute("data-note-id");
            let parentId = e.target.parentElement.getAttribute("data-parent-id");
            updateUi.removeNote(parentId, noteId);
            changeData.deleteNote(parentId, noteId);
        } 
    });

    window.addEventListener('load', () => {
        // close modals on close button (.close) or background click (parent div, .open)
        document.addEventListener('click', event => {
            if (event.target.classList.contains('close')||event.target.classList.contains('open')) {
                updateUi.hideModal();
            }
        });
    });
}

let getInputData = {
    noteCreation() {
        let title = prompt("Title:");
        let description = prompt("Description:");
        let dueDate = "ASAP";
        let priority = prompt("How important is it ?");
        let notes = prompt("Additionnal remarks:");
        return {title, description, dueDate, priority, notes};
    },
    boardCreation() {
        let title = prompt("Title:");
        return {title};
    },
}

let updateUi = {
    showNote(boardId, boardIndex) {
        let currentBoard = document.querySelector(`.board[data-board-id="${boardId}"]`);
        /*console.log(currentBoard);*/
        const noteData = findIndexedData.newNote(boardIndex)[0];

        const cardMinContents = `<button class="card modal" data-note-id="${noteData.noteId}">
        <h3 class="card-title modal">${noteData.title}</h3>
        <p class="due-date modal">${noteData.dueDate}</p></button>`;
        currentBoard.insertAdjacentHTML("beforeend", cardMinContents);
        
        const modalStart = `<div id="${noteData.noteId}" class="note-modal"> 
        <div class="note-modal-body" data-note-id="${noteData.noteId}" data-parent-id="${boardId}">`;
        const noteModalTitle = `<h1>${noteData.title}</h1>`;
        const modalOptions = `<button class="delete-note">Delete Note</button>`;
        const noteModalData = 
            `<p class="due-date">${noteData.dueDate}</p>
            <p class="priority">${noteData.priority}</p>
            <p class="description">${noteData.description}</p>
            <p class="notes">${noteData.notes}</p>`;
        const closeBtn =`<button class="close">Close</button>`;
        const modalEnd =`</div></div>`;
        const fullModalContents = modalStart+noteModalTitle+modalOptions+noteModalData+closeBtn+modalEnd;
        currentBoard.insertAdjacentHTML("beforeend", fullModalContents);
    },
    removeNote(parentId, noteId) {
        let noteCard = document.querySelector(`[data-note-id="${noteId}"]`);
        let noteModal = document.getElementById(noteId);
        noteCard.remove();
        noteModal.remove();

    },
    showBoard() {
        let newBoard = allBoards.slice(-1);
        const boardContents = `<div class="board" data-board-id="${newBoard[0].boardId}"><h2 class="board-title">${newBoard[0].title}</h2>
        <button class="note-creation">Add Note</button></div>`;
        boardsContainer.insertAdjacentHTML("beforeend", boardContents);
    },
    showBoardList() {
        let boardList = document.querySelector('.sel-board');
        boardList.innerHTML = "";
        allBoards.forEach(board => {
            let boardOption = `<option value="${board.title}" data-board-id="${board.boardId}"> ${board.title} </option>`;
            boardList.insertAdjacentHTML("beforeend", boardOption);
        });
    },
    removeBoard(boardId) {
        let board = document.querySelector(`div[data-board-id="${boardId}"]`);
        console.log(board);
        board.remove();
    },
    showModal(id) {
        document.getElementById(id).classList.add('open');
        document.body.classList.add('note-modal-open');
    },
    hideModal() {
        document.querySelector('.open').classList.remove('open');
        document.body.classList.remove('note-modal-open');
    },
}



