const express = require('express');
const router = express.Router();

// fetch women's perfume

router.get('/', (req, res) => {
    const products = [
        {
            product_id: 46,
            name: 'Fresh Bouquet of Flowers',
            filename: 'womens-perfume-1.jpeg',
            price: '69.99',
            description: 'A sweet scent with floral notes.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 47,
            name: 'Diamond of the Garden',
            filename: 'womens-perfume-2.jpeg',
            price: '119.99',
            description: 'A spicy scent with floral notes.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 48,
            name: 'Princess Perfume',
            filename: 'womens-perfume-3.jpeg',
            price: '79.99',
            description: 'A lightly floral scent with notes of sandalwood.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 49,
            name: 'Starry Perfume',
            filename: 'womens-perfume-4.jpeg',
            price: '129.99',
            description: 'A dreamy scent with notes of vanilla and lavender.',
            colors: 'One Color',
            sizes: 'One Size',
            // quantity: ''
        },
        {
            product_id: 50,
            name: 'I Like Candy',
            filename: 'womens-perfume-5.jpeg',
            price: '119.99',
            description: 'A sweet, citrusy summer scent.',
            colors: 'One Color',
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

    // Render the perfume.handlebars template with the product data and section content
    res.render('perfume', { sectionContent, products });
});

module.exports = router;