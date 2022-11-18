// Signup
function submitData(){
    // Local storage array
    var data = [];

    // if user fill one fill field correctly so correct variable will increment and if correct will be three user will go to next page
    var correct = 0;

    // Error para show
    var error1 = document.querySelector("#fir-error");
    var error2 = document.querySelector("#sec-error");
    var error3 = document.querySelector("#thi-error");

    // Input Fields
    var firstEL = document.querySelector(".element-1").value;
    var secondEL = document.querySelector(".element-2").value;
    var thirdEL = document.querySelector(".element-3").value;

    // Regex
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var passwordRegex =  /^[A-Za-z]\w{7,}$/;

    // local storage
    var check = localStorage.getItem("data");

    // Email checking process start here
    if(firstEL !== ""){
        if(emailRegex.test(firstEL)){
            correct++
        }else{
            error1.innerHTML = "Please enter a valid email"
            clearAllError()
            clearInputFields()
            return false
        }

    }else{
        alert("Please fill all input fields")
        return false
    }
        // Email checking process end here
    
    
    // Password checking process start here
    if(secondEL !== ""){
        if(passwordRegex.test(secondEL)){
            correct++
        }else{
            error2.innerHTML = "Please enter a strong password"
            clearInputFields()
            return false
        }

    }else{
        alert("Please fill all input fields")
        return false;
    }
    // Password checking process end here
    

    // Confirm password checking process start here
    if(thirdEL !== ""){
        if(thirdEL === secondEL){
            correct++
        }else{
            error3.innerHTML = "Please enter a matched password"
            error3.style.paddingTop = "15px"
            clearInputFields()
            return false
        }

    }else{
        alert("Please fill all input fields")
        return false;
    }
    // Confirm password checking process end here

    //Making Objects of all user data process start from here
    var userData = {
        userEmail : firstEL,
        userPassword : secondEL,
        userConfirmPass : thirdEL
    }
    if(correct === 3){
        if(check){
            check = JSON.parse(check);
            data = check
        }
        data.push(userData);
        userData = JSON.stringify(data);
        localStorage.setItem("data",userData)
    }
    //Making Objects of all user data process end here


    // If user fills all data data correctly user will move to next page
    if(correct === 3){
        window.location.replace("quiz-rules/quiz-rules.html")
        // clearTimeout(stopSetTime)
    }

}

// For Clear InputFields
function clearInputFields(){
    var firstElClear = document.querySelector(".element-1").value = "";
    var secondElClear = document.querySelector(".element-2").value = "";
    var thirdElClear = document.querySelector(".element-3").value = "";
}

// For Clear All Error
function clearError(){
        var error1Clear = document.querySelector("#fir-error").innerHTML = "";
        var error2Clear = document.querySelector("#sec-error").innerHTML = "";
        var error3Clear = document.querySelector("#thi-error").innerHTML = "";
}
function clearAllError(){
    var stopSetTime = setTimeout(clearError,3000)
}
