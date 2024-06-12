const express = require('express');
const router = express.Router();

// fetch women's apparel

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            product_id: 31,
            name: 'Ruffle Top',
            filename: 'womens-apparel-1.jpeg',
            price: '29.99',
            description: 'A chiffon blouse with ruffle detailing',
            colors: ['Rose', 'White'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 32,
            name: 'Floral Lace Top',
            filename: 'womens-apparel-2.jpeg',
            price: '29.99',
            description: 'A floral camisole with lace details',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 33,
            name: 'Laced Bustier',
            filename: 'womens-apparel-3.jpeg',
            price: '59.99',
            description: 'A structured top with pink ribbon lacing.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 34,
            name: 'Butterfly Top',
            filename: 'womens-apparel-4.jpeg',
            price: '59.99',
            description: 'A bejeweled butterfly-shaped lace up top.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 35,
            name: 'Asymmetrical Dress',
            filename: 'womens-apparel-5.jpeg',
            price: '89.99',
            description: 'A ruffled dress with an asymmetrical hem.',
            colors: ['Black', 'White'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 36,
            name: 'Love Letters Dress',
            filename: 'womens-apparel-6.jpeg',
            price: '99.99',
            description: 'A rose colored dress with an asymmetrical hem.',
            colors: 'Pink',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 37,
            name: 'Fae Skort',
            filename: 'womens-apparel-7.jpeg',
            price: '49.99',
            description: 'This fantastical skirt has shorts and butterfly details.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 38,
            name: 'Mermaiden Top',
            filename: 'womens-apparel-8.jpeg',
            price: '29.99',
            description: 'A mesh camisole with shell-shaped lace.',
            colors: 'Seafoam',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 39,
            name: 'Brocade Pants',
            filename: 'womens-apparel-9.jpeg',
            price: '79.99',
            description: 'High waisted flare pants with brocade detailing.',
            colors: 'Cream',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            // quantity: ''
        },
        {
            product_id: 40,
            name: 'Beaded Dress',
            filename: 'womens-apparel-10.jpeg',
            price: '199.99',
            description: 'A peach dress with hand-sewn details',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
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

    // Render the apparel-W.handlebars template with the product data and section content
    res.render('apparel-W', { sectionContent, products });
});

module.exports = router;