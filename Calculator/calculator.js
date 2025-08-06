const getDisplay = document.getElementById("display");
const getHistory = document.getElementById("history");
let firstOperand;
let secondOperand;
let firstDisplayResult = true;
let historyResult = true;

function number(num) {
  if (getDisplay.innerText == "0") {
    getDisplay.innerText = " ";
  }
  if (firstDisplayResult == false) {
    getDisplay.innerText = "";
    firstDisplayResult = true;
  }
  // if (historyResult == false) {
  //   getHistory.innerText = "";
  //   historyResult = true;
  // }
  getDisplay.innerText += num;
}

function clearScreen() {
  getDisplay.innerText = "0";
  getHistory.innerText = "";
}
function clearDisplay() {
  getDisplay.innerText = "0";
}

function operatorSign(opera) {
  getHistory.innerText = getDisplay.innerText + opera;
  firstOperand = getDisplay.innerText;
  firstDisplayResult = false;
  // getDisplay.innerText = "";
}
function equate(submit) {
  secondOperand = getDisplay.innerText;

  if (getHistory.innerText.endsWith("+")) {
    getDisplay.innerText = Number(firstOperand) + Number(secondOperand);
    getHistory.innerText = `${firstOperand}+${secondOperand}= `;
  } else if (getHistory.innerText.endsWith("*")) {
    getDisplay.innerText = Number(firstOperand) * Number(secondOperand);
    getHistory.innerText = `${firstOperand}*${secondOperand}= `;
  } else if (getHistory.innerText.endsWith("/")) {
    getDisplay.innerText = Number(firstOperand) / Number(secondOperand);
    getHistory.innerText = `${firstOperand}/${secondOperand}= `;
  } else if (getHistory.innerText.endsWith("-")) {
    getDisplay.innerText = Number(firstOperand) - Number(secondOperand);
    getHistory.innerText = `${firstOperand}-${secondOperand}= `;
  }
  firstDisplayResult = false;
  // historyResult = false;

  // getHistory.innerText = "";
}

function singleOperatorKey(single) {
  let result = getDisplay.innerText;

  if (single == "%") {
    getDisplay.innerText = Number(result) / 100;
    getHistory.innerText = `(${result})/100 `;
  } else if (single == "1/x") {
    getDisplay.innerText = 1 / Number(result);
    getHistory.innerText = `1/(${result}) `;
  } else if (single == "+/-") {
    getDisplay.innerText = -Number(result);
  } else if (single == "x²") {
    getDisplay.innerText = result * result;
    getHistory.innerText = `sqr(${result})`;
  } else if (single == "2√x") {
    getDisplay.innerText = Math.sqrt(Number(result));
    getHistory.innerText = `√(${result})`;
  }
}

function deleteKey() {
  // let backSpace = getDisplay.innerText;
  getDisplay.innerText = getDisplay.innerText.slice(0, -1);
  if (getDisplay.innerText == "") {
    getDisplay.innerText = "0";
  }
}
