$(".delete-button").on("click", async function(event){
    const id = $(event.target).attr("data-id");
    console.log(id);
    const response = await fetch(`/api/carts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        console.log('Error with delete request in cart.js');
        return null;
      } else {
        console.log('Item deleted successfully');
        window.location.reload();
      }
});