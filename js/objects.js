/* 
* Javascript to demonstrate how objects work.
* Date: 11 November 2024
* Programmer: Mukul Dharwadkar
*/

const teamList = document.getElementById("teamList");
const input = document.querySelector(".member-name")
const teamSize = 11;
let currentSize = 0;
const btn = document.querySelector("button");

function Person(name, role) {
    this.name = name;
    this.role = role;
    this.returnName = function () {
        return this.name;
    }

    this.returnRole = function () {
        return this.role;
    }
}

function teamMember() {
    // const name = document.querySelector(".member-name").value;
    const name = input.value;
    const role = document.querySelector(".member-role").value;
    if (!name || !role) return null;
    return new Person(name, role);
}

function handleChange () {
    if (currentSize >= teamSize) {
        alert("Team is full");
        return;
    }

    const member = teamMember();
    if (!member) {
        alert("Please enter a name and role");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${member.returnName()}      ${member.returnRole()}`;
    teamList.appendChild(listItem)
    currentSize++
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleChange();
        event.preventDefault();
    }
});
btn.addEventListener("click", handleChange);
