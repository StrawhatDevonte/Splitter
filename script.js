"use strict";

function totalTip(bill, percent) {
  let tip = bill * percent;
  return tip;
}

function tipPerPerson(people) {
  let tipSplit = totalTip() / people;
  return tipSplit;
}

function totalPerPerson(bill, people) {
  let total = bill / people;
  return total;
}
