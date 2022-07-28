import { localStorageValue, container } from "./getElement.js";


export function abrirModal() {
  if (localStorageValue.login == "Activado") {

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
                              <div class="opacity-90 px-4 py-5 bg-white sm:p-6">
                                  
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
                                    Nombre
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required="required"
                                    placeholder="Nombre"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                                <div class="mb-5">
                                  <label
                                    for="price"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                  >
                                    Precio
                                  </label>
                                  <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    required="required"
                                    placeholder="Precio"
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
                                <button type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear</button>
                                <button id="closeModal"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
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
  
      
`
    const closeModal = document.getElementById("closeModal")
    closeModal.addEventListener("click", () => {
      const main_remove = document.getElementById("main-card");
      container.removeChild(main_remove)
      return location.href = "/index.html"

    })


  }

  class Producto {
    constructor(img, name, price, user, categoria) {

      this.img = img;
      this.name = name;
      this.price = price;
      this.user = user;
      this.categoria = categoria;

    }

  }


  const formDato = document.getElementById("form-datos")

  formDato.addEventListener("submit", () => {

    const name = document.getElementById("name")
    const price = document.getElementById("price")
    const imgLink = document.getElementById("archivo-img")
    const categoria = document.getElementById("categoria")

    const getUser = JSON.parse(localStorage.getItem("user"))
    const productNew = new Producto(imgLink.value, name.value, Number(price.value), getUser.email, categoria);
    const productos = JSON.parse(localStorage.getItem("productos"))

    productos.push(productNew)
    localStorage.setItem("productos", JSON.stringify(productos));

  }
  )

}

