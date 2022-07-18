import {getUserStorage}  from "./localStorage.js"

const userName = document.querySelector(".login-user")
const btnLogin = document.querySelector(".btn-login")

const localStorageVar = getUserStorage()
if (!localStorageVar )localStorage.setItem("user",JSON.stringify({email:"anonimus",login:"Desactivado"}))
const localStorageValue = JSON.parse(getUserStorage())

if (localStorageVar) {
    const getUser = JSON.parse(getUserStorage())
    const name = getUser.email.split("@")
    getUser.login=="Activado"? userName.textContent = name[0]:null
}

btnLogin.addEventListener("click", () => {

    if (localStorageValue) {
       if (localStorageValue.login=="Activado") {
        const valor = confirm("Estas seguro que quieres salir!?")
               if (valor) {
            localStorage.setItem("user",JSON.stringify({email:"anonimus",login:"Desactivado"}));
            location.href = "./index.html"
        }}
    } 
    if (localStorageValue.login=="Desactivado") location.href = "./login.html"




})

const menu_despegable = document.getElementById("menu-despegable")
const menu_mobile = document.querySelector(".menu-false")
const nav = document.getElementById("nav")


menu_despegable.addEventListener("click", ()=> {
   
    menu_mobile.classList.toggle("menu-true")   

})


const formContact = document.getElementById("form-contacto");
const formName = document.getElementById("name")
const formEmail = document.getElementById("email")
const formMessage = document.getElementById("message")

formContact.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (!formName || !formMessage || !formEmail) return alert("Llene todos los campos...")
    
    console.log("Datos enviados, correctamente")
})


