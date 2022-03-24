import "./styles.css"
import displayEachRow from "./helperFunctions/displayEachRows"
import { keyBoardElements } from "./helperFunctions/displayEachRows"
import handleClick from "./helperFunctions/handleClick"
import { wordsArea } from "./helperFunctions/showWordsArea"
import { compareValues } from "./helperFunctions/checkToMatch"
import { winningWord } from "./helperFunctions/showWordsArea"
import { clickedValues } from "./helperFunctions/handleClick"

const firstRow = "qwertyuiop"
const secondRow = "asdfghjkl"
const thirdRow = "zxcvbnm"
const rowItems = [firstRow, secondRow, thirdRow]


if (rowItems.reduce((acc, item) => item.split("").length + acc, 0) !== 26) throw new Error("missing letters in the alphabet")
displayEachRow(rowItems)
handleClick(keyBoardElements)

