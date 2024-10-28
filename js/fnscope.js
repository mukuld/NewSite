/* 
* Javascript to demonstrate function scope.
* Date: 28 October 2024
* Programmer: Mukul Dharwadkar
*/

const x = 1;

function a() {
    const y = 2;
}

function b() {
    const z = 3;
}

function output() {
    const para = document.createElement("p");
    document.body.appendChild(para);
    para.textContent = `Value = ${value}`;
}

const oput = document.querySelector(".p-para");
oput.textContent = `Value is: ${output()}`