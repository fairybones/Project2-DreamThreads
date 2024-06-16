const express = require('express');
const router = express.Router();

// fetch men's sunnies

router.get('/', (req, res) => {
    const products = [
        {
            image: 'mens-glasses-1.jpeg',
            name: 'Golden Sunglasses',
            price: '129.99',
            description: 'Sunglasses with gold chrome.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '16'
        },
        {
            image: 'mens-glasses-2.jpeg',
            name: '3D Sunglasses',
            price: '189.99',
            description: 'Futuristic sunglasses that mimic 3D movie glasses.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '17'
        },
        {
            image: 'mens-glasses-3.jpeg',
            name: 'Tinted Sunglasses (Brown)',
            price: '29.99',
            description: 'Sunglasses with brown frames & colored lenses.',
            colors: ['Blue', 'Yellow', 'Pink'],
            sizes: 'One Size',
            id: '18'
        },
        {
            image: 'mens-glasses-4.jpeg',
            name: 'Tinted Sunglasses (Black)',
            price: '29.99',
            description: 'Sunglasses with black frames & colored lenses.',
            colors: ['Purple', 'Red', 'Blue'],
            sizes: 'One Size',
            id: '19'
        },
        {
            image: 'mens-glasses-5.jpeg',
            name: 'Polarized Sunglasses',
            price: '89.99',
            description: 'Polarized sunglasses with tinted lenses.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '20'
        },
];
    // Initialize an empty string to store modal HTML
    let modalsHtml = ''; 

    products.forEach((product) => {
        // Generate modal HTML for each product
        const modalHtml = `
            <div class="modal" id="modal-${product.id}">
                <img src="${product.image}" alt="${product.description}">
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        // Append modal HTML to the modals container
        modalsHtml += modalHtml; 
    });

    // HTML content for the section with modals
    const sectionContent = `
        <section class="bg-white py-8">
            <div id="modals-container">
                ${modalsHtml} <!-- Insert generated modals here -->
            </div>
        </section>
    `;

    // Render the glasses.handlebars template with the product data and section content
    res.render('glasses', { sectionContent, products });
});

module.exports = router;