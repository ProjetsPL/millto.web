const checkMenuMobileBtn = document.querySelector("#menuMobileBtn");
if (typeof(checkMenuMobileBtn) != 'undefined' && checkMenuMobileBtn != null) {
    const menuButton = document.querySelector("#menuMobileBtn"),
    menuContainer = document.querySelector("#menuMobileCtn");

    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("open");
        menuContainer.classList.toggle("open");
    }, false);    
}