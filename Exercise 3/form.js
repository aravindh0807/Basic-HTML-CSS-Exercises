function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validate_name(){
    var name = document.getElementById('name').value;

    var nameErr = true;

    if(name == "") {
        printError("nameErr", "Please enter your name");
        document.myForm.name.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Please enter a valid name");
            document.myForm.name.focus()
        }  else if(name.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
            document.myForm.name.focus()
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_email(){
    var email = document.getElementById('email').value;

    var emailErr = true;

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/; 
    if(email == "") {
        printError("emailErr", "Please enter your email");
        document.myForm.email.focus()
    } 
    
    else if(regexEmail.test(email) == false){
        printError("emailErr", "Please enter valid email");
        document.myForm.email.focus()
    }
     else {
            printError("emailErr", "");
            emailErr = false;
        }
}

function validate_username(){
    var username = document.getElementById('username').value;

    var usernameErr = true;

    var regexusername = /^[a-zA-Z0-9]*$/; 
    if(username == "") {
        printError("usernameErr", "Please enter your username");
        document.myForm.username.focus()
    } 
    
    else if(regexusername.test(username) == false){
        printError("usernameErr", "Please enter valid username");
        document.myForm.username.focus()
    }
     else {
            printError("usernameErr", "");
            usernameErr = false;
        }
}

function validate_password(){
    var password = document.getElementById('password').value;

    var passwordErr = true;

    if(password == ""){
        printError("passwordErr", "Please enter your password");
    }else if(password.length <= 8 ){
        printError("passwordErr", "Please enter more than 8 characters");
        document.myForm.password.focus()
    } 
    
    else {
        printError("passwordErr", "");
        passwordErr = false;
    }
}

function validate_cpassword(){
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var cpasswordErr = true;

    if(cpassword == ""){
        printError("cpasswordErr", "Please enter your confirm password");
        document.myForm.cpassword.focus()
    }
    else if(password != cpassword){
        printError("cpasswordErr", "Doesn't match with password");
        document.myForm.cpassword.focus()
        }
    
    else {
        printError("cpasswordErr", "");
        cpasswordErr = false;
    }
}

function submit_button(){
    validate_name();
    validate_email();
    validate_username();
    validate_password();
    validate_cpassword();
}


