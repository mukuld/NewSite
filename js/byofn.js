/* 
* Javascript to demonstrate custom functions.
* Date: 28 October 2024
* Programmer: Mukul Dharwadkar
*/

const msgField = document.querySelector("#msgField");
console.log("Message type is: ", msgType.value)
const btn = document.querySelector("button");
msgField.focus();
btn.addEventListener("click", () => {
    const msgType = document.querySelector("input[name='msgType']");
    displayMessage(msgField.value, msgType.value)
});

function displayMessage(msgText, msgType) {
    const body = document.body;
    
    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);
    
    const msg = document.createElement("p");
    msg.textContent = msgText;
    panel.appendChild(msg);
    
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);
    
    closeBtn.addEventListener("click", () => 
        panel.parentNode.removeChild(panel),);
    
    if (msgType === "warning") {
        msg.style.backgroundImage = "url(../img/warning.png)";
        panel.style.backgroundColor = "orange";
    } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(../img/chat.png)";
        panel.style.backgroundColor = "chocolate";
    } else {
        msg.style.paddingLeft = "20px";
    }
}
