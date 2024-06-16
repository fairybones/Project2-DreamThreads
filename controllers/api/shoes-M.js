const express = require('express');
const router = express.Router();

// fetch men's shoes

router.get('/', (req, res) => {
    const products = [
        {
            image: 'mens-shoes-1.jpeg',
            name: 'Denim Star Shoes',
            price: '99.99',
            description: 'Sneakers with denim detailing in mens sizing.',
            colors: 'Blue',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '21'
        },
        {
            image: 'mens-shoes-2.jpeg',
            name: 'Starry Sneakers',
            price: '99.99',
            description: 'Sneakers with suede star detailing in mens sizing.',
            colors: 'Green',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '22'
        },
        {
            image: 'mens-shoes-3.jpeg',
            name: 'Dragonfly Boots',
            price: '119.99',
            description: 'Boots with gold detailing in mens sizing.',
            colors: 'Black',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '23'
        },
        {
            image: 'mens-shoes-4.jpeg',
            name: 'Lion Boots',
            price: '119.99',
            description: 'Boots with leather detailing in mens sizing.',
            colors: ['Brown', 'Olive Green'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '24'
        },
        {
            image: 'mens-shoes-5.jpeg',
            name: 'Doodle Sneakers',
            price: '99.99',
            description: 'Sneakers with illustrative detailing in mens sizing.',
            colors: ['Green', 'Blue'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '25'
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

    // Render the shoes-M.handlebars template with the product data and section content
    res.render('shoes-M', { sectionContent, products });
});

module.exports = router;