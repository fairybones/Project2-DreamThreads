const express = require('express');
const router = express.Router();

// fetch women's jewelry

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 51,
            name: 'Dragon Ring',
            image: 'womens-jewelry-1.jpeg',
            price: '79.99',
            description: 'A bejeweled dragon ring with purple, red, and blue gemstones.',
            colors: ['Purple', 'Red', 'Blue'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 52,
            name: 'Birds Ring',
            image: 'womens-jewelry-2.jpeg',
            price: '89.99',
            description: 'A bejeweled ring with red and pink birds made of gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            // quantity: ''
        },
        {
            product_id: 53,
            name: 'Celestial Earrings',
            image: 'womens-jewelry-3.jpeg',
            price: '79.99',
            description: 'Dazzling earrings dripping with stars.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 54,
            name: 'Gem Bracelet',
            image: 'womens-jewelry-4.jpeg',
            price: '109.99',
            description: 'A chain bracelet with multicolor gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 55,
            name: 'Gem Necklace',
            image: 'womens-jewelry-5.jpeg',
            price: '199.99',
            description: 'A chain featuring multicolor gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: 'Adjustable',
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

    // Render the jewelry.handlebars template with the product data and section content
    res.render('jewelry', { sectionContent, products });
});

module.exports = router;