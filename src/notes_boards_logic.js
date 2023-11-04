import {format, compareAsc} from '../node_modules/date-fns';
import {getInputData, updateUi} from "./note_user_actions";
export {noteBuilder, boardBuilder, allBoards, changeData, initiatefirstBoard, findIndexedData};

let allBoards = [];
/* min ID values for boards & notes, incremented when they are created
to prevent identical IDs if user delete and then add new items */
let minNoteId = 0;
let minBoardId = 0;

function boardBuilder (title, ...notes) {
    let notesList = [...notes];
    const boardId =  allBoards.length>=minBoardId ? allBoards.length : minBoardId;
    return {title, notesList, boardId};
};

function noteBuilder (title, description, dueDate, priority, notes, parentBoard) {
    let noteTitle = `Title: ${title}`;
    let noteDesc = `Description: ${description}`;
    const noteId = parentBoard.notesList.length>=minNoteId ? parentBoard.notesList.length : minNoteId;

    return {noteTitle, noteDesc, title, description, dueDate, priority, notes, parentBoard, noteId};
};

function initiatefirstBoard() {
    let firstBoard = boardBuilder("ToDoList");
    allBoards.push(firstBoard);
    console.log(allBoards[0]);
    updateUi.showBoard();
}

let changeData = {
    addNote(parentId) {
        const newNoteData = getInputData.noteCreation();
        const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes, allBoards[parentId]);
        allBoards[parentId].notesList.push(newNote);
        minNoteId = ++minNoteId;
        console.log(allBoards);
    },
    deleteNote(parentId, noteId) {
        const noteIndex = findIndexedData.noteIndex(parentId, noteId);
        allBoards[parentId].notesList.splice(noteIndex, 1);
        console.log(allBoards);
    },
    addBoard() {
        const newBoardData = getInputData.boardCreation();
        const newBoard = boardBuilder(newBoardData.title);
        allBoards.push(newBoard);
        minBoardId = ++minBoardId;
        console.log(allBoards);
    },
    removeBoard() {

    },
};

let findIndexedData = {
    newNote(parentBoardIndex) {
        const lastParentItem = (allBoards[parentBoardIndex].notesList).slice(-1);
        return lastParentItem;
    },
    noteIndex(idParent, idNote) {
        let parentIndex = this.boardIndex(idParent);
        let index = allBoards[parentIndex].notesList.findIndex(item => item.noteId == idNote);
        return index;
    },
    boardIndex(id) {
        let index = allBoards.findIndex(item => item.boardId == id);
        return index;
    }
}
