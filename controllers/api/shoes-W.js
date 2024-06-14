const express = require('express');
const router = express.Router();

// fetch women's shoes

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 56,
            name: 'Eden Sandal',
            image: 'womens-shoes-1.jpeg',
            price: '129.99',
            description: 'Kitten heels with bejeweled floral details in womens sizing.',
            colors: 'Multicolor',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 57,
            name: 'Fairy Heels',
            image: 'womens-shoes-2.jpeg',
            price: '119.99',
            description: 'Fanciful heels featuring fairy wings in womens sizing.',
            colors: 'Pink',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 58,
            name: 'Butterfly Heels',
            image: 'womens-shoes-3.jpeg',
            price: '129.99',
            description: 'Dreamy heels with silk butterflies in womens sizing.',
            colors: 'Multicolor',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 59,
            name: 'Tulip Boots',
            image: 'womens-shoes-4.jpeg',
            price: '199.99',
            description: 'Knee high leather boots with flowers in womens sizing.',
            colors: 'Pink',
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 60,
            name: 'Bow Boots',
            image: 'womens-shoes-5.jpeg',
            price: '199.99',
            description: 'Knee high leather boots with bows in womens sizing.',
            colors: 'Pink',
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

    // Render the shoes-W.handlebars template with the product data and section content
    res.render('shoes-W', { sectionContent, products });
});

module.exports = router;