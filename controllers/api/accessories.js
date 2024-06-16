const express = require('express');
const router = express.Router();

// fetch women's accessories

router.get('/', (req, res) => {
    const products = [
        {
            image: 'womens-accessories-1.jpeg',
            name: 'Oval Sunglasses',
            price: '129.99',
            description: 'Chunky oval frames in cherry red or classic black.',
            colors: ['Black', 'Red'],
            sizes: 'One Size',
            id: '41'
        },
        {
            image: 'womens-accessories-2.jpeg',
            name: 'See No BS',
            price: '199.99',
            description: 'Colorful goggles to blind the haters.',
            colors: 'Multicolor',
            sizes: 'Adjustable',
            id: '42'
        },
        {
            image: 'womens-accessories-3.jpeg',
            name: 'Holographic Gloves',
            price: '69.99',
            description: 'Rainbow reflective gloves that pack a punch!',
            colors: ['Pink Holo', 'Black Holo'],
            sizes: 'One Size',
            id: '43'
        },
        {
            image: 'womens-accessories-4.jpeg',
            name: 'Fluffy Tinted Glasses',
            price: '29.99',
            description: 'Super soft frames with colored lenses.',
            colors: ['Pink', 'Blue', 'Purple'],
            sizes: 'One Size',
            id: '44'
        },
        {
            image: 'womens-accessories-5.jpeg',
            name: 'My Heart Bag',
            price: '295.99',
            description: 'Crystallized anatomical heart bag to hold your favorite things.',
            colors: ['Gold', 'Silver'],
            sizes: 'One Size',
            id: '45'
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

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories', { sectionContent, products });
});

module.exports = router;