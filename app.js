// Login
function createAccount(){
    window.location = "signup/signup.html"
}

// Login page process start from here
function loginData(){
    // if data is matched in local storage then increment and you will use it go forward in quiz
    var isData = 0;
    var isEmail = false
    var isPassword = false;

    

    // Login Error
    var loginError1 = document.querySelector(".loginError-1");
    var loginError2 = document.querySelector(".loginError-2");

    // local storage checking
    var getSubmitData = localStorage.getItem("data");
    getSubmitData = JSON.parse(getSubmitData)

    // Input Elements
    var checkEmail = document.querySelector(".loginEmailEl1").value;
    var checkPassword = document.querySelector(".loginEmailEl2").value;

    // checj all input fields are empty process start from here
    if(checkEmail === "" || checkPassword === ""){
        alert("ALL INPUT FIELDS ARE REQUIRED");
        return false
    }
    // checj all input fields are empty process end here


    // Loop for email end here
    for(var i = 0; i < getSubmitData.length; i++){
        if(getSubmitData[i].userEmail == checkEmail){
            isEmail = true;
            break;
        }
    }
    //  Loop for email end here

    // check correction of email process start from here
    if(isEmail){
        isData++
    }else{
        loginError1.innerHTML = "Please enter a matched email";
        loginError1.style.color = "#ff0000";
        loginError1.style.fontWeight = "bold";
        loginError1.style.paddingLeft = "5px";
        clearInputFields()
        clearErrorAfter3Sec()
        isEmail = false;
        return false
    }
    //check correction of email process ends here

    // Loop for password end here
    for(var i = 0; i < getSubmitData.length; i++){
        if(getSubmitData[i].userPassword == checkPassword){
            isPassword = true;
            break;
        }
    }
    //  Loop for password end here

    // check correction of password process start from here
    if(isPassword){
        isData++
    }else{
        loginError2.innerHTML = "Please enter a matched password";
        loginError2.style.color = "#ff0000";
        loginError2.style.fontWeight = "bold"
        loginError2.style.paddingTop = "15px"
        clearInputFields()
        clearErrorAfter3Sec()
        isPassword = false
        return false  
    }
    // check correction of password process end from here

    // Clear all input fields after submitting data
    clearInputFields()

    // If data has incremented twice user will move to quiz list page
    if(isData === 2){
        clearTimeout(stopSetTime)
        window.location = "signup/quiz-rules/quiz-rules.html"
    }

}    
// Login page process end here


// Clear All input fields after showing one error process start here
function clearInputFields(){
    var clearEl1 = document.querySelector(".loginEmailEl1").value = "";
    var clearEl2 = document.querySelector(".loginEmailEl2").value = "";
}
// Clear All input fields after showing one error process end here

// Clear error after 3 seconds when it is shown process start here
function clearError(){
    var loginError1 = document.querySelector(".loginError-1").innerHTML = "";
    var loginError2 = document.querySelector(".loginError-2").innerHTML = "";
}
var stopSetTime;
function clearErrorAfter3Sec(){
    stopSetTime = setTimeout(clearError,3000)
}
// Clear error after 3 seconds when it is shown process end here