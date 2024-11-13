/* 
* Javascript to scramble words.
* Date: 12 November 2024
* Programmer: Mukul Dharwadkar
*/

const scrambleOutput = document.getElementById("scrambleOutput");
const input = document.querySelector(".scrambleInput");
const btn = document.querySelector(".scrambleBtn");

function scramble () {
    const word = input.value;
    let scrambledWord = [];
    for (const letter of word) {
        // const letterItem = document.createElement("p");
        // letterItem.textContent = letter;
        // scrambleOutput.appendChild(letterItem);
        scrambledWord += [letter];
    }
}

btn.addEventListener("click", scramble);