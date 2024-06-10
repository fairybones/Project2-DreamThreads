// Function for opening the modal
function openModal(modalId) {
    // Add the is-active class to the specified modal
    document.getElementById('modal' + modalId).classList.add("is-active");
}

// Adding event listeners for closing the modal
document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
)
.forEach(($el) => {
    const $modal = $el.closest(".modal");

    $el.addEventListener("click", () => {
        // Remove the is-active class from the closest modal
        $modal.classList.remove("is-active");
    });
});
