import { compareValues } from "./checkToMatch";
import { winningWord } from "./showWordsArea";
const clickedValues = [];


const handleClick = (arr) => {
    arr.map(item => {
        item.addEventListener("click", function onClicked(e) {
            handleClickBehaviour(e, item)
        }, { once: true })
    })
}

const handleClickBehaviour = (e, item) => {
        item.classList.add("changeClick")
        clickedValues.push(e.target.innerText)
    compareValues(winningWord.wordDomElement,clickedValues, e.target)
}

export default handleClick 