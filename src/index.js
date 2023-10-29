import noteFactory from "./note_factory.js";
import boardFactory from "./board_factory.js";
/*import userActions from "./note_user_actions.js";*/

const planningStep = noteFactory("Plan Général / Algorithme", "Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre", 
"Dès le début, et à réévaluer/modifier si besoin","Haute", "Premières phrases écrites il y a une semaine");

const drawingStep = noteFactory("Brouillon", "Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire", 
"Aussi tôt que possible","Haute", "Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires");
console.log(drawingStep);
console.log(drawingStep.noteTitle);
console.log(drawingStep.noteDesc);


const firstBoard = boardFactory("ToDoList", planningStep, drawingStep);
/*console.log(firstBoard);
console.log(firstBoard.title)
console.log(firstBoard.projectBoard);
console.log(firstBoard.projectBoard[0]);*/

function noteCreation() {
    alert("Add some information to your new note");
    let title = prompt("Title:");
    let description = prompt("Description:");
    let priority = prompt("How important is it ?");
    let notes = prompt("Additionnal remarks:");
    const newNote = noteFactory(title, description, priority, notes);
    firstBoard.projectBoard.push(newNote);
    console.log(firstBoard);
};
noteCreation();

/*
function storeBoards() {
    let allBoard = [];
};
*/