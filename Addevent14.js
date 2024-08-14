let mybutton = document.getElementById("btn");

//systax addelementbyid (event,fuction)
mybutton.addEventListener("click",function(){
    document.getElementById("demo").innerHTML = "Hello";
    console.log('success');

});
//document.getElementById("btn").addEventListener("click",display);
mybutton.addEventListener("click",display);
function display(){
    document.getElementById("demo1").innerHTML = "World";
    console.log('success');
} 

mybutton.addEventListener("mouseenter",data);

function data(){
    document.getElementById("demo2").innerHTML = Math.random();

};

mybutton.removeEventListener("click",display);
//addevent parameter three types
//event
//display
//useCapture) 3rd parameter is option by defalt