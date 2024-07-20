// function table(n){
  
//     for(let i=1; i<=10;i++){
//         console.log(n*i)
//     }
// }
// let t =parseInt(prompt("enter your table"));
// table(t)

function task(c)
{
        if(c>=1 && c<=10)
        {
            
       for(let i=1;i<=10;i++)
        {
            console.log(i)
        }
       
    }
    else if(c>=11 && c<=20)
    {
        for(let i=20;i>=1;i--)
        {
            console.log(i)
        }
    }
    else("invalide value")
}
let c =parseInt(prompt("enter your no."))
task(c)