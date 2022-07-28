import { email, buttonLogin, menu_despegable, menu_mobile } from "./getElement.js";


buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const reGex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!reGex.test(email.value)) return alert("Ingrese Email y Contraseña validas")
    localStorage.setItem("user", JSON.stringify({ email: email.value, login: "Activado" }))
    location.href = "./index.html"
})


menu_despegable.addEventListener("click", () => {

    menu_mobile.classList.toggle("menu-true")

})







