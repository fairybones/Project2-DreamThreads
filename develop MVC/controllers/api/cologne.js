const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        { 
            image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 14324234',
            price: '$19.99'
        },
        { 
            image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 2234324',
            price: '$24.99'
        },
        { 
            image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Product 3234324234',
            price: '$29.99'
        }
    ];

    // Render the apparel.handlebars template with the product data
    res.render('accessories', { products });
});

module.exports = router;