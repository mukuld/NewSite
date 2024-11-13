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
    let scrambledWord = word.split("");
    // for (const letter of word) {
    //     scrambleOutput.textContent += scrambledWord + letter;
    // }
    for (let i = 0; i < word.length; i++) {
        if ((scrambledWord[i] === "A") && (scrambledWord[i + 1] !== "A")) {
            [scrambledWord[i], scrambledWord[i + 1]] = [scrambledWord[i + 1], scrambledWord[i]];
            i++;
        }
    }
    scrambleOutput.textContent = scrambledWord.join("");
}

btn.addEventListener("click", scramble);