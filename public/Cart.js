// Event listeners for quantity inputs
cartQuantityInputs.forEach(input => {
    if (input) {
        input.addEventListener('input', updateCartTotal);
    }
});

// Remove Cart Item Function
var removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    if (button) {
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            updateCartTotal(); // Update total after removing an item
        });
    }
}
