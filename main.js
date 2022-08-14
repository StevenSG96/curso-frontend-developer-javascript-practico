let menuEmail = document.querySelector(".navbar-email");
let DesktopMenu =  document.querySelector(".desktop-menu");

let MenuHamIcon =  document.querySelector(".menu");
let MobileMenu =  document.querySelector(".mobile-menu");

let MenuCarritoIcon =  document.querySelector(".navbar-shopping-cart");
let shoppingCartContainer =  document.querySelector("#shoppingCartContainer");

let cardsContainer = document.querySelector(".cards-container");

let productDetailContainer = document.querySelector("#productDetail");

let closeproductDetailContainer = document.querySelector(".product-detail-close");



menuEmail.addEventListener("click",toggleDesktopMenu);
MenuHamIcon.addEventListener("click",toggleMobileMenu);
MenuCarritoIcon.addEventListener("click",toggleCartAside);
closeproductDetailContainer.addEventListener("click",closeProductDetailAside)


function toggleDesktopMenu(){
   shoppingCartContainer.classList.add("inactive");
   productDetailContainer.classList.add("inactive");
   DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
   shoppingCartContainer.classList.add("inactive");
   productDetailContainer.classList.add("inactive");
   MobileMenu.classList.toggle("inactive");
}

function toggleCartAside(){
   DesktopMenu.classList.add("inactive") 
   MobileMenu.classList.add("inactive") 
   productDetailContainer.classList.add("inactive");
   shoppingCartContainer.classList.toggle("inactive");
}
function ShowProductDetailAside(){
   productDetailContainer.classList.remove("inactive");
   DesktopMenu.classList.add("inactive") 
   MobileMenu.classList.add("inactive")
   shoppingCartContainer.classList.add("inactive");
}
function closeProductDetailAside(){
   productDetailContainer.classList.add("inactive");
   DesktopMenu.classList.add("inactive") 
   MobileMenu.classList.add("inactive")
   shoppingCartContainer.classList.add("inactive");
}

const productsList=[];

productsList.push({
   name:'bike',
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
   name:'display',
   price: 220,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
   name:'Pc',
   price: 620,
   image: "https://www.asus.com/media/global/gallery/63nq57jtwcnkqduo_setting_xxx_0_90_end_2000.png",
});


function render_products(array){
   for (product of array){
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImg = document.createElement("img");
      productImg.setAttribute("src",product.image);
      productImg.addEventListener("click",ShowProductDetailAside)

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productInfoDiv = document.createElement("div");

      const productPrice = document.createElement("p");
      productPrice.innerText="$ "+product.price;

      const productName = document.createElement("p");
      productName.innerText=product.name;

      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");

      productInfoFigure.appendChild(productImgCart);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
      
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);

   }
}

render_products(productsList);