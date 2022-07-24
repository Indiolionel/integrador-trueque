
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


// const container = document.getElementById("container")


// const addItem = (name, price) =>
//     container.innerHTML += `
// <a href="#" class="group">
//               <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
//               </div>
//               <h3 class="mt-4 text-sm text-gray-700">${name}</h3>
//               <p class="mt-1 text-lg font-medium text-gray-900">${price}</p>
//             </a>
// `


const productos = [];

class Producto {
  constructor(img, name, price, user,categoria) {

    this.img = img;
    this.name = name;
    this.price = price;
    this.user = user;
    this.categoria = categoria;
  }
    
}

function cerrarModal (){
  const modal = document.getElementById("modal-products");

  return container.removeChild(modal)

}
function cerrarModaltwo (){
  const modal = document.getElementById("modal-products-2");

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
                
                  <button id="changeProduct" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cambiar</button>
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

localStorageValue.email !==user?btnEliminar.style.display="none":null

const changeProducts = document.getElementById("changeProduct");

changeProducts.addEventListener("click",(e)=>{
console.log("aprete")

  container.innerHTML += `
  

<div id="modal-products-2" class="relative z-10" role="dialog" aria-modal="true">
  
<div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">

    <div class="flex text-base text-center transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-2xl">
      <div class="w-full relative flex justify-center items-center bg-white border-2 border-sky-700 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <H2 class="text-center font-mono font-medium text-xl text-neutral-600"> PROXIMAMENTE !! </H2>
      <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
          <span class="sr-only">Close</span>
          <!-- Heroicon name: outline/x -->
          <svg onclick="cerrarModaltwo()"class="modal-x h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>      
      </div>
    </div>
  </div>
</div>
</div>
  `

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
const getUser1 = JSON.parse(localStorage.getItem("user"))
const pantalon = new Producto("https://tuagro.com/wp-content/uploads/2019/10/Jeans-PNG-Picture-1.png", "pantalon", 2999,getUser1.email,"ropa")
const televisor = new Producto("https://www.serviceitalia.com.ar/images/uploads/ecommerce/10686.png", "televisor 50p", 45000,getUser1.email,"electrodomestico")
const silla = new Producto("https://construccionesleon.com.ar/wp-content/uploads/2020/10/Silla.png","silla", 1200,getUser1.email,"cosas hogar")
const remera =  new Producto("http://d3ugyf2ht6aenh.cloudfront.net/stores/440/495/products/gorila1-8d2d2baee9ee356d2716054538359236-640-0.png", "remera", 1999,getUser1.email,"ropa")
const heladera = new Producto("https://images.samsung.com/is/image/samsung/ar-refrigerador-rt32k5070s8-rt32k5070s8-b3-Silver-187885326?scl=1&fmt=png-alpha", "heladera", 85000,getUser1.email,"electrodomestico")
const televisor2 = new Producto("https://media.nidux.net/pull/599/800/10637/949-product-619fb81ab5c4e-30-16096.png", "televisor 42p", 41000,getUser1.email,"electrodomestico")


productos.push(pantalon, televisor, televisor2, silla, remera, heladera)


const container = document.getElementById("container-producto")



!(localStorage.getItem("productos"))?localStorage.setItem("productos", JSON.stringify(productos)):null

const getProducts = JSON.parse(localStorage.getItem("productos"))

function mostrarInfo() {

  getProducts.forEach(element => {
  container.innerHTML += render(element)
  });

}



mostrarInfo();

const menu_despegable = document.getElementById("menu-despegable")
const menu_mobile = document.querySelector(".menu-false")
const nav = document.getElementById("nav")


menu_despegable.addEventListener("click", ()=> {
   
    menu_mobile.classList.toggle("menu-true")   

})






const producto = ()=> {
  return location.href = "/productos.html"
}




const buttonSearch = document.getElementById("button-addon2")

const inputBuscar = document.getElementById("categoria-buscar")
inputBuscar.addEventListener("input", (e)=>{

  const texto = e.target.value.toLowerCase()
  
       
  const paramEncontrado = getProducts.filter((item)=>{
    if (item.name.toLowerCase().indexOf(texto)==0) return item
  })

  container.innerHTML = ""
  paramEncontrado.forEach(element => {
    console.log("Mis ventas")
    container.innerHTML += render(element)
    });


})





const buttonVentas2 = document.getElementById("button-ventas2")




buttonVentas2.addEventListener("click",()=>{
  console.log("Activado")
  // console.log("estamos en linea")
  buttonVentas2.classList.add("bg-gray-900")
  const getUser = JSON.parse(localStorage.getItem("user"))
console.log(getUser)
  if (getUser.login=="Desactivado") {
    return location.href="/login.html"
  }
  const ventasUser = getProducts.filter((item)=>{
    if (item.user==getUser1.email ) return item
  })
  console.log(ventasUser)
  container.innerHTML = ""
  const btnBuscar = document.getElementById("categoria-buscar")
  if (ventasUser.length==0) btnBuscar.disabled=true
  if (ventasUser.length==0) container.innerHTML = `<p> No tienes ninguna venta </p> <button onclick ="producto()" type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Regresar</button>`
  
  ventasUser.forEach(element => {

    container.innerHTML += render(element)
    });

console.log(productos)

})

