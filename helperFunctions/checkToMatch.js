let lives = document.querySelector(".livesNum")
let life = 5 

export function compareValues(winningArr, clickedArr) {
    lives.innerHTML = `${life}`
    let arr = []
    if (life) {
        winningArr.map(item => {
            let c = item.children[0].innerHTML
            arr.push(c)
            if (clickedArr.includes(item.children[0].innerHTML)) {
                item.children[0].classList.remove("main-span")
                return;
            }
        })
    }
    if (life === 0) {
        document.querySelector(".mainBoard").innerHTML="Game completed"
    }
    console.log(arr)
}