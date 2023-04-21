const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const burgerMenu = document.querySelector(".menu")
const MenuCrritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click",  toggleDesktopMenu)
burgerMenu.addEventListener("click", toggleBurgerMenu)
MenuCrritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
} 

function toggleBurgerMenu() {
const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isMenuEmailClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed, !isMenuEmailClosed) {
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}

const productList = []
productList.push({
   name: "Bike",
   precio: 120,
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Televisor",
    precio: 500,
    imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101216027/fee_786_587_png"
 })
 productList.push({
    name: "Celular",
    precio: 200,
    imagen: "https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202208/gbom/6941487255795/800_800_846F1694C9DAD2A36A2BE40B537C9BBCmp.png"
 })
 productList.push({
    name: "Reloj",
    precio: 110,
    imagen: "https://fossil.com.co/8374-large_default/reloj-grant-cronografo-de-cuero.jpg"
 })

/*
<section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
  </section>
  */

 for(product of productList){
   const productCard = document.createElement("div")
   productCard.classList.add("product-card")

    const ProductImg = document.createElement("img")
    ProductImg.setAttribute("src", product.imagen)

   const productInfo = document.createElement("div")
   productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")

        const productPrice = document.createElement("p")
         productPrice.innerText = "$" + product.precio

        const productName = document.createElement("p")
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement("figure")

        const icon = document.createElement("img")
        icon.setAttribute("src", "./icons/bt_add_to_cart.svg")


    productInfoFigure.appendChild(icon)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(ProductImg)
    productCard.appendChild(productInfo)

    cardContainer.appendChild(productCard)
 }