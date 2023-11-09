import {noteBuilder as noteFactory, boardBuilder as boardFactory, allBoards, initiatefirstBoard} from "./notes_boards_logic";
import {callActions, updateUi} from "./note_user_actions";
import {handleStorage, initiateFirstLoad} from "./local_storage";

/* Add first board, launch actions depending on event listeners */
//initiatefirstBoard();
handleStorage.setStoredData();
callActions();

/* Old Notes Test
const planningStep = noteFactory("Plan Général / Algorithme", "Décrire le projet en quelques phrases très générales, puis les détailler pour donner une vue d'ensemble du problème général et des sous-problèmes à résoudre", 
"Dès le début, et à réévaluer/modifier si besoin","Haute", "Premières phrases écrites il y a une semaine", allBoards[0]);
allBoards[0].notesList.push(planningStep);
console.log(allBoards[0].notesList.length)

const drawingStep = noteFactory("Brouillon", "Dessiner une première idée de l'interface finale du projet pour en avoir une idée plus claire", 
"Aussi tôt que possible","Haute", "Premiers dessins déjà produits, voir si d'autres interfaces sont nécessaires", allBoards[0]);
allBoards[0].notesList.push(drawingStep);
console.log(allBoards[0].notesList.length);
*/

/* Modal Test */



