function add(num1, num2) {
  res = num1 + num2;
  return res;
}
function subtract(num1, num2) {
  res = num1 - num2;
  return res;
}
function multiply(num1, num2) {
  res = num1 * num2;
  return res;
}
function devide(num1, num2) {
  res = num1 / num2;
  return res;
}

function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return devide(x, y);
    default:
      "problemoo";
  }
}

function append(e) {
  if (input.textContent === "0") {
    input.textContent = e.target.textContent;
  } else {
    input.textContent += e.target.textContent;
  }
}

function clear() {
  input.textContent = "0";
  result.textContent = "Result is:";
  value1 = 0;
  value2 = 0;
  value3 = 0;
  operSig = [];
}

let input = document.querySelector(".display");
let clearBtn = document.querySelector(".clear");
let buttons = document.querySelectorAll(".numb");

input.textContent = "0";
let buttonsArr = [...buttons];

buttonsArr.forEach((button) => button.addEventListener("click", append));
clearBtn.addEventListener("click", clear);

let mathSig = document.querySelectorAll(".oper");
let mathSigArr = [...mathSig];
mathSigArr.forEach((sign) => sign.addEventListener("click", push));

let value1;
let value2;
let value3;
let operSig = [];

function push(e) {
  operSig.push(e.target.textContent);

  if (operSig.length === 1) {
    value1 = input.textContent;
    input.textContent = 0;
  } else if (operSig.length <= 2) {
    value2 = input.textContent;
    if (operSig[1] === "*" || operSig[1] === "/") {
      value3 = value2;
      value2 = 0;
      input.textContent = 0;
    } else {
      value1 = operate(+value1, +value2, operSig[0]);
      operSig.shift(operSig[0]);
      value2 = 0;
      input.textContent = 0;
    }
  } else if (operSig.length === 3) {
    value2 = input.textContent;
    if (operSig[2] === "*" || operSig[2] === "/") {
      value3 = operate(+value2, +value3, operSig[1]);
      operSig.splice(1, 1);
      value2 = 0;
      input.textContent = 0;
    } else if (operSig[2] === "+" || operSig[2] === "-") {
      value3 = operate(+value2, +value3, operSig[1]);
      value1 = operate(+value1, +value3, operSig[0]);
      operSig.splice(0, 2);
      value2 = 0;
      value3 = 0;
      input.textContent = 0;
    }
  }
}

let result = document.querySelector(".result");
function calculate() {
  if (
    value3 !== null &&
    operSig.length === 2 &&
    (operSig[1] === "*" || operSig[1] === "/")
  ) {
    value3 = operate(+value3, +input.textContent, operSig[1]);
    return (result.textContent += operate(+value1, +value3, operSig[0]));
  } else if (operSig.length === 2) {
    value2 = operate(+value2, +input.textContent, operSig[1]);
    return (result.textContent += operate(+value1, +value2, operSig[0]));
  } else if (value2 === true) {
    return (result.textContent += operate(+value1, +value2, operSig[0]));
  } else {
    result.textContent += operate(+value1, +input.textContent, operSig[0]);
  }
}
let equl = document.querySelector(".eq");
equl.addEventListener("click", calculate);
