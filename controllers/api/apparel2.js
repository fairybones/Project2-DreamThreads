const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/8307702/pexels-photo-8307702.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 1',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.pexels.com/photos/5775937/pexels-photo-5775937.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2',
            price: '$24.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.pexels.com/photos/8764562/pexels-photo-8764562.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3',
            price: '$29.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.pexels.com/photos/6211619/pexels-photo-6211619.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 4',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.pexels.com/photos/18421849/pexels-photo-18421849/free-photo-of-young-woman-in-a-pink-suit-sitting-in-a-room-with-blue-lighting.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.pexels.com/photos/20636632/pexels-photo-20636632/free-photo-of-portrait-of-a-woman-standing-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.pexels.com/photos/6316094/pexels-photo-6316094.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('apparel2', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;