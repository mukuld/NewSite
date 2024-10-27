/* 
* Javascript to generate a list of numbers that are perfect squares.
* Date: 26 October 2024
* Programmer: Mukul Dharwadkar
*/
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let person of people) {
    if (person === "Phil" || "Lola") {
        refused.textContent += person;

    } else {
        admitted.textContent += person;
    }
}

