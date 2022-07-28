
import { btnRecuperar, btnRegresar, valor } from "./getElement.js"

btnRecuperar.addEventListener("click", (e) => {
    e.preventDefault();

    if (valor.value) {
        alert("Contraseña enviada")
        location.href = "./index.html"
    } else {
        alert("Ingrese un email")
    }

})

btnRegresar.addEventListener("click", (e) => {

    location.href = "./login.html"

})