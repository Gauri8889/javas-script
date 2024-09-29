function registration(){
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email'.value);
    let mobile = document.querySelector('.mobile').value;
    let password = document.querySelector('password').value;
    let cpassword = document.querySelector('cpassword').value;

    if(name == ""){
        window.alert("please enter your name");
        document.querySelector('name').focus();
        return false;
    }
    else if(email == ""){
        window.alert("please enter your email");
        return false;
    }
    else if(mobile == ""){
        window.alert("please enter your mobile");
        return false;
    }
    else if(password == ""){
        window.alert("please enter your mobile");
        return false;
    }
    else if(cpassword == ""){
        window.alert("please enter your cpassword");
        return false;
    }
    else if(!email.includes('@')){
        window.alert("please include  @ in email field");
        document.querySelector('.email').focus();
        return false;
    }
}