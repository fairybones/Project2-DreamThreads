const express = require('express');
const router = express.Router();

// fetch men's shoes

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 26,
            name: 'Golden Quartz',
            image: 'mens-watches-1.jpeg',
            price: '99.99',
            description: 'A water resistant watch that keeps digital & analog time.',
            colors: 'One Color',
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 27,
            name: 'Emerald Watch',
            image: 'mens-watches-2.jpeg',
            price: '149.99',
            description: 'A water resistant watch that displays analog time.',
            colors: 'One Color',
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 28,
            name: 'Celestial Watch',
            image: 'mens-watches-3.jpeg',
            price: '129.99',
            description: 'A celestial-inspired watch that changes from day to night.',
            colors: ['Olive Green', 'Brown', 'Black'],
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 29,
            name: 'Night Watch',
            image: 'mens-watches-4.jpeg',
            price: '169.99',
            description: 'A water resistant watch with gold detailing.',
            colors: 'Black',
            sizes: 'Adjustable',
            // quantity: ''
        },
        {
            product_id: 30,
            name: 'Rose Gold Watch',
            image: 'mens-watches-5.jpeg',
            price: '169.99',
            description: 'A water resistant watch with rose gold detailing.',
            colors: 'Black',
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

    // Render the watches.handlebars template with the product data and section content
    res.render('watches', { sectionContent, products });
});

module.exports = router;