import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards} from "./notes_boards_logic";
export {callActions, updateUi, getInputData};

function callActions() {
    const btn = document.querySelector('button');

    btn.addEventListener("click", (e) => {
        alert("Add some information to your new note");
        changeData.addNote();
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
    }
}

let updateUi = {
    showNote() {

    },
    removeNote() {

    },
    showBoard() {

    },
    removeBoard() {

    },
}