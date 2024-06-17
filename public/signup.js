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
      const response = await fetch('/api/users', {
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