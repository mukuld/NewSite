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
    if (person === "Phil" || person === "Lola") {
        refused.textContent += `${person}, `;

    } else {
        admitted.textContent += `${person}, `;
    }
}
// console.log("Last character is: ", admitted.textContent.slice(-1));
// admitted.textContent = admitted.textContent.replace(admitted.textContent.slice(-1), ".");
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.lastIndexOf(", ")) + ".";
refused.textContent = refused.textContent.slice(0, refused.textContent.lastIndexOf(", ")) + ".";