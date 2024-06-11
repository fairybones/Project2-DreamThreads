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
const cartItemCount = document.querySelector('.cart-item-count');
let cartItems = 0;

// Event listener to add product to cart
const addProductButton = document.getElementById('addProduct');
if (addProductButton) {
    addProductButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        cartItems++;
        if (cartItemCount) {
            cartItemCount.innerText = cartItems;
        }
        addToCart({
            name: 'BREMONT',
            price: 99.99
        });
    });
} else {
    console.error('addProduct button not found in the document.');
}

// Define variables for shopping cart display
const addToCartButton = document.getElementById('addToCartButton');
const cartItemsContainer = document.getElementById('cartItemsContainer');


// Toggle shopping cart visibility with easing out
addToCartButton.addEventListener('click', function() {
    console.log('Toggle cart button clicked');
    cartItemsContainer.classList.add('ease-out'); // Add ease-out class
    cartItemsContainer.classList.toggle('translate-x-0');
});

// Close shopping cart
const cartCloser = document.getElementById("cartCloser");
cartCloser.addEventListener('click', function() {
    console.log('Close cart button clicked');
    cartItemsContainer.classList.add('translate-x-full', 'ease-in');
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

function updateCartUI(cart) {
    cartItemsContainer.innerHTML = ''; // Clear previous items

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('flex', 'justify-between', 'items-center', 'mt-6', 'p-4', 'bg-white', 'rounded-lg', 'shadow-md');
        
        const itemImage = document.createElement('img');
        itemImage.src = item.image; // Set the image source
        itemImage.classList.add('w-16', 'h-16', 'mr-4');

        const itemDetails = document.createElement('div');

        const itemName = document.createElement('h3');
        itemName.classList.add('text-lg', 'font-semibold', 'text-gray-800');
        itemName.textContent = item.name; // Set the item name
        
        const itemPrice = document.createElement('span');
        itemPrice.classList.add('text-gray-600');
        itemPrice.textContent = '$' + item.price; // Set the item price

        const removeButton = document.createElement('button');
        removeButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded-md');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1); // Remove the item from the cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
            updateCartUI(cart); // Update the cart UI
        });

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);

        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemDetails);
        itemElement.appendChild(removeButton);
        
        cartItemsContainer.appendChild(itemElement);
    });
}

// Add click event listener to all buttons with class 'addProduct'
document.querySelectorAll('.addProduct').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        const productImage = button.getAttribute('data-image');

        cartItems++;
        if (cartItemCount) {
            cartItemCount.innerText = cartItems;
        }

        addToCart({
            name: productName,
            price: productPrice,
            image: productImage
        });
    });
});




