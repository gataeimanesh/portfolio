//Used local storage to hold all the items in the basket
//fetching any items in the js local storage If no items are
// found then intialise local storage with empty array


let basket = [];

let basketDb = JSON.parse(localStorage.getItem("computer"));

const basketContainer = document.querySelector(".main-basket");

if (basketDb == null) localStorage.setItem("computer", JSON.stringify([]));

else basket = basketDb;
//I created an array of object to hold all the products


const allProducts = [

  {id: 1, img: "images/10236042.png5.webp", price: 450,o_price:350, title: "Chromebook"},


  {id: 2, img: "images/10248727.png6.webp", price: 320,o_price:290, title: "Chromebook"},


  {id: 3, img: "images/10252966.png7.webp", price: 520,o_price:520, title: "Laptop"},


  {id: 4, img: "images/10251402.png8.webp", price: 420,o_price:420, title: "Laptop"},


  {id: 5, img: "images/10251973.9png.webp", price: 740,o_price:740, title: "All-in-One PC"},


  {id: 6, img: "images/10251219.10png.webp", price: 680,o_price: 680, title: "All-in-One PC"},



]
//For all products in the basket create a div for each
const show = (products) => {

  products.forEach(p=>{

    let product = allProducts.find(ap=> ap.id==p)

 

  let div = document.createElement("div");

  div.classList.add("box");

  div.innerHTML = ` 
<img src="${product.img}" alt="" />
<div class="content">
  <h3>${product.title}</h3>
  <div class="price">£${product.price}<span>£${product.o_price}</span></div>
  <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
  </div>
  <a href="#" class="btn">Remove from cart</a>
</div>`;

  basketContainer.appendChild(div);

  let b = div.querySelector(".btn");
//
  b.addEventListener("click", ()=>{

    basket.splice(basket.splice(basket.indexOf(product.id)), 1)

    localStorage.setItem("computer", JSON.stringify(basket));

    div.classList.add("removed");

    checkCart();

    setTimeout(() => {

        div.style.width = "0px";

    }, 500);

  })

  });

};

const checkCart = () => {

    // if(basket.length == 0 ) {

    //     basketContainer.innerHTML = `<p>Please add some products in the basket <a href="./index.html">here</a></h3>`

    // }

}

if (document.body.classList.contains("basket-b")) {
console.log(basket);
  if (basket.length > 0) {

    show(basket);

  } else {

    basketContainer.innerHTML = `<p>Please add products to your basket <a href="./index.html">here</a></p>`;

  }

}

else{
 

 

const productHandling = (id) => {
console.log(basket);
  if (basket.includes(id)) {

    basket.splice(basket.indexOf(id), 1);

    localStorage.setItem("computer", JSON.stringify(basket));

    return true;

  } else {

    basket.push(id);

    localStorage.setItem("computer", JSON.stringify(basket));

    return false;

  }

};

 let buttons= document.querySelectorAll(".btn");

buttons.forEach((b) => {

    let id = b.dataset.id;

    if(basket.includes(id)) b.innerText = "Added to Basket";

 

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