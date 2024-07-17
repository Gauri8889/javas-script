let emp = {
    id:parseInt(prompt("id")),
    name:prompt("name"),
    age:20,
    designation:"manager",
    package:"120000 lpa",
    array:[1,2,3],
    fun:function() {
       alert("function calling") 
    },
    account:{
        bank_name:"union Bank",
        acc_no:123456878,
        acc_balance:8000,
    }

}
console.log(emp.account.acc_balance)
console.log(emp.array[2]);
emp.fun()
console.log(emp.id)
console.log(emp.name)