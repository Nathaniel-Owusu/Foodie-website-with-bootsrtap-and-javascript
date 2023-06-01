const loginForm = document.getElementById("loginForm");
const loginUserName = document.getElementById("formGroupExampleInput");
const loginPassword = document.getElementById("inputPassword4");
const loginMsg = document.querySelector(".loginMsg")

    const myData = JSON.parse(localStorage.getItem("myLocalStorage"))

    const data = Object.values(myData);

    const userCredentials = Array.from(data)
    const newUserName  = data[2];
    const newUserPassword = data[6]

    loginForm.addEventListener("submit", onsubmit);

function onsubmit (e) {
    e.preventDefault();

    if( loginUserName.value == newUserName && loginPassword.value  == newUserPassword){

        window.location.href = "food.html"
    } 
    else {
        loginMsg.classList.add("error");
        loginMsg.innerHTML = "UserName or Password does not match";

        setTimeout(() => loginMsg.remove(), 2000);
    }
}



