let myButton = document.querySelector("button")
let myHeading = document.querySelector("h2")

function setUserName() {
    let myName = prompt("Please enter your name.")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "Hello, " + myName
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "Hello, " + storedName
}

myButton.onclick = function() {
    setUserName()
}