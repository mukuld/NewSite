/* 
* Javascript to set an alarm using async functions
* Date: 16 December 2024
* Programmer: Mukul Dharwadkar
*/

const name1 = document.querySelector("#name");
const delay = document.querySelector("#delay");
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

// function setAlarm() {
//     setTimeout(() => {
//         output.textContent = "Wake up!";
//     }, 1000);
// }

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject(new Error("Alarm delay must not be negative"));
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

async function handleClick() {
    try {
        const message = await alarm(name1.value, delay.value);
        output.textContent = message;
    }
    catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
}

button.addEventListener("click", handleClick);