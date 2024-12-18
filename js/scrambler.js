/* 
* Javascript to scramble words.
* Date: 12 November 2024
* Programmer: Mukul Dharwadkar
*/

const scrambleOutput = document.getElementById("scrambleOutput");
const input = document.querySelector(".scrambleInput");
const btn = document.querySelector(".scrambleBtn");

function scramble(word) {
    let scrambledWord = word.split("");
    for (let i = 0; i < word.length; i++) {
        if ((scrambledWord[i] === "A") && (scrambledWord[i + 1] !== "A")) {
            [scrambledWord[i], scrambledWord[i + 1]] = [scrambledWord[i + 1], scrambledWord[i]];
            i++;
        }
    }
    return scrambledWord.join("");
}

function handleChange() {
    const word = input.value;
    if (!word) {
        scrambleOutput.textContent = "Please enter a word";
        return;
    }

    const isUpperCase = word === word.toUpperCase();
    const scrambled = scramble(isUpperCase ? word : word.toUpperCase());
    scrambleOutput.textContent = isUpperCase ? scrambled : scrambled.toLowerCase();
}

btn.addEventListener("click", handleChange);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        handleChange();
        e.preventDefault();
    }
})