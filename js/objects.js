/* 
* Javascript to demonstrate return values from functions.
* Date: 11 November 2024
* Programmer: Mukul Dharwadkar
*/

const teamList = document.getElementById("teamList");
const input = document.querySelector(".member-name")
const teamSize = 11;
let currentSize = 0;
const btn = document.querySelector("button");

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        //team.textContent += name;
        return this.name;
    }
}

function teamMember() {
    const name = document.querySelector(".member-name").value;
    console.log("Name is: ", name);
    if (!name) return null;
    return new Person(name);
}

function handleChange () {
    if (currentSize >= teamSize) {
        alert("Team is full");
        return;
    }

    const member = teamMember();
    if (!member) {
        alert("Please enter a name");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${currentSize + 1}: ${member.introduceSelf()}`;
    teamList.appendChild(listItem)
    currentSize++
    console.log("Team size is: ", currentSize);
}

input.addEventListener("change", handleChange);
btn.addEventListener("click", handleChange);
