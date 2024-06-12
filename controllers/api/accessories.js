const express = require('express');
const router = express.Router();

// fetch women's accessories

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 41,
            name: 'Oval Sunglasses',
            filename: 'womens-accessories-1.jpeg',
            price: '129.99',
            description: 'Chunky oval frames in cherry red or classic black.',
            colors: ['Black', 'Red'],
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 42,
            name: 'See No BS',
            filename: 'womens-accessories-2.jpeg',
            price: '199.99',
            description: 'Colorful goggles to blind the haters.',
            colors: 'Multicolor',
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 43,
            name: 'Holographic Gloves',
            filename: 'womens-accessories-3.jpeg',
            price: '69.99',
            description: 'Rainbow reflective gloves that pack a punch!',
            colors: ['Pink Holo', 'Black Holo'],
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 44,
            name: 'Fluffy Tinted Glasses',
            filename: 'womens-accessories-4.jpeg',
            price: '29.99',
            description: 'Super soft frames with colored lenses.',
            colors: ['Pink', 'Blue', 'Purple'],
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 45,
            name: 'My Heart Bag',
            filename: 'womens-accessories-5.jpeg',
            price: '295.99',
            description: 'Crystallized anatomical heart bag to hold your favorite things.',
            colors: ['Gold', 'Silver'],
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

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories', { sectionContent, products });
});

module.exports = router;