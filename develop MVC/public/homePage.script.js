const mensButton = document.getElementById('mensButton');
const womensButton = document.getElementById('womensButton');
const mensFlyout = document.getElementById('mensFlyout');
const womensFlyout = document.getElementById('womensFlyout');

mensButton.addEventListener('click', () => {
    mensFlyout.classList.remove('hidden');
    womensFlyout.classList.add('hidden');
});

womensButton.addEventListener('click', () => {
    womensFlyout.classList.remove('hidden');
    mensFlyout.classList.add('hidden');
});