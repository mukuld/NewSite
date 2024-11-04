/* 
* Javascript to demonstrate custom functions.
* Date: 28 October 2024
* Programmer: Mukul Dharwadkar
*/

const msgField = document.querySelector("#msgField");
const btn = document.querySelector("button");
msgField.focus();
btn.addEventListener("click", () => {
    const msgType = document.querySelector("input[type='radio'][name='msgType']:checked");
    // if (msgType) {
        displayMessage(msgField.value, msgType.value)
    // } else {
        // const body = document.body;

        // const panel = document.createElement("div");
        // panel.setAttribute("class", "msgBox");
        // body.appendChild(panel)

        // const msg1 = document.createElement("p");
        // msg1.textContent = "Please select a message type!";
        // panel.appendChild(msg1);
    }
});

function displayMessage(msgText, msgType) {
    const body = document.body;

    // Check if a message box already exists and remove it
    const existingPanel = document.querySelector(".msgBox");
    if (existingPanel) {
        existingPanel.remove();
    }
    
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
        msg.style.backgroundImage = "url(../img/warning.png)";
        msg.style.paddingLeft = "20px";
        panel.style.backgroundColor = "red";
        msg.textContent = "Please select a message type!"
    }
}
