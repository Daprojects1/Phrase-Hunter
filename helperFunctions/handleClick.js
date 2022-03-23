export const clickedValues = [];

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
}

export default handleClick 