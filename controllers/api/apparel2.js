const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        { 
            image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 1',
            price: '$19.99'
        },
        { 
            image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2',
            price: '$24.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3',
            price: '$29.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 4',
            price: '$39.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 5',
            price: '$49.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 6',
            price: '$59.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 7',
            price: '$69.99'
        },
        { 
            image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 8',
            price: '$79.99'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('apparel2', { sectionContent, products });
});

module.exports = router;