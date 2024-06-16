const express = require('express');
const router = express.Router();

// fetch men's cologne

router.get('/', (req, res) => {
    const products = [
        {
            image: 'mens-cologne-1.jpeg',
            name: 'YSL Cologne',
            price: '129.99',
            description: 'A dreamy scent with notes of sandalwood & musk.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            id: '11'
        },
        {
            image: 'mens-cologne-2.jpeg',
            name: 'Burberry Cologne',
            price: '179.99',
            description: 'A dreamy scent with notes of bamboo & linen.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            id: '12'
        },
        {
            image: 'mens-cologne-3.jpeg',
            name: 'Bentley Cologne',
            price: '129.99',
            description: 'A strong scent with notes of sandalwood & musk.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            id: '13'
        },
        {
            image: 'mens-cologne-4.jpeg',
            name: 'Chrome Cologne',
            price: '99.99',
            description: 'A strong scent with notes of bamboo & linen.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            id: '14'
        },
        {
            image: 'mens-cologne-5.jpeg',
            name: 'Dior Cologne',
            price: '179.99',
            description: 'A calm scent with floral notes.',
            colors: 'One Color',
            sizes: ['Travel', 'Small', 'Large'],
            id: '15'
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

    // Render the cologne.handlebars template with the product data and section content
    res.render('cologne', { sectionContent, products });
});

module.exports = router;