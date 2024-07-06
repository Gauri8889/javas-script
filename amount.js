let num = parseInt(prompt("Enter positive value"))
console.log(num);
if(num>100 && num<=500)
    {
        alert("star*10")
    }
    else if(num>500 && num<=1000){
        alert("shopping")
    }
    else if(num>1000 && num<=10000){
        alert("trip")

    }
    else{
        alert("paise nhi hai")
    }