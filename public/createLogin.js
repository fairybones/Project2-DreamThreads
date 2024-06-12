document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3001/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        console.log("Account not created successfully");
        return null;
        // Redirect to login page
        // window.location.href = './login.index.html';
      }

      return await response.json();
      // else {
      //   console.error('Failed to create account - Status:', response.status);
      //   // Show error message to the user based on the response status
      //   if (response.status === 0) {
      //     console.error('Network error - Check server connection');
      //   } else if (response.status === 404) {
      //     console.error('Resource not found - Check server endpoint');
      //   } else {
      //     console.error('Unexpected error occurred');
      //   }
      // }
    } catch (error) {
      console.error("Error creating account:", error);
      // Handle any other errors that occur during the fetch request
    }
  });
});
