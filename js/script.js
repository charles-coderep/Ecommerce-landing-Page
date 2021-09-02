let cart = document.querySelector(".cart");
let overlay = document.querySelector(".overlay");

document.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target.classList.contains("add-to-bag") || e.target.classList.contains("cart-total")) {
        e.target.classList.add("loading");
        setTimeout(() => {
            e.target.classList.remove("loading");
            cart.classList.add("active");
            overlay.classList.add("open-cart");
            document.body.style.overflowY = "hidden";
        }, 1 * 1000);
    }
});

document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("cart-close__image")) {
        cart.classList.remove("active");
        overlay.classList.remove("open-cart");
        document.body.style.overflowY = "auto";
    }
});