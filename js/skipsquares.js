/* 
* Javascript to generate a list of numbers that are perfect squares.
* Date: 25 October 2024
* Programmer: Mukul Dharwadkar
*/

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    para.textContent = "Output: ";
    const num = input.value;
    input.value = "";
    input.focus();
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        console.log(sqRoot);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        para.textContent += `${i} `;
    }
});