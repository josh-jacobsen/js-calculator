var calculationA = "";
var calculationB = "";
var firstCalculation = true;
var ongoingCalc = false;

var display = document.getElementById("number-box");

var numbers = document.getElementsByClassName("number");

function number(element) {
  console.log(element.id);
  if (ongoingCalc === false) {
    display.innerHTML = "";
    display.innerHTML += element.id;
    calculationA += element.id
    ongoingCalc = true;
  }
  else {
    display.innerHTML += element.id;
    calculationA += element.id;
  }
}


function action(element) {
  if (ongoingCalc === true) {
    display.innerHTML += element.id;
    calculationA += element.id;
  }
}

function execute(element) {
  if (ongoingCalc === true) {
    var total = eval(calculationA);
    console.log(total);
    console.log(total.toString().length);
    display.innerHTML = total;
    calculationA = "";
    ongoingCalc = false;
  }
}

