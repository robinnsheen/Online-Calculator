/**
 * //digit function
 * pressing a button assigns button value to x
 * pressing second button multiplies first value by 10
 * and adds second button value, etc
 *
 * continue until operator is pressed
 * return x and operator.
 *
 * store return values in x and operator
 *
 * //end digit function
 *
 * //2nd digit function
 * pressing a button assigns button value to x
 * pressing second button multiplies first value by 10
 * and adds second button value, etc
 *
 * continue until equal is pressed
 * return y and equal sign
 *
 * //end digit function
 *
 *
*/


const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operator");
let x;
let y;
let operator;
let chain = false;

/** Create clear button. */
const clear = document.querySelector("#clear");
clear.addEventListener("click", clearValues);

function clearValues() {
  x = undefined;
  y = undefined;
  operator = undefined;
  chain = false;
}

/** Create digit buttons */

for (let digit of digits) {
  digit.addEventListener("click", handleDigitClick);
}

//handle clicking on a digit//
function handleDigitClick(evt) {
  let digitValue = evt.currentTarget.innerText;
  console.log(digitValue);
  if (!chain) {
    if (x && !operator) {
      x += digitValue;
    }

    if (!x && !operator)
    {
      x = digitValue;
    }

    if (operator && y) {
      y += digitValue;
    }

    if (operator && !y) {
      y = digitValue;
    }
  }

  if (chain) {
    if (operator && y) {
      y += digitValue;
    }

    if (operator && !y) {
      y = digitValue;
    }
  }

}

/** Create operation buttons */

for (let operation of operations) {
  operation.addEventListener("click", handleOperationClick);
}

//handle clicking on an operator//
function handleOperationClick(evt) {
  if (!operator) {
    operator = evt.currentTarget.innerText;
    console.log(operator);
  }

  else if (operator) {
    chain = true;
    x = operate();
    y = null;
    operator = evt.currentTarget.innerText;
    console.log(operator);
  }
}


/** Create equal/evaluate button */

const equal = document.querySelector("#equal");
equal.addEventListener("click", handleOperate);


function handleOperate() {
  let answer = operate();
  console.log(answer);
  x = answer;
  y = undefined;
  operator = undefined;
}

/** eval functions */

function add() {
  return Number(x) + Number(y);
}

function subtract() {
  return x - y;
}

function multiply() {
  return x * y;
}

function divide() {
  return x / y;
}

//combine all stored values to evaluate//

function operate() {

  if (operator === "+") {
    return add();
  }

  if (operator === "-") {
    return subtract();
  }

  if (operator === "*") {
    return multiply();
  }

  if (operator === "/") {
    return divide();
  }

}

