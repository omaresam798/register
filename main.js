let hh = document.querySelector("#hhh")
let user = localStorage.getItem("username")

hh.textContent = "Welcome " + user
hh.style.color = "white"