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



function openModal(id) { 
// Add the is-active class to the specified modal 
document.getElementById('modal' + 'id').classList.add("is-active"); } 
// Adding event listeners for closing the modal 
document.querySelectorAll( ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button" ) .forEach(($el) => { const $modal = $el.closest(".modal"); $el.addEventListener("click", () => { 
    // Remove the is-active class from the closest modal 
    $modal.classList.remove("is-active");
 }); 
});
