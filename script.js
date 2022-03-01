"use strict";

let bill;
let percent;
let people;
let tipTotal;
let billTotal;

function getBill() {
  bill = document.querySelector(".bill-input").value;
  if (isNaN(bill)) {
    document.querySelector(".bill-input").value = "";
    return;
  }
  calculate();
  console.log(bill);
}

function getPercent(id) {
  if (id === "custom-percent") {
    percent = document.querySelector("#custom-percent").value;
    if (isNaN(percent)) {
      document.querySelector("#custom-percent").value = "";
      return;
    }
    calculate();
    console.log(percent);
    return;
  }
  percent = document.getElementById(`${id}`).textContent;
  percent = percent.replace("%", "");
  calculate();
  console.log(percent);
}

function getPeople() {
  people = document.querySelector(".people-input").value;
  if (isNaN(people)) {
    document.querySelector(".people-input").value = "";
    return;
  }
  calculate();
  console.log(people);
}

function totalTip(bill, percent) {
  let tip = bill * (percent / 100);
  return tip.toFixed(2);
}

function tipPerPerson(bill, people, percent) {
  let tipSplit = totalTip(bill, percent) / people;
  return tipSplit;
}

function totalPerPerson(bill, people) {
  let total = bill / people;
  return total;
}

function calculate() {
  if (bill && people && percent) {
    tipTotal = tipPerPerson(bill, people, percent);
    billTotal = totalPerPerson(bill, people);
    document.querySelector("#tap").textContent = "$" + tipTotal.toFixed(2);
    document.querySelector("#ttp").textContent = "$" + billTotal.toFixed(2);

    console.log("READY");
  }
}

function reset() {
  bill = 0;
  people = 0;
  percent = 0;
  document.querySelector(".bill-input").value = "";
  document.querySelector("#custom-percent").value = "";
  document.querySelector(".people-input").value = "";
  document.querySelector("#tap").textContent = "$0.00";
  document.querySelector("#ttp").textContent = "$0.00";
}
