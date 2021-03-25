// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const values = [3, 4, 5, 7, 2, 9, 3, 1, 10, 13, 4];

function isEvenNumber(number) {
  return number % 2 === 0;
}

function filterUniqueValue(value, index, values) {
  return values.indexOf(value) === index;
}

function collectUniqueValue(uniqueValues, value) {
  return uniqueValues.includes(value) ? uniqueValues : [...uniqueValues, value];
}

const result = values.filter(filterUniqueValue);
const total = values.reduce((sum, curr) => sum + curr);

console.log(result);
console.log(values.filter(isEvenNumber));
console.log(values.reduce(collectUniqueValue, []));
console.log(total);
