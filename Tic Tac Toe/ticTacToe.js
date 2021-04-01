const boxes = document.getElementsByClassName("box")
const resetBtn = document.getElementById("reset")
var boxList = ["a", "a", "a", "a", "a", "a", "a", "a", "a"]
var x = true
var win1 = false
var win2 = false
var win3 = false
var win4 = false
var win5 = false
var win6 = false
var win7 = false
var win8 = false

function reset() {
    boxList = ["a", "a", "a", "a", "a", "a", "a", "a", "a"]
    for (i = 0; i < boxes.length; i++) {
        document.getElementsByClassName("column")[0].style.display = "block"
        document.getElementById("winDiv").style.display = "none"
        boxes[i].innerHTML = "a"
        boxes[i].style.color = "white"
    }
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
        var box = e.path[0]
        box.style.color = "black"
        if (x && box.innerHTML === "a") {
            box.innerHTML = "X"
            x = false
            boxList.splice(e.path[0].id - 1, 1, "X")
        }
        else {
            if (x === false && box.innerHTML === "a") {
                box.innerHTML = "O"
                x = true
                boxList.splice(e.path[0].id - 1, 1, "O")
            }
        }
        win1 = boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X" || boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O"
        win2 = boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X" || boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O"
        win3 = boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X" || boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O"
        win4 = boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X" || boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O"
        win5 = boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X" || boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[2].innerHTML === "O"
        win6 = boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X" || boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[8].innerHTML === "O"
        win7 = boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X" || boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O"
        win8 = boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X" || boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"
        if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
            document.getElementsByClassName("column")[0].style.display = "none"
            document.getElementById("winDiv").style.display = "block"
            document.getElementById("resetWin").addEventListener("click", reset)
        }
    })
}
resetBtn.addEventListener("click", reset)