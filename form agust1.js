function saveData(){
   let name = document.getElementById('Name').value;
   let Age = document.getElementById('age').value;
   let contect = document.getElementById('contect').value;
   let email = document.getElementById('email').value;
   let pwd = document.getElementById('pwd').value;
   let conformpwd = document.getElementById('conform pwd').value;

   if(name == ""){
    alert("please fill name files")
   document.getElementById('Name').focus()
   return false;
   }
   else if(Age == ""){
    alert("please fill age files")
    document.getElementById('age').focus()
    return false;
   }
   else if(contect == ""){
    alert("please fill contect")
    document.getElementById('contect').focus()
    return false;
   }
   else if(email == ""){
    alert("please fill email")
    document.getElementById('email').focus()
        return false;
   }
   else if(pwd == ""){
    alert("please fill pwd")
    document.getElementById('pwd').focus()
    return false;
   }
   else if(conformpwd == ""){
    alert("please fill conformpwd")
    document.getElementById('conformpwd').focus()
    return false;
   }
}