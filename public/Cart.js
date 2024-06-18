document.addEventListener('DOMContentLoaded', function() {
    const form = $('.addToCart');
   
    form.on('click', async function(event) {
      
      event.preventDefault();

      const data = $(event.target).attr("data-item")

      console.log(data)

      const item = JSON.parse(data);

      console.log(item)

      const userData = {
       title: item.title, 
       img: item.img,
       price: item.price
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

document.addEventListener("DOMContentLoaded", function() {
  const quantityInputs = document.querySelectorAll('.cartQuantityInputs');
  const itemPrices = document.querySelectorAll('.item-price');
  const totalCostElement = document.getElementById('totalCost');
  const totalItemsElement = document.querySelector('.totalProducts');

  function updateTotals() {
      let totalCost = 0;
      let totalItems = 0;

      quantityInputs.forEach((input, index) => {
          let quantity = parseInt(input.value);
          if (isNaN(quantity) || quantity < 1) {
              quantity = 1;
          }
          input.value = quantity; // Update input value to ensure it's at least 1

          const itemPrice = parseFloat(itemPrices[index].textContent.replace('$', ''));
          const itemTotalCost = quantity * itemPrice; // Calculate total cost for the item
          totalCost += itemTotalCost;
          totalItems += quantity;
      });

      totalCostElement.textContent = 'Total: $' + totalCost.toFixed(2);
      totalItemsElement.textContent = totalItems + " Items";
  }

  quantityInputs.forEach(input => {
      input.addEventListener('input', updateTotals);
      input.addEventListener('blur', updateTotals); // Trigger updateTotals when input loses focus

      // Allow backspacing on the default quantity
      input.addEventListener('keydown', function(event) {
          if (event.key === 'Backspace') {
              if (input.value.length === 1) {
                  input.value = ''; // Clear the input value on backspace when only 1 character is present
              }
          }
      });

      // Treat empty input as quantity of 1
      input.addEventListener('input', function() {
          if (input.value === '') {
              input.value = '1';
          }
          updateTotals();
      });
  });

  const incrementButtons = document.querySelectorAll('.incrementButton');
  const decrementButtons = document.querySelectorAll('.decrementButton');

  incrementButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
          updateTotals();
      });
  });

  decrementButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          let quantity = parseInt(quantityInputs[index].value);
          if (quantity > 1) {
              quantityInputs[index].value = quantity - 1;
              updateTotals();
          }
      });
  });

  // Initial calculation on page load
  updateTotals();
});
