const express = require('express');
const router = express.Router();

// fetch women's perfume

router.get('/', (req, res) => {
    const products = [
        {
            image: 'womens-perfume-1.jpeg',
            name: 'Fresh Bouquet of Flowers',
            price: '69.99',
            description: 'A sweet scent with floral notes.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '46'
        },
        {
            image: 'womens-perfume-2.jpeg',
            name: 'Diamond of the Garden',
            price: '119.99',
            description: 'A spicy scent with floral notes.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '47'
        },
        {
            image: 'womens-perfume-3.jpeg',
            name: 'Princess Perfume',
            price: '79.99',
            description: 'A lightly floral scent with notes of sandalwood.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '48'
        },
        {
            image: 'womens-perfume-4.jpeg',
            name: 'Starry Perfume',
            price: '129.99',
            description: 'A dreamy scent with notes of vanilla and lavender.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '49'
        },
        {
            image: 'womens-perfume-5.jpeg',
            name: 'I Like Candy',
            price: '119.99',
            description: 'A sweet, citrusy summer scent.',
            colors: 'One Color',
            sizes: 'One Size',
            id: '50'
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

    // Render the perfume.handlebars template with the product data and section content
    res.render('perfume', { sectionContent, products });
});

module.exports = router;