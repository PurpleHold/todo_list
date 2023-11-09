import {format, compareAsc} from '../node_modules/date-fns';
import {handleStorage, initiateFirstLoad} from "./local_storage";
import {getInputData, updateUi} from "./note_user_actions";
export {noteBuilder, boardBuilder, allBoards, changeData, findIndexedData, minNoteId, minBoardId};

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

function noteBuilder (title, description, dueDate, priority, notes) {
    const noteId = minNoteId;

    return {title, description, dueDate, priority, notes, noteId};
};


let changeData = {
    addNote(parentId) {
        const newNoteData = getInputData.noteCreation();
        const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes);
        //const newNote = noteBuilder(newNoteData.title, newNoteData.description, newNoteData.dueDate, newNoteData.priority, newNoteData.notes, allBoards[parentId]);
        allBoards[parentId].notesList.push(newNote);
        minNoteId = ++minNoteId;
        handleStorage.getNewData("add");
        console.log(allBoards);
    },
    deleteNote(parentId, noteId) {
        const noteIndex = findIndexedData.noteIndex(parentId, noteId);
        allBoards[parentId].notesList.splice(noteIndex, 1);
        handleStorage.getNewData("delete");
        console.log(allBoards);
    },
    addBoard() {
        const newBoardData = getInputData.boardCreation();
        const newBoard = boardBuilder(newBoardData.title);
        allBoards.push(newBoard);
        minBoardId = ++minBoardId;
        handleStorage.getNewData("add");
        console.log(allBoards);
    },
    removeBoard(boardId) {
        const boardIndex = findIndexedData.boardIndex(boardId);
        allBoards.splice(boardIndex, 1);
        handleStorage.getNewData("delete");
        console.log(allBoards);
    },
    getSavedData(savedBoards, savedBoardIdCount, savedNoteIdCount) {
        allBoards = savedBoards;
        minBoardId = savedBoardIdCount;
        minNoteId = savedNoteIdCount;
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
