const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/4993014/pexels-photo-4993014.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 1',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2',
            price: '$24.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3',
            price: '$29.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.pexels.com/photos/1770167/pexels-photo-1770167.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 4',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.pexels.com/photos/1637834/pexels-photo-1637834.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.pexels.com/photos/24740347/pexels-photo-24740347/free-photo-of-portrait-of-woman-with-brown-hair.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.pexels.com/photos/8989580/pexels-photo-8989580.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.pexels.com/photos/20611671/pexels-photo-20611671/free-photo-of-shiny-and-green-earring.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('jewelry', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;