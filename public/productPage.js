
// Function to open the modal with a specific ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('is-active');
    } else {
        console.error(`Modal with ID ${modalId} not found.`);
    }
}

// Function to close the modal with a specific ID
function closeModal(modalId) {
    event.preventDefault;
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-active');
    } else {
        console.error(`Modal with ID ${modalId} not found.`);
    }
}

// Add event listeners to all "Add to Cart" buttons to open the corresponding modal
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modalId;
        openModal(modalId);
    });
});

// Add event listeners to all modal close buttons to close the modal
document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modalId;
        closeModal(modalId);
    });
});