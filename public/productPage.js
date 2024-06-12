

// Function to open the modal with a specific ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('is-active');
}

// Function to close the modal with a specific ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('is-active');
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
