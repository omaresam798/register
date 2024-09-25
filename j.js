let text = document.querySelector("#text")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
submit.addEventListener("click", function (e) {
    if (text.value != "" && email.value != "" && password.value != "") {
        e.preventDefault()
        localStorage.setItem("username", text.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        location = "login.html"
    }
    else {
        alert("fill all the feilds")
    }
})