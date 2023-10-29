import {format, compareAsc} from '../node_modules/date-fns';

export default function noteBuilder (title, description, dueDate, priority, notes) {
    const noteTitle = `Title: ${title}`;
    const noteDesc = `Description: ${description}`;
    return {noteTitle, noteDesc, dueDate, priority, notes};
}