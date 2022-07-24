
const email = document.getElementById("email-address")

const buttonLogin = document.getElementById("button-login")

buttonLogin.addEventListener("click",(e)=>{
        e.preventDefault();
    if (!email.value) return alert("Ingrese Email y Contraseña validas")
    localStorage.setItem("user",JSON.stringify({email:email.value,login:"Activado"}))
    location.href = "./index.html"
})


const menu_despegable = document.getElementById("menu-despegable")
const menu_mobile = document.querySelector(".menu-false")
const nav = document.getElementById("nav")


menu_despegable.addEventListener("click", ()=> {
   
    menu_mobile.classList.toggle("menu-true")   

})







