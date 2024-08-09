// let x = Math.sqrt(9);
// console.log(x);
// //alert(x);
// document.getElementById("demo").innerHTML = x;

//sqrt return square root of a number

let x = Math.sqrt(9);

//sign return 1 if number is positive, -1 if number is negative,

//0 if number is 0

x = Math.sign(787);

//return power of a number (number,power)
x = Math.pow(4,3)

//return absolute value always positive
x = Math.abs(-45);


// return the above or higher value
x= Math.ceil(6.8);

//return roundoff value
x = Math.round(6.5);

//return lower value
x = Math.floor(6.9)


// return minimum value
x =  Math.min(2,34,5,67,8,87);


//return maximum value
x = Math.max(23,45,67,98,56,54)


// removes the decimal numbers and give the integer value
x = Math.trunc(4.5667);

//Random number between 0(inclusive) to 1(exclusive)
x = Math.random(); 
x = Math.random() * 100; 
x = Math.floor(Math.random() *100);

console.log(x);

//alert(x);

document.getElementById("demo").innerHTML = x;