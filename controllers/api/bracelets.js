const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'TIFFANY & CO',
            price: '$49.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CARTIER',
            price: '$59.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.pexels.com/photos/814662/pexels-photo-814662.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CELINE',
            price: '$69.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.pexels.com/photos/37826/nature-hand-natural-people-37826.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'PURE VIDA',
            price: '$79.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.pexels.com/photos/20647557/pexels-photo-20647557/free-photo-of-woman-in-white-dress-and-with-necklace-and-bracelets.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.pexels.com/photos/8886980/pexels-photo-8886980.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.pexels.com/photos/8183950/pexels-photo-8183950.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.pexels.com/photos/1324859/pexels-photo-1324859.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('bracelets', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;