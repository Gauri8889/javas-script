let employee = [
    {
        emp_name:"Gauri",
        emp_age:20,
    },
    {
        emp_name:"khushi",
        emp_age:24,
    },
    {
        emp_name:"ankita",
        emp_age:23
    },
    {
        emp_name:"ram",
        emp_age:28
    },
    {
        emp_name:"shyam",
        emp_age:26
    },

]
//let y = employee.map((p)=>{return p.emp_name})
//console.log(y)

//let p = employee.filter((p)=>{return p>0})
// let y = employee.map((p)=>{return p})
//console.log(p)

let ob = {emp_name:"ankita",emp_age:23}
employee.push(ob)
console.log(ob)