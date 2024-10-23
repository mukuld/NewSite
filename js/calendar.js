const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;
  let yearType = "regular"
  const getCurrentYear = new Date().getFullYear()
  
  if ((getCurrentYear % 4 === 0) && (getCurrentYear % 400 !== 0)) {
    yearType = "leap"
  }

  // ADD CONDITIONAL HERE
   if ((month === "April") || (month === "June") || (month === "September") || (month === "November")) {
        days = 30;
    } else if ((yearType === "leap") && (month === "February")) {
        days = 29;
    } else {
        days = 28;
    }


  list.textContent = "";
  h1.textContent = `${month} ${getCurrentYear}`;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");