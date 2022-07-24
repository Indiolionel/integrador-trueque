
const userName = document.querySelector(".login-user")
const btnLogin = document.querySelector(".btn-login")


const localStorageVar = localStorage.getItem("user")
if (!localStorageVar ) localStorage.setItem("user",JSON.stringify({email:"anonimus",login:"Desactivado"}))
const localStorageValue = JSON.parse(localStorage.getItem("user"))

if (localStorageVar) {
    const getUser = JSON.parse(localStorage.getItem("user"))
    const name = getUser.email.split("@")
    getUser.login=="Activado"? userName.textContent = name[0]:null
  }

btnLogin.addEventListener("click", () => {

    if (localStorageValue) {
       if (localStorageValue.login=="Activado") {
        const valor = confirm("Estas seguro que quieres salir!?")
               if (valor) {
            localStorage.setItem("user",JSON.stringify({email:"anonimus",login:"Desactivado"}));
            location.href = "/index.html"
        }}
    } 
    if (localStorageValue.login=="Desactivado") location.href = "./login.html"




})





function cerrarModal (){
  const modal = document.getElementById("modal-products");

  return container.removeChild(modal)

}
function clickear (e) {
  
  console.log(e)
const props = e.split(",")
const img = props[0]
const name = props[1]
const price = props[2]
const user = props[3]
const categoria = props[4];


console.log("llega aca?")
container.innerHTML += `



<div id="modal-products" class="relative z-10" role="dialog" aria-modal="true">
  
  <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
 
      <div class="flex text-base text-center transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-2xl">
        <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
            <span class="sr-only">Close</span>
            <!-- Heroicon name: outline/x -->
            <svg onclick="cerrarModal()"class="modal-x h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
            <div class="flex justify-center items-center tamImg aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-4">
              <img src="${img}" alt="Two each of gray, white, and black shirts arranged on table." class="object-center object-cover">
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">${name}</h2>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">${user}</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-2xl text-gray-900">${price}</p>

                <!-- Reviews -->
                
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>

                <form>
                
                  <button type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cambiar</button>
                  <button id="btn-eliminar" type="submit" class="hidden mt-6 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Eliminar</button>

                  </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`
const btnEliminar = document.getElementById("btn-eliminar")
user!="anonimus"? btnEliminar.classList.remove("hidden"):null;

btnEliminar.addEventListener("click", (e)=>{
  const getProducts = JSON.parse(localStorage.getItem("productos"))

  let contador =0;
  console.log("Antes: "+getProducts)
  getProducts.forEach((item)=>{
    
    
    item.name==name && getProducts.splice(contador,1);
    contador++;
  })
  localStorage.setItem("productos",JSON.stringify(getProducts));
  console.log("Despues: "+getProducts)
})

}


const render = (element)=> {
  
  console.log(element.user)
  
  return `
  

 
  <a  onclick="clickear('${Object.values(element)}')" class="group flex flex-col items-center">
  <div class="flex justify-center div-componete w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    <img src="${element.img}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full object-center object-cover group-hover:opacity-75">
  </div>
  <h3 class="mt-4 text-sm text-center text-gray-700">${element.name}</h3>
  <p class="mt-1 text-lg font-medium text-center text-gray-900">${element.price}</p>
</a>                         
        `
}




const container = document.getElementById("container-producto")




const getProducts = JSON.parse(localStorage.getItem("productos"))
const getUser1 = JSON.parse(localStorage.getItem("user"))

const ventasUser = getProducts.filter((item)=>{
    if (item.user==getUser1.email ) return item
  })
  console.log(ventasUser)
  // const btnBuscar = document.getElementById("categoria-buscar")
  
if (getUser1.email=="anonimus") location.href = "./login.html"
else {
  if (ventasUser.length==0) container.innerHTML = `<div flex justify-center	><p> No tienes ninguna venta </p><div>`    
  else {
    container.innerHTML = ""

  ventasUser.forEach(element => {
      console.log("ventas")

    container.innerHTML += render(element)
    });
}
}







const menu_despegable = document.getElementById("menu-despegable")
const menu_mobile = document.querySelector(".menu-false")
const nav = document.getElementById("nav")


menu_despegable.addEventListener("click", ()=> {
   
    menu_mobile.classList.toggle("menu-true")   

})




const buttonVentas = document.getElementById("button-ventas")


const producto = ()=> {
  return location.href = "/productos.html"
}





