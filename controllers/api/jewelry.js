const express = require('express');
const router = express.Router();

// fetch women's jewelry

router.get('/', (req, res) => {
    const products = [
        {
            image: 'womens-jewelry-1.jpeg',
            name: 'Dragon Ring',
            price: '79.99',
            description: 'A bejeweled dragon ring with purple, red, and blue gemstones.',
            colors: ['Purple', 'Red', 'Blue'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '51'
        },
        {
            image: 'womens-jewelry-2.jpeg',
            name: 'Birds Ring',
            price: '89.99',
            description: 'A bejeweled ring with red and pink birds made of gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: ['5', '6', '7', '8', '9', '10', '11'],
            id: '52'
        },
        {
            image: 'womens-jewelry-3.jpeg',
            name: 'Celestial Earrings',
            price: '79.99',
            description: 'Dazzling earrings dripping with stars.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '53'
        },
        {
            image: 'womens-jewelry-4.jpeg',
            name: 'Gem Bracelet',
            price: '109.99',
            description: 'A chain bracelet with multicolor gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: 'Adjustable',
            id: '54'
        },
        {
            image: 'womens-jewelry-5.jpeg',
            name: 'Gem Necklace',
            price: '199.99',
            description: 'A chain featuring multicolor gemstones.',
            colors: ['Gold', 'Silver'],
            sizes: 'Adjustable',
            id: '55'
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

    // Render the jewelry.handlebars template with the product data and section content
    res.render('jewelry', { sectionContent, products });
});

module.exports = router;