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
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
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