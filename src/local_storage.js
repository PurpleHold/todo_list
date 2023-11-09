import {noteBuilder as noteFactory, boardBuilder as boardFactory, changeData, allBoards, findIndexedData} from "./notes_boards_logic";
export {handleStorage};

let handleStorage = {
    getNewData() {
        localStorage.setItem("allBoardsData", JSON.stringify(allBoards));
    },
    setStoredData() {

    },
}