import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards} from "./notes_boards_logic";
export {callActions, updateUi, getInputData};

const boardsContainer = document.querySelector(".boards-container");

function callActions() {
    /*const noteCreationBtn = document.querySelector('.note-creation');*/
    const boardCreationBtn = document.querySelector('.board-creation');

    boardsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('note-creation')) {
            alert("Add some information to your new note");
            let dataId = e.target.parentElement.getAttribute("data-id");
            let boardIndex = findIndexedData.findBoard(dataId);
            changeData.addNote(boardIndex);
            updateUi.showNote(dataId, boardIndex);
            /*
            let boardIndex = findIndexedData.findBoard(boardId);
            console.log(boardIndex);
            console.log((allBoards[boardIndex].notesList));
            console.log((allBoards[boardIndex].notesList).slice(-1)); */
        }
    });

    boardCreationBtn.addEventListener("click", (e) => {
        alert("Add some information to your new board");
        changeData.addBoard();
        updateUi.showBoard();
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
        let currentBoard = document.querySelector(`.board[data-id="${boardId}"]`);
        /*console.log(currentBoard);*/
        const noteData = findIndexedData.findNote(boardIndex)[0];
        const cardNoteContents = `<button class="card"><div class="card-title">${noteData.title}</div></button>`;
        currentBoard.insertAdjacentHTML("beforeend", cardNoteContents);
        const fullModalContents = ``;
        
    },
    removeNote() {

    },
    showBoard() {
        let newBoard = allBoards.slice(-1);
        const boardContents = `<div class="board" data-id="${newBoard[0].boardId}"><h2 class="board-title">${newBoard[0].title}</h2>
        <button class="note-creation">Add Note</button></div>`;
        boardsContainer.insertAdjacentHTML("beforeend", boardContents);
    },
    removeBoard() {

    },
}

let findIndexedData = {
    findNote(parentBoardIndex) {
        const lastParentItem = (allBoards[parentBoardIndex].notesList).slice(-1);
        return lastParentItem;
    },
    findBoard(iD) {
        let index = allBoards.findIndex(item => item.boardId == iD);
        return index;
    }
}