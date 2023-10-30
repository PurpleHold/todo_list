import {noteBuilder as noteFactory, boardBuilder as boardFactory} from "./notes_boards_logic";
/*import userActions from "./note_user_actions.js";*/

let firstBoard = boardFactory("ToDoList");


const planningStep = noteFactory("Plan Général / Algorithme", "Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre", 
"Dès le début, et à réévaluer/modifier si besoin","Haute", "Premières phrases écrites il y a une semaine", firstBoard);
firstBoard.notesList.push(planningStep);
console.log(firstBoard.notesList.length)

const drawingStep = noteFactory("Brouillon", "Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire", 
"Aussi tôt que possible","Haute", "Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires", firstBoard);
firstBoard.notesList.push(drawingStep);
console.log(firstBoard.notesList.length);

function noteCreation() {
    alert("Add some information to your new note");
    let title = prompt("Title:");
    let description = prompt("Description:");
    let dueDate = "ASAP";
    let priority = prompt("How important is it ?");
    let notes = prompt("Additionnal remarks:");
    const newNote = noteFactory(title, description, dueDate, priority, notes, firstBoard);
    firstBoard.notesList.push(newNote);
    console.log(firstBoard);
};
noteCreation();
console.log(firstBoard.notesList.length);
console.log(firstBoard);

/*
function storeBoards() {
    let allBoard = [];
};
*/