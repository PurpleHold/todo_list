import {format, compareAsc} from '../node_modules/date-fns';
import {getInputData} from "./note_user_actions";
export {noteBuilder, boardBuilder, allBoards, changeData, initiatefirstBoard};

let allBoards = [];

function boardBuilder (title, ...notes) {
    let notesList = [...notes];
    const boardID =  allBoards.length;
    return {title, notesList, boardID};
};

function noteBuilder (title, description, dueDate, priority, notes, parentBoard) {
    let noteTitle = `Title: ${title}`;
    let noteDesc = `Description: ${description}`;
    let noteId = parentBoard.notesList.length;

    return {noteTitle, noteDesc, dueDate, priority, notes, parentBoard, noteId};
};

function initiatefirstBoard() {
    let firstBoard = boardBuilder("ToDoList");
    allBoards.push(firstBoard);
    console.log(allBoards[0]);
}

let changeData = {
    addNote() {
        const newNoteData = getInputData.noteCreation();
        const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes, allBoards[0]);
        allBoards[0].notesList.push(newNote);
        console.log(allBoards[0]);
    },
    deleteNote() {

    },
    addBoard() {

    },
    removeBoard() {

    },
};
