import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards} from "./notes_boards_logic";
export {callActions, updateUi, getInputData};

function callActions() {
    const noteCreationBtn = document.querySelector('.note-creation');
    const boardCreationBtn = document.querySelector('.board-creation');

    noteCreationBtn.addEventListener("click", (e) => {
        alert("Add some information to your new note");
        /*changeData.addNote();*/
        let dataId = e.target.parentElement.getAttribute("data-id");
        updateUi.showNote(dataId);
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
    boardsContainer: document.querySelector(".boards-container"),
    showNote(boardId) {
        let currentBoard = document.querySelector(`.board[data-id="${boardId}"]`);
        console.log(currentBoard);
        
    },
    removeNote() {

    },
    showBoard() {
        let newBoard = allBoards.slice(-1);
        const boardContents = `<div class="board" data-id="${newBoard[0].boardID}"><h2 class="board-title">${newBoard[0].title}</h2>
        <button class="note-creation">Add Note</button></div>`;
        updateUi.boardsContainer.insertAdjacentHTML("beforeend", boardContents);
    },
    removeBoard() {

    },
}