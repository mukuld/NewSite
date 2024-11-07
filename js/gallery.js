const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic2.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = {"pic1.jpg" : "pic1 alt text", "pic2.jpg" : "pic2 alt text", "pic3.jpg" : "pic3 alt text", "pic4.jpg" : "pic4 alt text", "pic5.jpg" : "pic5 alt text"}

/* Looping through images */


for (const imgName of imgNames) {   
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/${imgName}`);
    newImage.setAttribute('alt', altTexts[imgName]);
    thumbBar.appendChild(newImage);
    
    function selectImage(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt, e.target.alt;
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
