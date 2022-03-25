import displayLetters from "./displayLetters";

export const wordsArea = document.querySelector(".wordChecker")
export const randomWords = require("random-words")(10);
export let displayWords = {
    index: 0,
    isCompleted: true
};
export const winningWord = {
    wordDomElement: [],
    word:""
}

const getData = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    return data[0].meanings[0].definitions[0]
}

if (displayWords.isCompleted) {
    const word = randomWords[0]
    
    let definitions = []
    getData(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res =>  document.querySelector(".main-p").innerHTML = res.definition || "sorry you have to guess this one")
    winningWord.word = word
    displayLetters(word.split(""), wordsArea, winningWord.wordDomElement)
}

winningWord.wordDomElement.map(item => {
    const letter = item.innerText;
    const span = document.createElement("span")
    span.innerText = letter;
    item.innerHTML = ""
    item.appendChild(span)
    span.classList.add("main-span")
})