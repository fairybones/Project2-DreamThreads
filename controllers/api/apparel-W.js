const express = require('express');
const router = express.Router();

// fetch women's apparel

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'womens-apparel-1.jpeg',
            name: 'Ruffle Top',
            price: '29.99',
            description: 'A chiffon blouse with ruffle detailing',
            colors: ['Rose', 'White'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '31'
        },
        {
            image: 'womens-apparel-2.jpeg',
            name: 'Floral Lace Top',
            price: '29.99',
            description: 'A floral camisole with lace details',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '32'
        },
        {
            image: 'womens-apparel-3.jpeg',
            name: 'Laced Bustier',
            price: '59.99',
            description: 'A structured top with pink ribbon lacing.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '33'
        },
        {
            image: 'womens-apparel-4.jpeg',
            name: 'Butterfly Top',
            price: '59.99',
            description: 'A bejeweled butterfly-shaped lace up top.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '34'
        },
        {
            image: 'womens-apparel-5.jpeg',
            name: 'Asymmetrical Dress',
            price: '89.99',
            description: 'A ruffled dress with an asymmetrical hem.',
            colors: ['Black', 'White'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '35'
        },
        {
            image: 'womens-apparel-6.jpeg',
            name: 'Love Letters Dress',
            price: '99.99',
            description: 'A rose colored dress with an asymmetrical hem.',
            colors: 'Pink',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '36'
        },
        {
            image: 'womens-apparel-7.jpeg',
            name: 'Fae Skort',
            price: '49.99',
            description: 'This fantastical skirt has shorts and butterfly details.',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '37'
        },
        {
            image: 'womens-apparel-8.jpeg',
            name: 'Mermaiden Top',
            price: '29.99',
            description: 'A mesh camisole with shell-shaped lace.',
            colors: 'Seafoam',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '38'
        },
        {
            image: 'womens-apparel-9.jpeg',
            name: 'Brocade Pants',
            price: '79.99',
            description: 'High waisted flare pants with brocade detailing.',
            colors: 'Cream',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '39'
        },
        {
            image: 'womens-apparel-10.jpeg',
            name: 'Beaded Dress',
            price: '199.99',
            description: 'A peach dress with hand-sewn details',
            colors: 'Multicolor',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            id: '40'
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

    // Render the apparel-W.handlebars template with the product data and section content
    res.render('apparel-W', { sectionContent, products });
});

module.exports = router;