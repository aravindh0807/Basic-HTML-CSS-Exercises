function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
}
  

function validate_fname(){
    var name = document.getElementById('firstname').value;

    var nameErr = true;

    if(name == "") {
        printError("nameErr", "Please enter your first name");
        document.myForm.firstname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Please enter a valid first name");
            document.myForm.firstname.focus()
        }  else if(name.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
            document.myForm.firstname.focus()
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_lname(){
    var lname = document.getElementById('lastname').value;

    var nameErr = true;

    if(lname == "") {
        printError("nameErr", "Please enter your last name");
        document.myForm.lastname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) == false) {
            printError("nameErr", "Please enter a valid last name");
            document.myForm.lastname.focus()
        }  else if(lname.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
            document.myForm.lastname.focus()
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}
//Mother Name Validation
function validate_mname(){
    var mname = document.getElementById('mothername').value;

    var mnameErr = true;

    if(mname == "") {
        printError("mnameErr", "Please enter mother name");
        document.myForm.mname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(mname) == false) {
            printError("mnameErr", "Please enter a valid name");
            document.myForm.mname.focus()
        }  else if(mname.length <= 4 ){
            printError("mnameErr", "Please enter more than 5 characters");
            document.myForm.mname.focus()
        }else {
            printError("mnameErr", "");
            mnameErr = false;
        }
    }
}
//date Validation
function validate_date(){
    var user_date = document.getElementById('date').value
   
    var today = new Date();

    var user_year = new Date(user_date).getFullYear();
    var user_month = new Date(user_date).getMonth()+1;
    var user_day = new Date(user_date).getDate();

    var dateErr = true;

    console.log(user_year == today.getFullYear());
         console.log(user_month > today.getMonth()+1);
         
    if(user_date == "") {
        printError("dateErr", "Please fill your birth date");
        document.myForm.date.focus()
     } 
     else if (user_year > today.getFullYear()){
        printError("dateErr", "Year must be lesser or equal to current year");
        document.myForm.date.focus()
       } 
     else if(user_year == today.getFullYear() && user_month > today.getMonth()+1){
         printError("dateErr", "Month must be lesser or equal to current month")
         document.myForm.date.focus()
         
     }
     else if(user_year == today.getFullYear() && user_month == today.getMonth()+1 && user_day > today.getDate()){
         printError("dateErr", "Date must be lesser or equal to today")
         document.myForm.date.focus()
     }
     else{
        printError("dateErr","");
        dateErr = false;
     }
    }
    //Country Validation
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
    //Email Validation 
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
    
    function validate_confirmpassword(){
        var password = document.getElementById('password').value;
        var confirmpassword = document.getElementById('confirmpassword').value;
    
        var confirmpasswordErr = true;
    
        if(confirmpassword == ""){
            printError("confirmpasswordErr", "Please enter your confirm password");
            document.myForm.confirmpassword.focus()
        }
        else if(password != confirmpassword){
            printError("confirmpasswordErr", "Doesn't match with password");
            document.myForm.confirmpassword.focus()
            }
        
        else {
            printError("confirmpasswordErr", "");
            confirmpasswordErr = false;
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

    function validate_checkbox(){
        var checkbox = document.getElementById('checkbox');

        var checkboxErr = true;

        if(checkbox.checked){
            printError("checkboxErr","");
            checkboxErr = false;
            
        }
            else{
                printError("checkboxErr","Please check the box");
            }
        }

            function validate_gender(){
                var male = document.getElementById('male');
                var female = document.getElementById('female');

                genderErr =true;

                if (male.checked || female.checked){
                    printError("genderErr","");
                    
                }
                else{
                    printError("genderErr","Please select a gender");
                }
            }

            var code;
            function createCaptcha() {
              //clear the contents of captcha div first 
              document.getElementById('captcha').innerHTML = "";
              var charsArray =
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
              var lengthOtp = 6;
              var captcha = [];
              for (var i = 0; i < lengthOtp; i++) {
                //below code will not allow Repetition of Characters
                var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
                if (captcha.indexOf(charsArray[index]) == -1)
                  captcha.push(charsArray[index]);
                else i--;
              }
              var canv = document.createElement("canvas");
              canv.id = "captcha";
              canv.width = 100;
              canv.height = 50;
              var ctx = canv.getContext("2d");
              ctx.font = "25px Georgia";
              ctx.strokeText(captcha.join(""), 0, 30);
              //storing captcha so that can validate you can save it somewhere else according to your specific requirements
              code = captcha.join("");
              document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
            }
            
            function validateCaptcha() {
              event.preventDefault();
              debugger
              if (document.getElementById("cpatchaTextBox").value == code) {
                printError("captchaErr", "")
              }else{
                printError("captchaErr", "Invalid Captcha, try again")
                createCaptcha();
              }
            }

        function submit_button(){
            validate_gender();
            validate_checkbox();
            validateCaptcha();
            validate_fname();
            validate_mname();
            validate_date();
            validate_country();
            validate_email();
            validate_password();
            validate_confirmpassword();
            validate_number();
        } 

        
       
        



