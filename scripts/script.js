// function getId(element) {
//   console.log(element.id);

//   for (i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", function(event) {
//       console.log(element.id);
//       console.log(element.id);
//       if (ongoingCalc === false) {
//         display.innerHTML = "";
//         display.innerHTML += element.id;
//         calculationA += element.id
//         ongoingCalc = true;
//       }
//       else {
//         display.innerHTML += element.id;
//         calculationA += element.id;
//       }
//     })
//   }
// }



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


// document.getElementById("+").addEventListener("click", function() {
//   if (ongoingCalc === true) {
//     display.innerHTML += "+";
//     calculationA += "+";
//   }
// })

// document.getElementById("-").addEventListener("click", function() {
//   if (ongoingCalc === true) {
//     display.innerHTML += "-";
//     calculationA += "-";
//   }
// })

document.getElementById("*").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "*";
    calculationA += "*";
  }
})

document.getElementById("/").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += "/";
    calculationA += "/";
  }
})

document.getElementById(".").addEventListener("click", function() {
  if (ongoingCalc === true) {
    display.innerHTML += ".";
    calculationA += ".";
  }
})

document.getElementById("=").addEventListener("click", function() {
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


