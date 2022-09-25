function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
  

function validate_name(){
    var name = document.getElementById('name').value;

    var nameErr = true;

    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Please enter a valid name");
        }  else if(name.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_cvv(){
    var cvv = document.getElementById('cvv').value;

    var cvvErr = true;

    var regexcvv = /^\d{3}$/; 
    if(cvv == "") {
        printError("cvvErr", "**Mandatory");
    } 
    
    else if(regexcvv.test(cvv) == false){
        printError("cvvErr", "Invalid CVV");
        }
     else {
            printError("cvvErr", "");
            cvvErr = false;
        }
}
function validate_cardnumber(){
    var cardnumber = document.getElementById('cardnumber').value;

    var cardnumberErr = true;

    var regexcardnumber = /^\d{16}$/; 
    if(cardnumber == "") {
        printError("cardnumberErr", "**Mandatory");
    } 
    
    else if(regexcardnumber.test(cardnumber) == false){
        printError("cardnumberErr", "Invalid Card Number");
           }
     else {
            printError("cardnumberErr", "");
            cardnumberErr = false;
        }
}
function validate_expdate(){
    var user_date = document.getElementById('expdate').value
   
    var today = new Date();

    var user_year = new Date(user_date).getFullYear();
    var user_month = new Date(user_date).getMonth()+1;
    var user_day = new Date(user_date).getDate();

    var expdateErr = true;

    if(user_date == "") {
               printError("expdateErr", "**Mandatory");
            } 

     else if (user_year < today.getFullYear()){
         printError("expdateErr", "Year must be greater or equal");
        } 
    else if (user_month <= today.getMonth()+1 && user_day <= today.getDate() ){
        printError("expdateErr", "Invalid date");
    } 
     else{
        printError("expdateErr","");
        expdateErr = false;
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
    
    function submit_button(){
        validate_name();
        validate_cvv();
        validate_cardnumber();
        validate_expdate();
        validate_checkbox();
}
