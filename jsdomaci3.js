// 1. zadatak Napraviti kvadrat s 9 polja ko krizic kruzic. On mouse hover svako polje ima
// nestati pa se pojaviti kada se makne mis. <-- to se disablea ako stisnes na polje(znaci celija je uvijek
// prikazana). ponovnim clickom se enablea(znaci celija opet nestaje on hover). Urediti CSSom.

let cell = document.querySelectorAll(".cell");
let isClicked = false;

// Universal function that hides the targeted element by adding "hide" class to it.
function handleHideElement(e) {
  let element = e.target;
  element.classList.toggle("hide");
}
// Universal function that hides the targeted element by removing "hide" class from it.
function handleShowElement(e) {
  let element = e.target;
  element.classList.remove("hide");
}

function elementClicked(e) {
  let element = e.target;
  if (isClicked) {
    element.addEventListener("mouseover", handleHideElement);
    element.addEventListener("mouseout", handleShowElement);
    console.log("is click = false");
    isClicked = false;
  } else {
    isClicked = true;
    element.removeEventListener("mouseover", handleHideElement);
    element.removeEventListener("mouseout", handleShowElement);
    element.classList.remove("hide");
    console.log("is clicked = True");
  }
}

cell.forEach((element) => {
  element.addEventListener("click", elementClicked);
  element.addEventListener("mouseover", handleHideElement);
  element.addEventListener("mouseout", handleShowElement);
});

// 2. zadatak Napraviti kalkulator + - * / urediti CSSom
let count = 0;
let counter = document.querySelector(".calculator-screen");
const numberButtons = document.querySelectorAll(".number");

let number1 = function handlePlus() {
  count++;
  counter.innerText = count;
};
function handleMinus() {
  count--;
  counter.innerText = count;
}

plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
