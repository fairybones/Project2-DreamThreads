// Define variables for count display and increment/decrement buttons
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.querySelector('.increment-button');
const decrementButton = document.querySelector('.decrement-button');
let count = parseInt(countDisplay.innerText);

// Increment and decrement count functionality
incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.innerText = count;
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countDisplay.innerText = count;
    }
});

// Define variables for cart functionality
const cartButton = document.querySelector('.cart-button');
const cartItemCount = document.querySelector('.cart-item-count');
const product1 = document.getElementById('product1');
let cartItems = 0;

// Event listener to add product to cart
product1.addEventListener('click', () => {
    cartItems++;
    cartItemCount.innerText = cartItems;
});

// Define variables for shopping cart display
const addToCartButton = document.getElementById('addToCartButton');
const shoppingCart = document.getElementById('shoppingCart');
shoppingCart.classList.add('translate-x-full', 'ease-in');

// Toggle shopping cart visibility
addToCartButton.addEventListener('click', function() {
    shoppingCart.classList.toggle('translate-x-full');
    shoppingCart.classList.toggle('translate-x-0');
});

// Close shopping cart
const cartCloser = document.getElementById("cartCloser");
cartCloser.addEventListener('click', function() {
    shoppingCart.classList.add('translate-x-full', 'ease-in');
});

// Function to add item to cart and update UI
function addToCart(item) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI(cart);
}

// Function to update cart UI
function updateCartUI(cart) {
    const cartIcon = document.getElementById('cartIcon');
    const totalItems = cart.length;
    cartIcon.textContent = totalItems.toString();
    console.log('Cart updated:', cart);
    console.log('Adding item to cart:', cart[cart.length - 1]);
}