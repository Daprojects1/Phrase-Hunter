import displayLetters from "./displayLetters";

export const wordsArea = document.querySelector(".wordChecker")
export const randomWords = require("random-words")(10);
export let displayWords = {
    index: 0,
    isCompleted: true
};
const winningWord = []

if (displayWords.isCompleted === true) {
    const word = randomWords[displayWords.index]
    displayLetters(word.split(""), wordsArea, winningWord)

}

console.log(randomWords)