// Rest parameter
function addition(...num){
    console.log(num);
    var sum = 0;
    for(let i = 0; i< num.length;i++){
        sum +=num[i];
    }
    return sum;
}
console.log(addition(3,4,5,6,7));
console.log(addition(3,4));
console.log(addition(3,4,5,6,7,8,10,46));