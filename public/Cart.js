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
