// Dom :- document object model
// document.getElementById("head").innerHTML="khushi dahake"
// document.getElementById("head").style.backgroundColor="red"
// document.getElementById("head").style.padding="30px"


let first_heading = document.getElementById('head')
first_heading.style.color="white"
first_heading.style.backgroundColor="tomato"
first_heading.innerHTML="khushi dahake"


let list = document.getElementsByTagName('ul')//yek line ko target karne ke li ul ki jagah (li)kar dege
list[0].style.backgroundColor='blue'