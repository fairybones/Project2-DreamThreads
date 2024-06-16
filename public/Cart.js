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
          console.log('Account not created successfully');
          return null;
        } 
  
        // Account created successfully
        console.log('Account created successfully');
        // Display a message to the user
        alert('Account created successfully! You will now be redirected to the homepage.');
        // Redirect to the homepage
        window.location.href = '/homepage';
  
      } catch (error) {
        console.error('Error creating account:', error);
        // Handle any other errors that occur during the fetch request
      }
    });
  });
