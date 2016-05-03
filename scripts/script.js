var calculationA = "";
var calculationB = "";
var firstCalculation = true;
var ongoingCalc = false;

var display = document.getElementById("number-box");

document.getElementById("0").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "0";
    calculationA += "0"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "0";
    calculationA += "0";
  }
})

document.getElementById("1").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "1";
    calculationA += "1"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "1";
    calculationA += "1";
  }
})

document.getElementById("2").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "2";
    calculationA += "2"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "2";
    calculationA += "2";
  }
})

document.getElementById("3").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "3";
    calculationA += "3"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "3";
    calculationA += "3";
  }
})

document.getElementById("4").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "4";
    calculationA += "4"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "4";
    calculationA += "4";
  }
})

document.getElementById("5").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "5";
    calculationA += "5"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "5";
    calculationA += "5";
  }
})

document.getElementById("6").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "6";
    calculationA += "6"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "6";
    calculationA += "6";
  }
})

document.getElementById("7").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "7";
    calculationA += "7"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "7";
    calculationA += "7";
  }
})

document.getElementById("8").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "8";
    calculationA += "8"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "8";
    calculationA += "8";
  }
})

document.getElementById("9").addEventListener("click", function() {
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += "9";
    calculationA += "9"
    ongoingCalc = true;
  }
  else {
    display.innerHTML += "9";
    calculationA += "9";
  }
})

document.getElementById("plus").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "+";
    calculationA += "+";
  }
})

document.getElementById("minus").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "-";
    calculationA += "-";
  }
})

document.getElementById("*").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "*";
    calculationA += "*";
  }
})

document.getElementById("devide").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "/";
    calculationA += "/";
  }
})

document.getElementById("point").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += ".";
    calculationA += ".";
  }
})

document.getElementById("equals").addEventListener("click", function() {
  if (ongoingCalc === true) {
    var total = eval(calculationA);
    display.innerHTML = total;
    calculationA = "";
    ongoingCalc = false;
  }
})

document.getElementById("clear").addEventListener("click", function() {
  display.innerHTML = "";
  calculationA = "";
})