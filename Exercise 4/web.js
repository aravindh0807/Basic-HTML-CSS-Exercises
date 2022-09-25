function top_function() {
    document.documentElement.scrollTop = 0;
  }

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  function validate_name(){
    var name = document.getElementById('name').value;

    var nameErr = true;

    if(name == "") {
        printError("nameErr", "Please enter your first name");
        document.myForm.name.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Please enter a valid first name");
        }  else if(name.length <= 4 ){
            printError("nameErr", "Please enter more than 5 characters");
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
    } 
    
    else if(regexEmail.test(email) == false){
        printError("emailErr", "Please enter valid email");
    }
     else {
            printError("emailErr", "");
            emailErr = false;
        }
}

function validate_subject(){
    var sunject = document.getElementById('subject').value;

    var subjectErr = true;

    if(sunject == "") {
        printError("subjectErr", "Please enter your subject");
    }else {
            printError("subjectErr", "");
            subjectErr = false;
        }
    }


function validate_message(){
    var message = document.getElementById('message').value;

    var messageErr = true;

    if(message == "") {
        printError("messageErr", "Please enter your message");
    }else {
            printError("messageErr", "");
            messageErr = false;
        }
    }

function submit_button(){
    validate_name();
    validate_email();
    validate_subject();
    validate_message();
}