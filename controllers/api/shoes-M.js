const express = require('express');
const router = express.Router();

// fetch men's shoes

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 21,
            name: 'Denim Star Shoes',
            filename: 'mens-shoes-1.jpeg',
            price: '99.99',
            description: 'Sneakers with denim detailing in mens sizing.',
            colors: 'Blue',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 22,
            name: 'Starry Sneakers',
            filename: 'mens-shoes-2.jpeg',
            price: '99.99',
            description: 'Sneakers with suede star detailing in mens sizing.',
            colors: 'Green',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 23,
            name: 'Dragonfly Boots',
            filename: 'mens-shoes-3.jpeg',
            price: '119.99',
            description: 'Boots with gold detailing in mens sizing.',
            colors: 'Black',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 24,
            name: 'Lion Boots',
            filename: 'mens-shoes-4.jpeg',
            price: '119.99',
            description: 'Boots with leather detailing in mens sizing.',
            colors: ['Brown', 'Olive Green'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 25,
            name: 'Doodle Sneakers',
            filename: 'mens-shoes-5.jpeg',
            price: '99.99',
            description: 'Sneakers with illustrative detailing in mens sizing.',
            colors: ['Green', 'Blue'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
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

    // Render the shoes-M.handlebars template with the product data and section content
    res.render('shoes-M', { sectionContent, products });
});

module.exports = router;