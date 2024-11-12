/* 
* Javascript to demonstrate return values from functions.
* Date: 4 November 2024
* Programmer: Mukul Dharwadkar
*/

const team = document.querySelector(".team");
const para = document.querySelector("p");

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        team.textContent += name;
    }
}

