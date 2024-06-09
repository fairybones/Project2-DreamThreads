document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const userData = {
        email: formData.get('email'),
        password: formData.get('password')
      };
  
      try {
        const response = await fetch('http://localhost:3001/api/create-account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Account created successfully:', result);
          // Redirect to login page or show success message
        } else {
          console.error('Failed to create account:', response.statusText);
          // Show error message to the user
        }
      } catch (error) {
        console.error('Error creating account:', error);
      }
    });
});