const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgNames = ["../img/pic1.jpg", "../img/pic2.jpg", "../img/pic3.jpg", "../img/pic4.jpg", "../img/pic2.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = ["pic1 alt text", "pic2 alt text", "pic3 alt text", "pic4 alt text", "pic5 alt text"]

/* Looping through images */


for (let i = 0; i < imgNames.length && i < altTexts.length; i++) {   
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', altTexts[i]);
    thumbBar.appendChild(newImage);
    
    function selectImage() {
        displayedImage.setAttribute("src", newImage.getAttribute("src"));
        displayedImage.setAttribute("alt", newImage.getAttribute("alt"));
    }

    newImage.addEventListener("click", selectImage);
}

/* Wiring up the Darken/Lighten button */

function darkenLightenImage() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

btn.addEventListener("click", darkenLightenImage);
