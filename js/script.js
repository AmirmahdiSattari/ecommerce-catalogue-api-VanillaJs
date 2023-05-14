'use strict';
let products = document.querySelector('.products')

document.addEventListener('DOMContentLoaded', function (){
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            response.forEach(data => {
                let description = data.description;
                let title = data.title;

                products.innerHTML += `
                <div class="product">
                    <img src="${data.category.image}" alt="" class="product-img">
                    <div class="product-content">
                    <h2 class="product-title">${title > 20 ? title.substring(0, 20).concat(' ...') : title}</h2>
                    <h4 class="product-category">${data.category.name}</h4>
                    <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat(' ...more') : description}</p>
                    <div class="product-price-container">
                        <h3 class="product-price">$${data.price}</h3>
                        <a href="#" onclick="clicked()" data-product-id="${data.id}" class="add-to-cart">
                        <ion-icon name="cart"></ion-icon>
                        </a>
                    </div>
                    </div>
                </div>`;
            });
            let addToCart =document.querySelectorAll('.add-to-cart');

        }
        catch (err) {
            console.log(err)
        }
    }
        fetchProducts('https://api.escuelajs.co/api/v1/products');
        displayLoading();
});
function fetchGetData(){
    
}

function clicked(){
    Swal.fire({
        icon: 'success',
        title: '👍',
        text: 'Item added successfully',
      })
}

function displayLoading(){
    setTimeout(() => {
     
        const loader = document.querySelector('.loader');
        loader.classList.add('loader-hidden');
        document.body.removeChild(loader);
        const container = document.querySelector('.container');
        container.classList.remove('container-hidden');

    },4000)
}

// scroll progress bar
const progress =  document.querySelector(".progress-bar");


window.addEventListener('scroll',()=>{
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight-window.innerHeight
    const scrolled =(winScroll/height) * 100;
    progress.style.width =`${scrolled}%`;

});