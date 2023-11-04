import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards, findIndexedData} from "./notes_boards_logic";
export {callActions, updateUi, getInputData};

const boardsContainer = document.querySelector(".boards-container");

function callActions() {
    /*const noteCreationBtn = document.querySelector('.note-creation');*/
    const boardCreationBtn = document.querySelector('.board-creation');

    boardsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('note-creation')) {
            alert("Add some information to your new note");
            let boardId = e.target.parentElement.getAttribute("data-board-id");
            let boardIndex = findIndexedData.boardIndex(boardId);
            changeData.addNote(boardIndex);
            updateUi.showNote(boardId, boardIndex);
            /*
            let boardIndex = findIndexedData.boardIndex(boardId);
            console.log(boardIndex);
            console.log((allBoards[boardIndex].notesList));
            console.log((allBoards[boardIndex].notesList).slice(-1)); */
        }
        else if (e.target.classList.contains('modal')) {
            let noteId = e.target.getAttribute("data-note-id");
            /*console.log(id);*/
            updateUi.showModal(noteId);
            /*console.log("modal");
            console.log(e.target);
            console.log(e.target.id);*/
        }
        else if (e.target.parentElement.classList.contains('modal')) {
            let noteId = e.target.parentElement.getAttribute("data-note-id");
            /*console.log(id);*/
            updateUi.showModal(noteId);
            /*console.log("modal");
            console.log(e.target.parentElement);
            console.log(e.target.parentElement.id); */
        }
        else if (e.target.classList.contains('delete')) {
            console.log (e.target);
            console.log(e.target.parentElement);
            let noteId = e.target.parentElement.getAttribute("data-note-id");
            let parentId = e.target.parentElement.getAttribute("data-parent-id");
            updateUi.removeNote(parentId, noteId);
            changeData.deleteNote(parentId, noteId);
        }
    });

    boardCreationBtn.addEventListener("click", (e) => {
        alert("Add some information to your new board");
        changeData.addBoard();
        updateUi.showBoard();
    });

    /*deleteBtn.addEventListener('click', (e) =>{
        console.log(e.target.parentElement)
    });*/
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

        const cardMinContents = `<button class="card modal" data-note-id="${noteData.noteId}"><div class="card-title">${noteData.title}</div>
        <p class="due-date">${noteData.dueDate}</p></button>`;
        currentBoard.insertAdjacentHTML("beforeend", cardMinContents);
        
        const modalStart = `<div id="${noteData.noteId}" class="note-modal"> 
        <div class="note-modal-body" data-note-id="${noteData.noteId}" data-parent-id="${boardId}">`;
        const noteModalTitle = `<h1>${noteData.title}</h1>`;
        const modalOptions = `<button class="delete">Delete Note</button>`;
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

        /*
        console.log(noteCard);
        console.log(noteModal); */
        noteCard.remove();
        noteModal.remove();

    },
    showBoard() {
        let newBoard = allBoards.slice(-1);
        const boardContents = `<div class="board" data-board-id="${newBoard[0].boardId}"><h2 class="board-title">${newBoard[0].title}</h2>
        <button class="note-creation">Add Note</button></div>`;
        boardsContainer.insertAdjacentHTML("beforeend", boardContents);
    },
    removeBoard() {

    },
    showModal(noteId) {
        document.getElementById(noteId).classList.add('open');
        document.body.classList.add('note-modal-open');
    },
    hideModal() {
        document.querySelector('.note-modal.open').classList.remove('open');
        document.body.classList.remove('note-modal-open');
    },
}



