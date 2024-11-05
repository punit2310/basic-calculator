//this contain total
let userValue = document.querySelector("#value");
//it will take input from the user
let calcInput = document.querySelector("#opration");
//the user will input his number through this number buttons
let numbers = document.querySelectorAll("#numBtn");
//this button clear all calculation
let clear = document.querySelector("#clear");
//this button pop the last number
let backSpace = document.querySelector("#backSpace");
//the user will input his oprator through this oprator buttons
let oprators = document.querySelectorAll("#oprator");
//equal to
let equal = document.querySelector("#equal");
//this variable contain 1st value
let num1 = "";
//this variable contain 2nd value
let num2 = "";
//this variable contain oprator
let opr = "";
//this variable contain total
let total = "";
//this variable contain boolean value for value isEqual or not
let isEqual = false;

//give number
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calcInput.value += number.innerText;
    if (opr === "") {
      num1 += number.innerText;
      let dot = 0;
      for (let i of num1) {
        if (i === ".") {
          dot++;
        }
      }
      if (dot >= 2) {
        userValue.value = "Don't put '.' 2nd Time";
      }
    } else if (opr !== "") {
      num2 += number.innerText;
      let dot = "";
      for (let i of num2) {
        if (i === ".") {
          dot++;
        }
      }
      if (dot >= 2) {
        userValue.value = "Don't put Dot'.' 2nd Time";
      }
    }
  });
});

const oprations = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

//give oprator
oprators.forEach((oprator) => {
  oprator.addEventListener("click", () => {
    num1 = Number(num1);
    num2 = Number(num2);
    if (oprations[opr]) {
      total = oprations[opr](num1, num2);
      num1 = total;
      userValue.value = num1;
      num2 = "";
      opr = "";
    }
    calcInput.value += oprator.innerText;
    opr = oprator.innerText;
  });
});

//for backspace
backSpace.addEventListener("click", () => {
  if (["+", "-", "*", "/"].includes(calcInput.value.slice(-1))) {
    calcInput.value = calcInput.value.slice(0, -1);
    opr = "";
  } else if (num1 !== "" && num2 === "") {
    if (isEqual) {
      num1 = "";
      calcInput.value = "";
      isEqual = false;
    } else {
      calcInput.value = calcInput.value.slice(0, -1);
      num1 = String(num1);
      num1 = num1.slice(0, -1);
    }
  } else if (num1 !== "" && num2 !== "") {
    calcInput.value = calcInput.value.slice(0, -1);
    num2 = String(num2);
    num2 = num2.slice(0, -1);
  }
});

//for clear
clear.addEventListener("click", () => {
  calcInput.value = "";
  userValue.value = "";
  num1 = "";
  num2 = "";
  opr = "";
  total = "";
  isEqual = false;
});

//for equal
equal.addEventListener("click", () => {
  num1 = Number(num1);
  num2 = Number(num2);
  isEqual = true;
  if (oprations[opr]) {
    total = oprations[opr](num1, num2);
    num1 = total;
    calcInput.value = num1;
    userValue.value = "";
    num2 = "";
    opr = "";
  }
});
