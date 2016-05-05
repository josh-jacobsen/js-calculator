var calculationA = "";
var ongoingCalc = false;

function number(element) {
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
    if (total.toString().length < 4) {
      display.innerHTML = total;
    } else {
      var sansDecimal = total.toFixed(4);
      display.innerHTML = sansDecimal;
    }
    calculationA = "";
    ongoingCalc = false;
  }
}

function ac(element) {
  display.innerHTML = "";
  calculationA = "";
}

