const data = [
    {
        id:1,
        name: "Rolex Watch One",
        img: "https://images.pexels.com/photos/9982007/pexels-photo-9982007.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 94,
        cat: "Dress", 
    },
    {
        id: 2,
        name: "Rolex Two",
        img: "https://images.pexels.com/photos/9982471/pexels-photo-9982471.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 90,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Rolex Watch Three",
        img: "https://images.pexels.com/photos/9981172/pexels-photo-9981172.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 58,
        cat: "Dress",
    },
    {
        id: 4,
        name: "Rolex Four",
        img: "https://images.pexels.com/photos/9897906/pexels-photo-9897906.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 120,
        cat: "Luxury",
    },
    {
        id: 5,
        name: "Patek Philippe Watch",
        img: "https://images.pexels.com/photos/17351225/pexels-photo-17351225/free-photo-of-a-watch-with-a-black-dial-and-silver-hands.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 84,
        cat: "Casual",
    },
    {
        id: 6,
        name: "Tag Heuer Watch",
        img: "https://images.pexels.com/photos/9982360/pexels-photo-9982360.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 80,
        cat: "Sport",
    },
    {
        id: 7,
        name: "Omega Watch",
        img: "https://images.pexels.com/photos/9982338/pexels-photo-9982338.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 68,
        cat: "Luxury",
    },
    {
        id: 8,
        name: "Cartier watch",
        img: "https://images.pexels.com/photos/9978709/pexels-photo-9978709.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1)
    );
   }
   else {
    displayProducts(data);
   }
});

const setCategories = () =>{
    const allCats = data.map (item => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
    })];
    categoriesContainer.innerHTML = categories.map(cat => 
        `<span class="cat">${cat}</span>
        `).join("");

        categoriesContainer.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;

        selectedCategory === "All" 
        ? displayProducts(data) 
        : displayProducts(data.filter(item => item.cat === selectedCategory));

        });
};

const setPrices = () => {
    const priceList = data.map(item => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;


    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter(item => item.price <= e.target.value));
    })
};
setCategories();
setPrices();
