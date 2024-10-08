let myButton = document.querySelector(".spaced")
let myPlayer = document.querySelector(".player-name")

function setUserName() {
    let myName = prompt("Please enter your name.")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myPlayer.textContent = "Hello, " + myName
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myPlayer.textContent = "Hello, " + storedName
}

myButton.onclick = function() {
    setUserName()
}