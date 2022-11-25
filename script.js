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
  result.textContent = "0000";
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
let operSig;

function push(e) {
  value1 = input.textContent;
  operSig = e.target.textContent;
  input.textContent = "0";
}

let result = document.querySelector(".result");

let equl = document.querySelector(".eq");
equl.addEventListener(
  "click",
  () => (result.textContent = operate(+value1, +input.textContent, operSig))
);
