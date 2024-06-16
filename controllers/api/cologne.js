const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://t3.ftcdn.net/jpg/04/19/87/42/360_F_419874276_nxcTtIsjxNAFVAj8hBkIIsCAkw8UuOHX.jpg',
            name: 'DIOR',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://st4.depositphotos.com/36741118/38089/i/450/depositphotos_380890446-stock-photo-mens-perfume-toilet-water-suit.jpg',
            name: 'CHANEL',
            price: '$29.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://st2.depositphotos.com/35003014/43315/i/450/depositphotos_433157266-stock-photo-men-perfume-black-leaves-wooden.jpg',
            name: 'RALPH LAUREN',
            price: '$34.99',
            id: 'masc3'
        },
        { 
            image: 'https://thumbs.dreamstime.com/b/bottle-mens-cologne-cufflinks-blue-tie-lie-black-luxury-fabric-background-wooden-table-mens-classic-212712647.jpg',
            name: 'VERSACE',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://t3.ftcdn.net/jpg/04/32/90/48/240_F_432904868_69AOOMcZP994jNLIoS1g1OJ0xSdjDtvA.jpg',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        {
            image: 'https://images.unsplash.com/photo-1682179329068-c2b92d996033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBjb2xvZ25lfGVufDB8fDB8fHww',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://t3.ftcdn.net/jpg/04/98/75/14/240_F_498751432_tRotSagsRZGBsOM9bu0nn5h4Mv3U4vQ5.jpg',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://t3.ftcdn.net/jpg/05/85/03/16/240_F_585031606_kLxdwvoik8lV2pery3wggYYqonXwYj32.jpg',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('cologne', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;