let menuEmail = document.querySelector(".navbar-email");
let DesktopMenu =  document.querySelector(".desktop-menu");

let MenuHamIcon =  document.querySelector(".menu");
let MobileMenu =  document.querySelector(".mobile-menu");

let MenuCarritoIcon =  document.querySelector(".navbar-shopping-cart");
let AsideProducts =  document.querySelector(".product-detail");

let cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click",toggleDesktopMenu);
MenuHamIcon.addEventListener("click",toggleMobileMenu);
MenuCarritoIcon.addEventListener("click",toggleCartAside);

function toggleDesktopMenu(){
   const isAsideProductsClose = AsideProducts.classList.contains("inactive");

   if(!isAsideProductsClose){
      AsideProducts.classList.add("inactive") 
   }

   DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){

   const isAsideProductsClose = AsideProducts.classList.contains("inactive");

   if(!isAsideProductsClose){
      AsideProducts.classList.add("inactive") 
   }

   MobileMenu.classList.toggle("inactive")
}

function toggleCartAside(){

      DesktopMenu.classList.add("inactive") 
      MobileMenu.classList.add("inactive") 

      AsideProducts.classList.toggle("inactive")
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