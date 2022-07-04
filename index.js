
const container = document.getElementById("container")


const addItem = (name, price) =>
    container.innerHTML += `
<a href="#" class="group">
              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">${name}</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">${price}</p>
            </a>
`
