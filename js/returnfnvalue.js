/* 
* Javascript to demonstrate return values from functions.
* Date: 4 November 2024
* Programmer: Mukul Dharwadkar
*/


const input = document.querySelector(".numberInput");
const para = document.querySelector("p");
const btn = document.querySelector("button")

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num
}

function handleChange() {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "Please enter a number";
    } else {
        para.textContent = `<p>${num} squared is: ${squared(num)}.</p>`;
        para.textContent += `<p>${num} cubed is: ${cubed(num)}.</p>`;
        para.textContent += `<p>${num} factorial is: ${factorial(num)}.</p>`;
    }
}

input.addEventListener("change", handleChange);
btn.addEventListener("click", handleChange)