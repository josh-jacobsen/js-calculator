
calculationA = [];
calculationB = [];

display = document.getElementById("display");

var two = document.getElementById("two").addEventListener("click", function() {
  display.innerHTML += "2";
  calculationA.push(2);
  console.log(calculationA);
})

var five = document.getElementById("five").addEventListener("click", function() {
  console.log("5");
  display.innerHTML += "5";
  calculationA.push(5);
  console.log(calculationA);
})

var ten = document.getElementById("ten").addEventListener("click", function() {
  console.log("10");
})

var add = document.getElementById("add").addEventListener("click", function() {
  display.innerHTML = "";
  var toNumber = calculationA.join("");
  var number = parseFloat(toNumber);
  console.log(number);
  calculationB.push(number);
  console.log(calculationB);
  calculationA = [];
  console.log(calculationA);


})

var subtract = document.getElementById("subtract").addEventListener("click", function() {
  console.log("-");
})

var multiply = document.getElementById("multiply").addEventListener("click", function() {
  console.log("X");
})

var equals = document.getElementById("equals").addEventListener("click", function() {
  console.log("=");

})

document.getElementById("clear").addEventListener("click", function() {
  display.innerHTML = "";
  calculationA = [];
  console.log(calculationA);
})

function addition(val1, val2){
  return val1 + val2;
}

