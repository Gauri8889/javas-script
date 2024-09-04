// let person = {
//     name: "john Dow",
//     age: 45,
// };
// let jsonperson = JSON.stringify(person);

// localStorage.setItem("person",jsonperson);

// let data = localStorage.getItem("person");

// let newdata = JSON.parse(data);
// alert(newdata.name + " " + newdata.age);

setInterval(()=>{
    
    let timee = date.toLocaleTimeString()
    let dg = document.getElementById('digital_clock')
    dg.innerHTML = timee 
},1000)
