import displayLetters from "./displayLetters"
const keyBoard = document.querySelector(".keyBoard")
export const keyBoardElements = [];

const displayEachRow = (rows) => {
    rows.map(row => displayLetters(row.split(""), keyBoard, keyBoardElements))
}

export default displayEachRow;