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