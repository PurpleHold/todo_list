import {format, compareAsc} from '../node_modules/date-fns';
export {noteBuilder, boardBuilder};

function boardBuilder (title, ...notes) {
    const notesList = [...notes];
    return {title, notesList};
};

function noteBuilder (title, description, dueDate, priority, notes, parentBoard) {
    let noteTitle = `Title: ${title}`;
    let noteDesc = `Description: ${description}`;
    let noteId = typeof(parentBoard.notesList)!=='undefined' ? parentBoard.notesList.length : 0;

    return {noteTitle, noteDesc, dueDate, priority, notes, parentBoard, noteId};
}
