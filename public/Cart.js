// Function to remove an item from the cart
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal(); // Update total after removing an item
}
// Remove Cart Item Function
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
        console.log('Button clicked:', event.target);
        event.target.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal(); // Update total after removing an item
    }
});