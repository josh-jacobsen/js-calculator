
calculationA = "";
calculationB = "";
inProgress = false;

display = document.getElementById("display");

document.getElementById("zero").addEventListener("click", function() {
  display.innerHTML += "0";
  calculationA += "0";
  console.log(calculationA);
})

document.getElementById("one").addEventListener("click", function() {
  display.innerHTML += "1";
  calculationA += "1";
  console.log(calculationA);
})

document.getElementById("two").addEventListener("click", function() {
  display.innerHTML += "2";
  calculationA += "2";
  console.log(calculationA);
})

document.getElementById("three").addEventListener("click", function() {
  display.innerHTML += "3";
  calculationA += "3";
  console.log(calculationA);
})

document.getElementById("four").addEventListener("click", function() {
  display.innerHTML += "4";
  calculationA += "4";
  console.log(calculationA);
})

document.getElementById("five").addEventListener("click", function() {
  display.innerHTML += "5";
  calculationA += "5";
  console.log(calculationA);
})

document.getElementById("six").addEventListener("click", function() {
  display.innerHTML += "6";
  calculationA += "6";
  console.log(calculationA);
})

document.getElementById("seven").addEventListener("click", function() {
  display.innerHTML += "7";
  calculationA += "7";
  console.log(calculationA);
})

document.getElementById("eight").addEventListener("click", function() {
  display.innerHTML += "8";
  calculationA += "8";
  console.log(calculationA);
})

document.getElementById("nine").addEventListener("click", function() {
  display.innerHTML += "9";
  calculationA += "9";
  console.log(calculationA);
})

document.getElementById("plus").addEventListener("click", function() {
  display.innerHTML += "+";
  calculationA += "+";
})

document.getElementById("minus").addEventListener("click", function() {
  display.innerHTML += "-";
  calculationA += "-";
})

document.getElementById("multiply").addEventListener("click", function() {
  display.innerHTML += "x";
  calculationA += "*";
})

document.getElementById("devide").addEventListener("click", function() {
  display.innerHTML += "/";
  calculationA += "/";
})

document.getElementById("equals").addEventListener("click", function() {
  console.log("=");
  var total = eval(calculationA);
  console.log(total);
  display.innerHTML = total;
  calculationA = "";
})

document.getElementById("clear").addEventListener("click", function() {
  display.innerHTML = "";
  calculationA = "";
  console.log(calculationA);
})





