// This code should only run in the browser, not on the server.
if (typeof document !== 'undefined') {
    // Cart Open Close
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector("#close-cart");

    // Open Cart
    cartIcon.onclick = () => {
        cart.classList.add("active");
    }

    // Close Cart
    closeCart.onclick = () => {
        cart.classList.remove("active");
    }
}

// Tranfer slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// button "Next" and "Previous"
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', previousSlide);

// Display first slide when load page
showSlide(currentSlide);

// End Tranfer slide