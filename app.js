var modal = document.querySelector('.modal')

function AnModal() {
    modal.style.display  = "none"
}

function hienModal() {
    modal.style.display = "flex"
}

var nut = document.querySelector('.header__cart-wrap')

var cart = document.querySelector(".header__cart-list")


function test () {
    if(cart.style.display === "none") {
        cart.style.display = "block"
    }
    else {
        cart.style.display = "none"
    }
}

nut.addEventListener('click', test)



