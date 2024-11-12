/* 
* Javascript to demonstrate return values from functions.
* Date: 11 November 2024
* Programmer: Mukul Dharwadkar
*/

const team = document.querySelector(".member-name");
const para = document.querySelector("p");
const teamSize = 11;
const btn = document.querySelector("button");

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        team.textContent += name;
    }
}

function teamMember() {
    const name = document.getElementsByClassName("member-name").value;
    const member = new Person(name);
    return member;
}

function handleChange () {
    let i = 0;
    while (i < teamSize) {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}: ${teamMember()}`;
    }
}

btn.addEventListener("click", handleChange);

