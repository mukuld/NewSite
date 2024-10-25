/* 
* Javascript to generate a list of numbers that are perfect squares.
* Date: 25 October 2024
* Programmer: Mukul Dharwadkar
*/

const output = document.querySelector('.output');
output.textContent = "";

let i = 10;
while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = "Blast Off!";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;
}