/* 
* Javascript to manage superheroes.
* Date: 15 November 2024
* Programmer: Mukul Dharwadkar
*/

async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector(".head");
    const myH2 = document.createElement("h2");
    myH2.textContent = obj.squadName;
    header.appendChild(myH2);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometow: ${obj.hometown} // Formed: ${obj.formed}`;
    header.appendChild(myPara)
}