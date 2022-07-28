import { getUserStorage } from "./localStorage.js"
import { userName,cerrarSesion,getUser, btnLogin, formContact, formEmail, formMessage, formName, menu_despegable, menu_mobile  } from "./getElement.js"


const localStorageVar = getUserStorage() //module export
if (!localStorageVar) localStorage.setItem("user", JSON.stringify({ email: "anonimus", login: "Desactivado" }))
const localStorageValue = JSON.parse(getUserStorage()) //module export

if (localStorageVar) {
    const name = getUser.email.split("@")
    getUser.login == "Activado" ? userName.textContent = name[0] : null
    getUser.login == "Activado" ? cerrarSesion.style.display = "block":null
    getUser.login == "Activado" ? btnLogin.disabled=true:null
}

getUser.login == "Desactivado" ? btnLogin.classList.add("hover:text-white"):null

cerrarSesion.addEventListener("click", ()=>{
    if (localStorageValue) {
      if (localStorageValue.login == "Activado") {
        const valor = confirm("Estas seguro que quieres salir!?")
        if (valor) {
          localStorage.setItem("user", JSON.stringify({ email: "anonimus", login: "Desactivado" }));
          location.href = "/index.html"
        }
      }
    }
  })

btnLogin.addEventListener("click", () => {

      if (localStorageValue.login == "Desactivado") location.href = "./login.html"

})


menu_despegable.addEventListener("click", () => {

    menu_mobile.classList.toggle("menu-true")

})



formContact.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formName.value == "" || formMessage.value == "" || formEmail.value == "") return alert("Llene todos los campos...")

    console.log("Datos enviados, correctamente")
    formContact.reset()
})


