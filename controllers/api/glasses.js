const express = require('express');
const router = express.Router();

// fetch men's sunnies

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 15,
            name: 'Dior Cologne',
            image: 'mens-cologne-5.jpeg',
            price: '179.99',
            description: 'A calm scent with floral notes.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            // quantity: ''
        },
        {
            product_id: 16,
            name: 'Golden Sunglasses',
            image: 'mens-glasses-1.jpeg',
            price: '129.99',
            description: 'Sunglasses with gold chrome.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 17,
            name: '3D Sunglasses',
            image: 'mens-glasses-2.jpeg',
            price: '189.99',
            description: 'Futuristic sunglasses that mimic 3D movie glasses.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 18,
            name: 'Tinted Sunglasses (Brown)',
            image: 'mens-glasses-3.jpeg',
            price: '29.99',
            description: 'Sunglasses with brown frames & colored lenses.',
            colors: ['Blue', 'Yellow', 'Pink'],
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 19,
            name: 'Tinted Sunglasses (Black)',
            image: 'mens-glasses-4.jpeg',
            price: '29.99',
            description: 'Sunglasses with black frames & colored lenses.',
            colors: ['Purple', 'Red', 'Blue'],
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 20,
            name: 'Polarized Sunglasses',
            image: 'mens-glasses-5.jpeg',
            price: '89.99',
            description: 'Polarized sunglasses with tinted lenses.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
];

    let modalsHtml = ''; // Initialize an empty string to store modal HTML

    products.forEach((product) => {
        // Generate modal HTML for each product
        const modalHtml = `
            <div class="modal" id="modal-${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        
        modalsHtml += modalHtml; // Append modal HTML to the modals container
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