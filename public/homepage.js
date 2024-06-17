const mensButton = document.getElementById('mensButton');
const womensButton = document.getElementById('womensButton');
const mensFlyout = document.getElementById('mensFlyout');
const womensFlyout = document.getElementById('womensFlyout');

// Hide the women's flyout initially
womensFlyout.classList.add('hidden');
// Show men's flyout
mensButton.addEventListener('click', () => {
    mensFlyout.classList.remove('hidden');
    womensFlyout.classList.add('hidden');
    mensFlyout.classList.add('active');
    womensFlyout.classList.remove('active');
});
// Show women's flyout
womensButton.addEventListener('click', () => {
    womensFlyout.classList.remove('hidden');
    mensFlyout.classList.add('hidden');
    womensFlyout.classList.add('active');
    mensFlyout.classList.remove('active');
});
