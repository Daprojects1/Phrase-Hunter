const displayLetters = (arr, appendee, elementArr) => {
    if (typeof arr !== "object") throw new Error("Item in arg is not an array")
    else {
        const div = document.createElement("div")
        div.classList.add("letters-div")
        arr.forEach(item => {
            let p = document.createElement("p")
            p.innerText = item
            p.classList.add("letters")
            elementArr.push(p)
            div.appendChild(p)
        })
        appendee.appendChild(div)
    }
}

export default displayLetters
