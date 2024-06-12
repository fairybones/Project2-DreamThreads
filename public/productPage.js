const addToCartButton = document.getElementById('addToCartButton');
const shoppingCart = document.getElementById('shoppingCart');

// Initially hide the shopping cart
shoppingCart.classList.add('translate-x-full', 'ease-in');

addToCartButton.addEventListener('click', () => {
    // Toggle the visibility of the shopping cart when the button is clicked
    shoppingCart.classList.toggle('translate-x-full');
    shoppingCart.classList.toggle('translate-x-0');
});

const cartCloser = document.getElementById("cartCloser");

cartCloser.addEventListener('click', () => {
    shoppingCart.classList.add('translate-x-full', 'ease-in');
});

