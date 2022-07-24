const btnRecuperar = document.getElementById("btn-recuperar");
const valor = document.getElementById("email-address")
btnRecuperar.addEventListener("click", (e)=> {
    e.preventDefault();

    if (valor.value) {
        alert("Contraseña enviada")
        location.href="./index.html" 
    } else {
        alert("Ingrese un email")
    }
    
  
   
   
})