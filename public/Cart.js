document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#addToCart');
    const title = document.querySelector('#title');
    const img = document.querySelector('#img');
    const price = document.querySelector('#price');
  
    form.addEventListener('click', async function(event) {
      event.preventDefault();
  
      const userData = {
       title: title.textContent, 
       img: img.src,
       price: price.textContent
      };
  
      try {
        const response = await fetch('/api/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        if (!response.ok) {
          console.log('Error with fetch request in cart.js');
          return null;
        } 
  
        // Account created successfully
        console.log('An item was added to the users cart');
        // Display a message to the user
        alert('Item added to cart!');
       
      } catch (error) {
        console.error('There was an error', error);
        // Handle any other errors that occur during the fetch request
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const itemPrices = document.querySelectorAll('.item-price');
    let totalCost = 0;

    itemPrices.forEach(item => {
        const price = parseFloat(item.textContent.replace('$', ''));
        totalCost += price;
    });

    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.innerHTML = '<span>Total cost:</span> <span>$' + totalCost.toFixed(2) + '</span>';
});

document.addEventListener("DOMContentLoaded", function() {
  const cartItems = document.querySelectorAll('.cart-item');
  const itemsCountElement = document.querySelector('h2.totalProducts');

  itemsCountElement.textContent = cartItems.length + " Items";
});

document.addEventListener("DOMContentLoaded", function() {
  const quantityInput = document.getElementById('cartQuantityInputs');

  quantityInput.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
          // Increment value on arrow up key press
          quantityInput.value = parseInt(quantityInput.value) + 1;
      } else if (event.key === 'ArrowDown') {
          // Decrement value on arrow down key press
          if (parseInt(quantityInput.value) > 1) {
              quantityInput.value = parseInt(quantityInput.value) - 1;
          }
      }
  });
});
