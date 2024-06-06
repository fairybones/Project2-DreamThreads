const mensButton = document.getElementById('mensButton');
const womensButton = document.getElementById('womensButton');
const mensFlyout = document.getElementById('mensFlyout');
const womensFlyout = document.getElementById('womensFlyout');

// Hide the women's flyout initially
womensFlyout.classList.add('hidden');

mensButton.addEventListener('click', () => {
    mensFlyout.classList.remove('hidden');
    womensFlyout.classList.add('hidden');
});

womensButton.addEventListener('click', () => {
    womensFlyout.classList.remove('hidden');
    mensFlyout.classList.add('hidden');
});