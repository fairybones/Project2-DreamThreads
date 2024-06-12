const express = require('express');
const router = express.Router();

// fetch men's apparel

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            product_id: 1,
            name: 'Swirly Sweater',
            filename: 'mens-apparel-1.jpeg',
            price: '99.99',
            description: 'A comfortable swirly sweater for men.',
            colors: ['Black', 'White'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 2,
            name: 'Cactus Shirt',
            filename: 'mens-apparel-2.jpeg',
            price: '39.99',
            description: 'A collared shirt with cactus details.',
            colors: ['Orange', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 3,
            name: 'Rose Shirt',
            filename: 'mens-apparel-3.jpeg',
            price: '39.99',
            description: 'A collared shirt with rose details.',
            colors: ['Mint', 'Green', 'Pink'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 4,
            name: 'Painting Shirt',
            filename: 'mens-apparel-4.jpeg',
            price: '39.99',
            description: 'A collared shirt that looks like an oil painting.',
            colors: ['Blue', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 5,
            name: 'Celestial Shirt',
            filename: 'mens-apparel-5.jpeg',
            price: '39.99',
            description: 'A collared shirt with a cat and celestial details.',
            colors: ['Red', 'Blue'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 6,
            name: 'Continental Cargo Shorts',
            filename: 'mens-apparel-6.jpeg',
            price: '49.99',
            description: 'Canvas shorts with map details.',
            colors: ['Beige', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 7,
            name: 'Embroidered Shorts',
            filename: 'mens-apparel-7.jpeg',
            price: '39.99',
            description: 'Comfortable shorts with embroidered details.',
            colors: ['Cream', 'White'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 8,
            name: 'Dino Sweater',
            filename: 'mens-apparel-8.jpeg',
            price: '69.99',
            description: 'A patchwork sweater with different prints and dinosaurs.',
            colors: ['Red', 'Blue', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 9,
            name: 'Linen Pants',
            filename: 'mens-apparel-9.jpeg',
            price: '29.99',
            description: 'Comfortable, 100% cotton pants for men.',
            colors: ['Beige', 'Cream', 'Oatmeal'],
            sizes: ['S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 10,
            name: 'Rainbow Sweater',
            filename: 'mens-apparel-10.jpeg',
            price: '69.99',
            description: 'A thick sweater with rainbow hues.',
            colors: ['Rainbow', 'Pastel Edition'],
            sizes: ['S', 'M', 'L', 'XL'],
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
    res.render('apparel-M', { sectionContent, products });
});

module.exports = router;