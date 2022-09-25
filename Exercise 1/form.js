function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_fname(){
    var fname = document.getElementById('fname').value;

    var nameErr = true;

    if(fname == "") {
        printError("nameErr", "Please enter your name");
        document.myForm.fname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) == false) {
            printError("nameErr", "Please enter a valid name");
            document.myForm.fname.focus()
        }  else if(fname.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
            document.myForm.fname.focus()
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}


function validate_lname(){
    var lname = document.getElementById('lname').value;

    var lastnameErr = true;

    if(lname == "") {
        printError("lastnameErr", "Please enter your last name");
        document.myForm.lname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) == false) {
            printError("lastnameErr", "Please enter a valid lname");
            document.myForm.lname.focus()
        }  else if(lname.length <= 4 ){
            printError("lastnameErr", "Please enter more than 5 lcharacters");
            document.myForm.lname.focus()
        }else {
            printError("lastnameErr", "");
            lastnameErr = false;
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


function validate_number(){
    var number = document.getElementById('number').value;

    var numberErr = true;

    var regexNumber = /^\d{10}$/; 
    if(number == "") {
        printError("numberErr", "Please enter your number");
        document.myForm.number.focus()
    } 
    
    else if(regexNumber.test(number) == false){
        printError("numberErr", "Please enter valid number");
        document.myForm.number.focus()    }
     else {
            printError("numberErr", "");
            numberErr = false;
        }
}


function validate_billing(){
    var add = document.getElementById('add').value;

    var addErr = true;

    if(add == "") {
        printError("addErr", "Please enter your billing address");
        document.myForm.billing.focus()
    } else {
        var regexBill = /^[a-zA-Z\s]+$/;                
        if(regexBill.test(add) == false) {
            printError("addErr", "Please enter a valid address");
            document.myForm.billing.focus()
        }  else {
            printError("addErr", "");
            addErr = false;
        }
    }    
}


function validate_address(){
    var add1 = document.getElementById('add1').value;

    var add1Err = true;

    if(add1 == "") {
        printError("add1Err", "Please enter your address");
        document.myForm.address.focus()
    } else {
        var regexAdd1 = /^[a-zA-Z\s]+$/;                
        if(regexAdd1.test(add1) == false) {
            printError("add1Err", "Please enter a valid address");
            document.myForm.address.focus()
        }  else {
            printError("add1Err", "");
            add1Err = false;
        }
    }    

}

function validate_city(){
    var city = document.getElementById('city').value;

    var cityErr = true;

    if(city == "") {
        printError("cityErr", "Please enter your city");
        document.myForm.city.focus()
    } else {
        var regexcity = /^[a-zA-Z\s]+$/;                
        if(regexcity.test(city) == false) {
            printError("cityErr", "Please enter a valid city");
            document.myForm.city.focus()
        }  else {
            printError("cityErr", "");
            cityErr = false;
        }
    }  

}

function validate_state(){
    var state = document.getElementById('state').value;

    var stateErr = true;

    if(state == "") {
        printError("stateErr", "Please enter your state");
        document.myForm.state.focus()
    } else {
        var regexstate = /^[a-zA-Z\s]+$/;                
        if(regexstate.test(state) == false) {
            printError("stateErr", "Please enter a valid state");
            document.myForm.state.focus()
        }  else {
            printError("stateErr", "");
            stateErr = false;
        }
    }    

}

function validate_zipcode(){
    var zip = document.getElementById('zip').value;

    var zipErr = true;

    if(zip == "") {
        printError("zipErr", "Please enter your zip");
        document.myForm.zipcode.focus()
    } else {
        var regexzip =/^\d{6}$/;                
        if(regexzip.test(zip) == false) {
            printError("zipErr", "Please enter a valid zip");
            document.myForm.zipcode.focus()
        }  else {
            printError("zipErr", "");
            zipErr = false;
        }
    }   
}

function validate_country(){

    var countryErr = true;

    if(document.getElementById('country').value == "country") {
        printError("countryErr", "Please select your country");
        document.myForm.country.focus()
    }  else {
        printError("countryErr", "");
        countryErr = false;
    }
}

function reset(){
    document.getElementById('reset').resetForm();
}