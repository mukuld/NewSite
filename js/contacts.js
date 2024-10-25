/* 
* Javascript to search for contacts from a set of static contacts.
* Date: 24 October 2024
* Programmer: Mukul Dharwadkar
* TODO1: Build a feature to allow user to add a contact.
* TODO2: Add more fields to the contact form. Country code, Email ID, Address, Social media etc.
* TODO2: Get the contacts stored in a database table and return it. 
*/

const contacts = [
    "Shital:669454730",
    "Jayant:669454733",
    "Nandini:669454733",
    "Tai:978319734",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    console.log(searchName);
    input.value = "";
    input.focus();

    para.textContent = "";
    for (const contact of contacts) {
        console.log(contact);
        const splitContact = contact.split(":");
        console.log(splitContact[0]);
        if (splitContact[0].toLowerCase === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === "") {
        para.textContent = "Contact not found. Do you want to add it?";
    }
});