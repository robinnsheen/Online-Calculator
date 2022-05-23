const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operators");

function printDigits() {
  for (let digit of digits) {
    console.log(digit.innerText);
  }
}

/** Create digit buttons */

for (let digit of digits) {
  digit.addEventListener("click", handleDigitClick);
}

//handle clicking on a digit//

function handleDigitClick() {

}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, y, operator) {
  if (operator === "+") {
    return add(x, y);
  }

  if (operator === "-") {
    return subtract(x, y);
  }

  if (operator === "*") {
    return multiply(x, y);
  }

  if (operator === "/") {
    return divide(x, y);
  }

}

function returnAnswer() {
  return operate(x, y, operator);
}