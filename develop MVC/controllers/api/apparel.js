const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        { 
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 1',
            price: '$19.99'
        },
        { 
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2',
            price: '$24.99'
        },
        { 
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3',
            price: '$29.99'
        }
    ];

    // Render the apparel.handlebars template with the product data
    res.render('apparel', { products });
});

module.exports = router;