/* 
* Javascript to set an alarm using async functions
* Date: 16 December 2024
* Programmer: Mukul Dharwadkar
*/

const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", alarm);