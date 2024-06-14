const express = require('express');
const router = express.Router();

// fetch men's cologne

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 11,
            name: 'YSL Cologne',
            image: 'mens-cologne-1.jpeg',
            price: '129.99',
            description: 'A dreamy scent with notes of sandalwood & musk.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            // quantity: ''
        },
        {
            product_id: 12,
            name: 'Burberry Cologne',
            image: 'mens-cologne-2.jpeg',
            price: '179.99',
            description: 'A dreamy scent with notes of bamboo & linen.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            // quantity: ''
        },
        {
            product_id: 13,
            name: 'Burberry Cologne',
            image: 'mens-cologne-3.jpeg',
            price: '129.99',
            description: 'A strong scent with notes of sandalwood & musk.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            // quantity: ''
        },
        {
            product_id: 14,
            name: 'Chrome Cologne',
            image: 'mens-cologne-4.jpeg',
            price: '99.99',
            description: 'A strong scent with notes of bamboo & linen.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            // quantity: ''
        },
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

    // Render the cologne.handlebars template with the product data and section content
    res.render('cologne', { sectionContent, products });
});

module.exports = router;