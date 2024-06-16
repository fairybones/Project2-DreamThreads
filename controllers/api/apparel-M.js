const express = require('express');
const router = express.Router();

// fetch men's apparel

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'mens-apparel-1.jpeg',
            name: 'Swirly Sweater',
            price: '99.99',
            description: 'A comfortable swirly sweater for men.',
            colors: ['Black', 'White'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '1'
        },
        {
            image: 'mens-apparel-2.jpeg',
            name: 'Cactus Shirt',
            price: '39.99',
            description: 'A collared shirt with cactus details.',
            colors: ['Orange', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '2'
        },
        {
            image: 'mens-apparel-3.jpeg',
            name: 'Rose Shirt',
            price: '39.99',
            description: 'A collared shirt with rose details.',
            colors: ['Mint', 'Green', 'Pink'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '3'
        },
        {
            image: 'mens-apparel-4.jpeg',
            name: 'Painting Shirt',
            price: '39.99',
            description: 'A collared shirt that looks like an oil painting.',
            colors: ['Blue', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '4'
        },
        {
            image: 'mens-apparel-5.jpeg',
            name: 'Celestial Shirt',
            price: '39.99',
            description: 'A collared shirt with a cat and celestial details.',
            colors: ['Red', 'Blue'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '5'
        },
        {
            image: 'mens-apparel-6.jpeg',
            name: 'Continental Cargo Shorts',
            price: '49.99',
            description: 'Canvas shorts with map details.',
            colors: ['Beige', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '6'
        },
        {
            image: 'mens-apparel-7.jpeg',
            name: 'Embroidered Shorts',
            price: '39.99',
            description: 'Comfortable shorts with embroidered details.',
            colors: ['Cream', 'White'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '7'
        },
        {
            image: 'mens-apparel-8.jpeg',
            name: 'Dino Sweater',
            price: '69.99',
            description: 'A patchwork sweater with different prints and dinosaurs.',
            colors: ['Red', 'Blue', 'Green'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '8'
        },
        {
            image: 'mens-apparel-9.jpeg',
            name: 'Linen Pants',
            price: '29.99',
            description: 'Comfortable, 100% cotton pants for men.',
            colors: ['Beige', 'Cream', 'Oatmeal'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '9'
        },
        {
            image: 'mens-apparel-10.jpeg',
            name: 'Rainbow Sweater',
            price: '69.99',
            description: 'A thick sweater with rainbow hues.',
            colors: ['Rainbow', 'Pastel Edition'],
            sizes: ['S', 'M', 'L', 'XL'],
            id: '10'
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

    // Render the apparel-M.handlebars template with the product data and section content
    res.render('apparel-M', { sectionContent, products });
});

module.exports = router;