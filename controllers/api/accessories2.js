const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/10398044/pexels-photo-10398044.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 1',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.pexels.com/photos/20674996/pexels-photo-20674996/free-photo-of-woman-going-down-the-stairs.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2',
            price: '$24.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.pexels.com/photos/7707096/pexels-photo-7707096.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3',
            price: '$29.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.pexels.com/photos/12189047/pexels-photo-12189047.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 4',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.pexels.com/photos/18092913/pexels-photo-18092913/free-photo-of-golden-rings-on-woman-hand.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.pexels.com/photos/5358919/pexels-photo-5358919.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.pexels.com/photos/9968505/pexels-photo-9968505.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.pexels.com/photos/4543495/pexels-photo-4543495.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories2', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;