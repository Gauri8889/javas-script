import { name, age } from " ./module selector.js";
import data from "./module selector.js"

console.log(name);
console.log(age);

//document.getElementById("demo").innerHTML = `My name is ${name} and i am ${age} year old`;

document.getElementById("demo").innerHTML = data();