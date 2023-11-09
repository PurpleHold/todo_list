import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards, findIndexedData, minNoteId, minBoardId} from "./notes_boards_logic";
import {getInputData, updateUi, boardsContainer} from "./note_user_actions";
export {handleStorage, initiateFirstLoad};

let handleStorage = {
    getNewData(type) {
        if (type == "add") {
            localStorage.setItem("minNoteId", JSON.stringify(minNoteId));
            localStorage.setItem("minBoardId", JSON.stringify(minBoardId));
            localStorage.setItem("allBoardsData", JSON.stringify(allBoards));
        }
        else if (type == "delete" || type == "edit" ) {
            localStorage.setItem("allBoardsData", JSON.stringify(allBoards));
        }
        
    },
    setStoredData() {
        if (!localStorage.getItem("allBoardsData")) {
            console.log("WIP! No data stored :(");
            initiateFirstLoad();

          } else {
            console.log("WIP! Some data saved :)");
            let savedBoardData = JSON.parse(localStorage.getItem("allBoardsData"));
            let savedMinBoardId = JSON.parse(localStorage.getItem("minBoardId"));
            let savedMinNoteId = JSON.parse(localStorage.getItem("minNoteId"));

            // call a function to send saved data and update global boards array variable with it
            changeData.getSavedData(savedBoardData, savedMinBoardId, savedMinNoteId);
            console.log(savedBoardData);

            savedBoardData.forEach((board, index) => {
                if (!board) {
                    return;
                }
                else /*if (board.notesList.length === 0)*/{
                    updateUi.showBoard(board); 
                    let boardId = board.boardId;
                    
                    if (board.notesList.length !== 0) {
                        board.notesList.forEach(note => {
                            updateUi.showNote(boardId, note);
                        })
                    }
                } 
                /*
                else if (board.notesList.length > 0){
                    updateUi.showBoard(board);
                    console.log(board.boardId);
                    board.notesList.forEach((board, index) => {
                        updateUi.showNote(board.boardId, index);
                    })
                }*/
            });
          } 
    },
}

function initiateFirstLoad() {
    let firstBoard = boardBuilder("ToDoList");
    allBoards.push(firstBoard);
    console.log(allBoards[0]);
    updateUi.showNewBoard();
}