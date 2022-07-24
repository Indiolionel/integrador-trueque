
const userName = document.querySelector(".login-user")
const btnLogin = document.querySelector(".btn-login")

const localStorageVar = localStorage.getItem("user")
if (!localStorageVar )localStorage.setItem("user",JSON.stringify({email:"anonimus",login:"Desactivado"}))
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
    if (localStorageValue.login=="Desactivado") location.href = "/login.html"




})


const menu_despegable = document.getElementById("menu-despegable")
const menu_mobile = document.querySelector(".menu-false")
const nav = document.getElementById("nav")


menu_despegable.addEventListener("click", () => {

    menu_mobile.classList.toggle("menu-true")

})

const container = document.getElementById("container-index")
const contactoButton = document.getElementById("mi-trueque")



function cerrarModal() {
    const main_remove = document.getElementById("main-card");

    return container.removeChild(main_remove)

}

function abrirModal() {
    if (localStorageValue.login=="Activado") {

    container.innerHTML += `
    <main id="main-card">
        
<div id="modal-products" class="relative z-10" role="dialog" aria-modal="true">
  
<div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">

    <div class="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
      <!-- COMPONENTE NUEVO -->


      <div class="mt-10 sm:mt-0 w-full">
            
                    <form id="form-datos" >
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                
                            <div class="mx-auto w-full max-w-[550px]">
                            <div class="mb-5">
                                <label
                                  for="categoria"
                                  class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                  Categoria
                                </label>
                                <input
                                  type="text"
                                  name="categoria"
                                  id="categoria"
                                  required="required"
                                  placeholder="Categoria"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                              </div>
                               <div class="mb-5">
                                <label
                                  for="name"
                                  class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  required="required"
                                  placeholder="Name"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                              </div>
                              <div class="mb-5">
                                <label
                                  for="price"
                                  class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                  Price
                                </label>
                                <input
                                  type="number"
                                  name="price"
                                  id="price"
                                  required="required"
                                  placeholder="Price"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                              </div>
                              <div class="mb-5">
                                <label
                                  for="photo"
                                  class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                  Link photo
                                </label>
                                <input
                                  type="text"
                                  name="photo"
                                  id="archivo-img"
                                  required="required"
                                  placeholder="Link photo"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                              </div>
                              <div class="flex justify-around">
                              <button onclick="cerrarModal()" type="submit"
                              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                          <button type="submit"
                              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear</button>
                              </div>
                              </div>
                          
                            </div>
                            </div>
                            
                         </div>
                    </form>
                </div>
                           
      </div>
    </div>
  </div>
</div>
</div>

</main> 

    `}
    else {
        location.href = "/login.html"
    }
    

    class Producto {
        constructor(img, name, price,user,categoria) {
      
          this.img = img;
          this.name = name;
          this.price = price;
          this.user = user;
          this.categoria = categoria;

        }
          
      }
    
   const formDato = document.getElementById("form-datos")
   
    formDato.addEventListener("submit",()=> {
      

        const input1 = document.getElementById("name")
        console.log(input1.value)
        const input2 = document.getElementById("price")
        console.log(input2.value)
        const imgLink = document.getElementById("archivo-img")
        console.log(imgLink.value)
        const categoria = document.getElementById("categoria")
        console.log(categoria.value)
        
        const getUser = JSON.parse(localStorage.getItem("user"))
        const productNew = new Producto(imgLink.value,input1.value,Number(input2.value),getUser.email,categoria);
        const jsonArray = JSON.parse(localStorage.getItem("productos"))
        console.log(jsonArray)

        jsonArray.push(productNew)
        console.log(jsonArray)
        localStorage.setItem("productos", JSON.stringify(jsonArray));

    }
    )
}
