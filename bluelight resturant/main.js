//Used local storage to hold all the items in the basket
//fetching any items in the js local storage If no items are
// found then intialise local storage with empty array
//For all products in the basket create a div for each
//AddEventetlistener create a events listeners for the target elements
//Used local storage to hold all the items in the basket

let basket = [];

let basketDb = JSON.parse(localStorage.getItem("productbasket"));

const basketContainer = document.querySelector(".main-basket");

if (basketDb == null) localStorage.setItem("productbasket", JSON.stringify([]));

else basket = basketDb;

const allProducts = [

  {id: 1, img: "img/burger.img.jpg", price: 13.99, title: "Hamburger"},

  {id: 2, img: "img/pizza.img.jpg", price: 14.99, title: "Pizza"},

  {id: 3, img: "img/salad.img.jpg", price: 14.99, title: "Salad"},

]

const show = (products) => {

  products.forEach(p=>{

    let product = allProducts.find(ap=> ap.id==p)

 

  let div = document.createElement("div");

  div.classList.add("product");

  div.innerHTML = ` <div class="box">

  <div class="box-img">

    <img src="${product.img}" alt="">

  </div>

 

  <div class="stars">

    <i class='bx bxs-star'></i>

    <i class='bx bxs-star'></i>

    <i class='bx bxs-star'></i>

    <i class='bx bxs-star'></i>

    <i class='bx bxs-star-half'></i>

  </div>

  <h2>${product.title}</h2>

  <span class="price">${product.price}</span>

  <a href="#" data-id="${product.id}" class="btn remove">Remove from Basket</a>

</div>`;

  basketContainer.appendChild(div);

  let b = div.querySelector(".remove");

  b.addEventListener("click", ()=>{

    basket.splice(basket.splice(basket.indexOf(product.id)), 1)

    localStorage.setItem("productbasket", JSON.stringify(basket));

    div.classList.add("removed");

    checkCart();

    setTimeout(() => {

        div.style.width = "0px";

    }, 500);

  })

  });

};

const checkCart = () => {

    if(basket.length == 0 ) {

        basketContainer.innerHTML = `<p>Please add some products in the basket <a href="./index.html">here</a></h3>`

    }

}

if (document.body.classList.contains("basket-b")) {

  if (basket.length > 0) {

    show(basket);

  } else {

    basketContainer.innerHTML = `<p>Please add products to your basket <a href="./index.html">here</a></p>`;

  }

}

else{

  let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

 

menu.onclick = () => {

  menu.classList.toggle("bx-x");

  navbar.classList.toggle("active");

};

window.onscroll = () => {

  menu.classList.remove("bx-x");

  navbar.classList.remove("active");

};

//Fetching All button elements with btn class
let buttons = document.querySelectorAll(".box .btn");

 

 

const productHandling = (id) => {

  if (basket.includes(id)) {

    basket.splice(basket.indexOf(id), 1);

    localStorage.setItem("productbasket", JSON.stringify(basket));

    return true;

  } else {

    basket.push(id);

    localStorage.setItem("productbasket", JSON.stringify(basket));

    return false;

  }

};

 
//Loop Over it
buttons.forEach((b) => {

    let id = b.dataset.id;

      //Changes text
    if(basket.includes(id)) b.innerText = "Added to Basket";

 
// Add a click Listener
  b.addEventListener("click", e => {

    e.preventDefault();

    let p = productHandling(id);

    if (p) {

      b.textContent = "Order Now";

    } else {

      b.textContent = "Added to Basket";

    }

  });

});

}

