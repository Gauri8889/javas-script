const array1 = ["BMW", "Audi","Maruti", "Marcedes", "Nexon"];

console.log(array1);
array1.sort();
console.log(array1);


//reverse value :-alphabet ke hisab se chlta hai as a string trit karta hai
array1.reverse();
console.log(array1);

// compare fuction (ascending order)
const number = [40, 500, 0, 340, 7,100];
number.sort(function(a,b){return a-b});
console.log(number);

// descending order
number.sort(function(a,b){return b-a});
console.log(number);



document.getElementById("demo").innerHTML = number;