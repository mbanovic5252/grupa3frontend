let count = 0;
let counterP = document.querySelector("#counter");
let showHideBtn = document.querySelector("#show-hide");
let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let resetBtn = document.querySelector("#reset");

counterP.innerText = count;

showHideBtn.addEventListener("click", handleShowHide);

function handleShowHide() {
  counterP.classList.toggle("hide");
}
function handlePlus() {
  count++;
  counterP.innerText = count;
}
function handleMinus() {
  count--;
  counterP.innerText = count;
}
showHideBtn.addEventListener("click", handleShowHide);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
resetBtn.addEventListener("click", function () {
  count = 0;
  counterP.innerText = count;
});

function handleHideElement(e) {
  let element = e.target;
  element.classList.add("hide");
}

let brojButtonList = document.querySelectorAll(".broj");
for (let i = 0; i < brojButtonList.length; i++) {
  let btn = brojButtonList[i];
  btn.addEventListener("click", handleHideElement);
}
