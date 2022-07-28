import { abrirModal } from "./abrirModal.js"
import { userName, btnLogin, cerrarSesion, localStorageValue, localStorageVar, getUser, menu_despegable, menu_mobile } from "./getElement.js"



if (!localStorageVar) localStorage.setItem("user", JSON.stringify({ email: "anonimus", login: "Desactivado" }))

if (localStorageVar) {
  const name = getUser.email.split("@")

  getUser.login == "Activado" ? userName.textContent = name[0] : null
  getUser.login == "Activado" ? cerrarSesion.style.display = "block" : null
  getUser.login == "Activado" ? btnLogin.disabled = true : null
}

getUser.login == "Desactivado" ? btnLogin.classList.add("hover:text-white") : null

cerrarSesion.addEventListener("click", () => {
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

  if (localStorageValue.login == "Desactivado") location.href = "/login.html"

})



menu_despegable.addEventListener("click", () => {

  menu_mobile.classList.toggle("menu-true")

})


const btnTrueque = document.getElementById("btn-trueque")

btnTrueque.addEventListener("click", () => {

  if (getUser.login == "Desactivado") return location.href = "/login.html"
  document.body.insertAdjacentHTML("afterend", abrirModal());


})

