import {winningWord} from "./showWordsArea"
let lives = document.querySelector(".livesNum")
let life = 5 
const falseArr = [];
let a = 1;

console.log(winningWord)
export function compareValues(winningArr, clickedArr, target) {
    falseArr.length = 0;
    if (!(winningWord.word.includes(target.innerHTML))) life--
    lives.innerHTML=life
     winningArr.map(item => {
        if (clickedArr.includes(item.children[0].innerHTML)) {
            item.children[0].classList.remove("main-span");
        } else {
            falseArr.push(1)
        }
    })
    if (life === 0) {
        document.querySelector(".mainBoard").innerHTML="<h2 class=main-h2>You failed, try again </h2>"
    }
    if (falseArr.length === 0) {
        const button = document.createElement("button")
        const h2 = document.createElement("h2")
        h2.classList.add("main-h2")
        h2.innerText = "Nice one"
        button.innerText = "Restart"
        button.classList.add("modalBtn")
        const div = document.createElement("div")
        div.appendChild(button)
        div.appendChild(h2)
        div.classList.add("modal")
        const body = document.querySelector("body")
        body.classList.add("m-color");
        body.appendChild(div)
        const mainBoard = document.querySelector(".mainBoard")
        mainBoard.classList.remove("mainBoard")
        button.addEventListener("click", () => location.reload());
    }
}

