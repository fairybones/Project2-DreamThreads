const mensButton = document.getElementById('mensButton');
const womensButton = document.getElementById('womensButton');
const mensFlyout = document.getElementById('mensFlyout');
const womensFlyout = document.getElementById('womensFlyout');

// Hide the women's flyout initially
womensFlyout.classList.add('hidden');

mensButton.addEventListener('click', () => {
    mensFlyout.classList.remove('hidden');
    womensFlyout.classList.add('hidden');
    mensFlyout.classList.add('active');
    womensFlyout.classList.remove('active');
});

womensButton.addEventListener('click', () => {
    womensFlyout.classList.remove('hidden');
    mensFlyout.classList.add('hidden');
    womensFlyout.classList.add('active');
    mensFlyout.classList.remove('active');
});

const countDisplay = document.getElementById('countDisplay');
  const incrementButton = document.querySelector('.increment-button');
  const decrementButton = document.querySelector('.decrement-button');
  
  let count = parseInt(countDisplay.innerText);

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

  const cartButton = document.querySelector('.cart-button');
  const cartItemCount = document.querySelector('.cart-item-count');
  const product1 = document.getElementById('product1'); // Get the specific product by its ID

  let cartItems = 0;

  // Add event listener to the product item to add it to the cart
  product1.addEventListener('click', () => {
    cartItems++;
    cartItemCount.innerText = cartItems;
  });

  // Get the button and shopping cart elements
  const addToCartButton = document.getElementById('addToCartButton');
  const shoppingCart = document.getElementById('shoppingCart');
  
  // Initially hide the shopping cart
  shoppingCart.classList.add('translate-x-full', 'ease-in');
  
  addToCartButton.addEventListener('click', function() {
      // Toggle the visibility of the shopping cart when the button is clicked
      shoppingCart.classList.toggle('translate-x-full');
      shoppingCart.classList.toggle('translate-x-0');
  });
  
  const cartCloser = document.getElementById("cartCloser");
  
  cartCloser.addEventListener('click', function() {
      shoppingCart.classList.add('translate-x-full', 'ease-in');
  });
  