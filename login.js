var Gemail = localStorage.getItem("email")
var Gpassword = localStorage.getItem("password")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var submit = document.querySelector("#submit")

submit.addEventListener("click", function (e) {
    e.preventDefault()
    if (email.value != "" && password.value != "") {
        if (Gemail && Gemail.trim() == email.value.trim() && Gpassword && Gpassword.trim() == password.value.trim()) {
            location = "main.html"
        }
        else {
            alert("Wrong Email Or Password Try Again")
        }
    }
    else {
        alert("fill all feilds")
    }
})