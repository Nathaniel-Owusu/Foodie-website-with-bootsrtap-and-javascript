const myForm = document.getElementById("myForm");
const firstName = document.getElementById("formGroupExampleInput");
const lastName = document.getElementById("formGroupExampleInput2");
const userName = document.getElementById("formGroupExampleInput3");
const email = document.getElementById("inputEmail4");
const firstNumber = document.getElementById("formGroupExampleInput4");
const secondNumber = document.getElementById("formGroupExampleInput5");
const password = document.getElementById("inputPassword4");
const confirmPassword = document.getElementById("inputPassword5");
const genderSelection = document.getElementById("genderSelect");
const termsAndCondition = document.getElementById("termsAndConditions");
const formMsg = document.querySelector(".msg")
let Credentials;

myForm.addEventListener("submit", onsubmit)

function onsubmit (e){
    e.preventDefault();

if(password.value == confirmPassword.value){
    if(genderSelection.value == ""){

    formMsg.classList.add("error")
    formMsg.innerHTML = "Please select your Gender";

    setTimeout(() => formMsg.remove(), 2000);
    }
    else {

    if(termsAndCondition.checked){

        // const personDetail = document.createElement("detail");
        // personDetail.appendChild(document.createTextNode(`${firstName.value} : ${lastName.value} : ${userName.value} : ${email.value} : ${secondNumber.value} : ${password.value} : ${confirmPassword.value} : ${genderSelection.value}`))

        function PersonCredentials (firstName, lastName, userName, email, firstNumber, secondNumber, password, genderSelection) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.password = password;
        this. genderSelection = genderSelection;
        }

        const person1 = new PersonCredentials(firstName.value, lastName.value, userName.value, email.value, firstNumber.value, secondNumber.value, password.value, genderSelection.value,)

        localStorage.setItem("myLocalStorage", JSON.stringify(person1));

        // CLEAR FIELDS //

        firstName.value = "";
        lastName.value = "";
        userName.value = "";
        email.value = "";
        firstNumber.value = "";
        secondNumber.value = "";
        password.value = "";
        confirmPassword.value = "";
        genderSelection.value = "";

        window.location.href = "sign in.html"
    }
    else {

    formMsg.classList.add("error");
    formMsg.innerHTML = "You must agree to the terms and conditions";

    setTimeout(() => formMsg.remove(), 2000);
    }
    }
    
}
else{
    formMsg.classList.add("error");
    formMsg.innerHTML = "Password does not match";

    setTimeout(() => formMsg.remove(), 2000);
}
}
