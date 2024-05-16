import addNumbersIn from "./strCalculator.js";

const string = document.querySelector("#input-string");
const form = document.querySelector("#stringCalculate-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputString = string.value;

  div.innerHTML = `<p>${addNumbersIn(inputString)}</p>`;
});
