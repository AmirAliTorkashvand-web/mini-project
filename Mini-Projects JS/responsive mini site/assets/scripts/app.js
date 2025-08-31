let overlay = document.querySelector(".overlay");
let menuItem = document.querySelector(".product")
menuItem.addEventListener("mouseover", function(){
    overlay.classList.add("overlay_show")
});
menuItem.addEventListener("mouseout", function(){
    overlay.classList.remove("overlay_show")
});
let contentBtn = document.querySelector(".shop_icon_non_responsive");
console.log(contentBtn);
contentBtn.addEventListener("click", function(){
    contentBtn.classList.toggle("content_open");
});
let header = document.querySelector(".header");
let appOverlay = document.querySelector(".app_overlay");
contentBtn.addEventListener("click", function(){
    appOverlay.classList.add("overlay_show");
    header.classList.add("zindex");
});
appOverlay.addEventListener("click", function(){
    contentBtn.classList.remove("content_open");
    appOverlay.classList.remove("overlay_show");
    setTimeout(function(){
        header.classList.remove("zindex");
    }, 100)
});
let mobile = document.querySelector(".mobile_cart")
let bag = document.querySelector(".bag_icon");
let close = document.querySelector(".forbidden");
bag.addEventListener("click", function(){
    mobile.classList.add("mobile_cart_open");
    overlay.classList.add("overlay_show");
})
close.addEventListener("click", function(){
    mobile.classList.remove("mobile_cart_open");
    overlay.classList.remove("overlay_show");
});

let subArrow = document.querySelector(".arrow_down_right_menu");
let subParent = document.querySelector(".sub_parent");
let subMenu = document.querySelector(".submenu_right_menu");
subArrow.addEventListener("click", function(){
    subMenu.classList.toggle("sub_has_sub");
});
let rightKesho = document.querySelector(".right_menu_kesho");
let burger = document.querySelector(".burger");
let closeRight = document.querySelector(".close_btn_right");
burger.addEventListener("click", function(){
    rightKesho.classList.add("open_right");
    overlay.classList.add("overlay_show");
});
closeRight.addEventListener("click", function(){
    rightKesho.classList.remove("open_right");
    overlay.classList.remove("overlay_show");
});