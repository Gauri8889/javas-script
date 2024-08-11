let x;

x = Math.random()*10;
x = Math.floor(Math.random() * 40);

function randomnum(min,max){
return Math.floor(Math.random() * (max - min + 1) + min);
}

let result  = randomnum(30,120);
const array = ["BMW", "ford", "kia", "Tata", "Suzuki","Toyota"];

const stringArr = array.toString();
console.log(stringArr);

const myarray = array.join(' *');
console.log(myarray);


console.log(array[3]);
console.log(array.at(3));

console.log(array);
array.push("maruti")
array.pop();

//const newarray = array.shift();
const newarray = array.unshift("Nano")
console.log(newarray);
document.getElementById("demo").innerHTML = newarray;

//unshift and push metheds of array  return the length  of the update array 
//push adds element to the end of array and unshift adds element to the start

//pop and 
console.log(result);
document.getElementById("demo").innerHTML = result;