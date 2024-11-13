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
    // for (const letter of word) {
    //     scrambleOutput.textContent += scrambledWord + letter;
    // }
    for (let i = 1; i <= word.length(); i++) {
        if ((scrambledWord[i - 1] === "A") && (scrambledWord[i]) {
            scrambleOutput.textContent += scrambledWord + scrambledWord[i] + scrambledWord[i - 1];
        } else {
            scrambleOutput.textContent = scrambledWord + scrambledWord[i]
        }
    }
}

btn.addEventListener("click", scramble);