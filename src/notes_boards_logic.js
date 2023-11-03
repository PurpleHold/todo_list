import {format, compareAsc} from '../node_modules/date-fns';
import {getInputData, updateUi} from "./note_user_actions";
export {noteBuilder, boardBuilder, allBoards, changeData, initiatefirstBoard};

let allBoards = [];
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
    },
    deleteNote() {

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
