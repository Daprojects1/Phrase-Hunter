import displayLetters from "./displayLetters";

export const wordsArea = document.querySelector(".wordChecker")
export const randomWords = require("random-words")(10);
export let displayWords = {
    index: 0,
    isCompleted: true
};
export const winningWord = []

if (displayWords.isCompleted) {
    const word = randomWords[displayWords.index]
    displayLetters(word.split(""), wordsArea, winningWord)
}

winningWord.map(item => {
    const letter = item.innerText;
    const span = document.createElement("span")
    span.innerText = letter;
    item.innerHTML = ""
    item.appendChild(span)
    span.classList.add("main-span")
})