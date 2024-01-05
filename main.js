const data = [
    {
        id:1,
        name: "Invicta Men's Pro Dive 1r",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 94,
        cat: "Dress", 
    },
    {
        id: 2,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 90,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Invicta Men's Pro Diver 3",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 58,
        cat: "Dress",
    },
    {
        id: 4,
        name: "Invicta Men's Pro Diver 4",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 120,
        cat: "Luxury",
    },
    {
        id: 5,
        name: "Invicta Men's Pro Diver 5",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 84,
        cat: "Casual",
    },
    {
        id: 6,
        name: "Invicta Men's Pro Diver 6",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 80,
        cat: "Sport",
    },
    {
        id: 7,
        name: "Invicta Men's Pro Diver 7",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 68,
        cat: "Luxury",
    },
    {
        id: 8,
        name: "Invicta Men's Pro Diver 8",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 92,
        cat: "Casual",
    },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product => 
        `<div class="product">
                    <img src=${product.img} alt="" />
                    <span class="name">${product.name}</span>
                    <span class="priceText">$${product.price}</span>
                </div>`
    ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
   const value = e.target.value.toLowerCase();

   if (value) {
    displayProducts(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1)
    );
   }
   else {
    displayProducts(data);
   }
})

