const express = require('express');
const router = express.Router();

// fetch men's shoes

router.get('/', (req, res) => {
    const products = [
        {
            image: 'mens-watches-1.jpeg',
            name: 'Golden Quartz',
            price: '99.99',
            description: 'A water resistant watch that keeps digital & analog time.',
            colors: 'One Color',
            sizes: 'Adjustable',
            id: '26'
        },
        {
            image: 'mens-watches-2.jpeg',
            name: 'Emerald Watch',
            price: '149.99',
            description: 'A water resistant watch that displays analog time.',
            colors: 'One Color',
            sizes: 'Adjustable',
            id: '27'
        },
        {
            image: 'mens-watches-3.jpeg',
            name: 'Celestial Watch',
            price: '129.99',
            description: 'A celestial-inspired watch that changes from day to night.',
            colors: ['Olive Green', 'Brown', 'Black'],
            sizes: 'Adjustable',
            id: '28'
        },
        {
            image: 'mens-watches-4.jpeg',
            name: 'Night Watch',
            price: '169.99',
            description: 'A water resistant watch with gold detailing.',
            colors: 'Black',
            sizes: 'Adjustable',
            id: '29'
        },
        {
            image: 'mens-watches-5.jpeg',
            name: 'Rose Gold Watch',
            price: '169.99',
            description: 'A water resistant watch with rose gold detailing.',
            colors: 'Black',
            sizes: 'Adjustable',
            id: '30'
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

    // Render the watches.handlebars template with the product data and section content
    res.render('watches', { sectionContent, products });
});

module.exports = router;