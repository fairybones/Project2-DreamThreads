const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/9944432/pexels-photo-9944432.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'ARMANI',
            price: '$29.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.pexels.com/photos/4736017/pexels-photo-4736017.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CALVIN KLEIN',
            price: '$34.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'DOLCE & GABBANA',
            price: '$39.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.pexels.com/photos/1200502/pexels-photo-1200502.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CHANEL',
            price: '$44.99',
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
    res.render('perfume', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;