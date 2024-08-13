let mydata = `
Hello everyone how are
you all
how you all are 
understanding
javascript!!!!`;

let x = "hello everyone how you doing";

let newString = x.slice(4,12);
newString = x.slice(5);
newString = x.slice(-10,-5);
console.log(newString);

newString = x.substring(4,18);

console.log(x[2]);
console.log(x.at(4));
console.log(x.charAt(6));
console.log(x.charCodeAt(3));

// x = "hello" + " " + "everyone";

let y = x.concat(" ", "everyone");


document.getElementById("Demo").innerHTML = y;

//
function display(){
    let data = document.getElementById("demo1");
    data.style.backgroundColor = "pink";
    data.style.border = "3px solid blue"
    data.innerHTML = `
    <table>
    <tr>
    <th>Name</th>
    <th>city</th>
        <th>Contact No.</th>
        </tr>
     <tr>
     <td>join Doe</td>
      <td>Bhopal</td>
       <td>8889684316</td>
       </tr>
        <tr>
     <td>join Doe</td>
      <td>Bhopal</td>
       <td>8889684316</td>
       </tr>
    `
}