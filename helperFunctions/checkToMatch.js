import {winningWord} from "./showWordsArea"
let lives = document.querySelector(".livesNum")
let life = 5 
const falseArr = [];
let a = 1;


const reload = () => {
    return location.reload()
}
const showModal = () => {
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
    button.addEventListener("click", reload );
}

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
        const mainBoard = document.querySelector(".mainBoard")
        mainBoard.classList.add("flex")
        mainBoard.innerHTML=`<h2 class=main-h2>Sorry you failed the word was: <span class=wordSpan>${winningWord.word}</span></h2>`
        const btn = document.createElement("button")
        btn.innerText = "retry"
        btn.classList.add("modalBtn")
        mainBoard.appendChild(btn)
        btn.addEventListener("click", reload)
    }
    if (falseArr.length === 0) {
        setTimeout(showModal, 600)
    }
}
