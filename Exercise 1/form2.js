function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var add = document.getElementById('add').value;
    var add1 = document.getElementById('add1').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var country = document.getElementById('country').value;


    var nameErr = lastnameErr = emailErr = numberErr = addErr = add1Err = cityErr = stateErr = zipErr = countryErr= true;
    
    
    if(fname == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) == false) {
            printError("nameErr", "Please enter a valid name");
        }  else if(fname.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(lname == "") {
        printError("lastnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) == false) {
            printError("lastnameErr", "Please enter a valid lname");
        }  else if(lname.length <= 4 ){
            printError("lastnameErr", "Please enter more than 5 lcharacters");
        }else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/; 
    if(email == "") {
        printError("emailErr", "Please enter your email");
    } 
    
    else if(regexEmail.test(email) == false){
        printError("emailErr", "Please enter valid email");
    }
     else {
            printError("emailErr", "");
            emailErr = false;
        }

        var regexNumber = /^\d{10}$/; 
        if(number == "") {
            printError("numberErr", "Please enter your number");
        } 
        
        else if(regexNumber.test(number) == false){
            printError("numberErr", "Please enter valid number");
        }
         else {
                printError("numberErr", "");
                numberErr = false;
            }

            if(add == "") {
                printError("addErr", "Please enter your billing address");
            } else {
                var regexBill = /^[a-zA-Z\s]+$/;                
                if(regexBill.test(add) == false) {
                    printError("addErr", "Please enter a valid address");
                }  else {
                    printError("addErr", "");
                    addErr = false;
                }
            }    
            
            if(add1 == "") {
                printError("add1Err", "Please enter your address");
            } else {
                var regexAdd1 = /^[a-zA-Z\s]+$/;                
                if(regexAdd1.test(add1) == false) {
                    printError("add1Err", "Please enter a valid address");
                }  else {
                    printError("add1Err", "");
                    add1Err = false;
                }
            }    


            if(city == "") {
                printError("cityErr", "Please enter your city");
            } else {
                var regexcity = /^[a-zA-Z\s]+$/;                
                if(regexcity.test(city) == false) {
                    printError("cityErr", "Please enter a valid city");
                }  else {
                    printError("cityErr", "");
                    cityErr = false;
                }
            }    

            if(state == "") {
                printError("stateErr", "Please enter your state");
            } else {
                var regexstate = /^[a-zA-Z\s]+$/;                
                if(regexstate.test(state) == false) {
                    printError("stateErr", "Please enter a valid state");
                }  else {
                    printError("stateErr", "");
                    stateErr = false;
                }
            }    

            if(zip == "") {
                printError("zipErr", "Please enter your zip");
            } else {
                var regexzip =/^\d{6}$/;                
                if(regexzip.test(zip) == false) {
                    printError("zipErr", "Please enter a valid zip");
                }  else {
                    printError("zipErr", "");
                    zipErr = false;
                }
            }   
            
                           
                if(country == "country") {
                    printError("countryErr", "Please select your country");
                }  else {
                    printError("countryErr", "");
                    countryErr = false;
                }
             
    
    
    if(nameErr == lastnameErr == emailErr == numberErr == addErr == add1Err == cityErr == stateErr == zipErr == countryErr == true) {
       return false;
    } else {
       
        console.log("Fine");
    }
}


document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById("myForm").submit();

});