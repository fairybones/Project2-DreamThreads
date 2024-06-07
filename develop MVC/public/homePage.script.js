const mensButton = document.getElementById('mensButton');
const womensButton = document.getElementById('womensButton');
const mensFlyout = document.getElementById('mensFlyout');
const womensFlyout = document.getElementById('womensFlyout');

// Hide the women's flyout initially
womensFlyout.classList.add('hidden');

mensButton.addEventListener('click', () => {
    mensFlyout.classList.remove('hidden');
    womensFlyout.classList.add('hidden');
});

womensButton.addEventListener('click', () => {
    womensFlyout.classList.remove('hidden');
    mensFlyout.classList.add('hidden');
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