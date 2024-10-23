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
    if ((choice === "January") || (choice === "March") || (choice === "May") || (choice === "July") || (choice === "August") || (choice === "October") || (choice === "December")) {
    days = 31;
    } else if ((choice === "April") || (choice === "June") || (choice === "September") || (choice === "November")) {
        days = 30;
    } else if ((yearType === "leap") && (choice === "February")) {
        days = 29;
    } else {
        days = 28;
    }


  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");