const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/9944432/pexels-photo-9944432.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'ARMANI',
            price: '$29.99',
            id: '73'
        },
        { 
            image: 'https://images.pexels.com/photos/4736017/pexels-photo-4736017.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CALVIN KLEIN',
            price: '$34.99',
            id: '74'
    
        },
        { 
            image: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'DOLCE & GABBANA',
            price: '$39.99',
            id: '75'
        },
        { 
            image: 'https://images.pexels.com/photos/1200502/pexels-photo-1200502.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CHANEL',
            price: '$44.99',
            id: '76'
        },
        { 
            image: 'https://images.pexels.com/photos/4333584/pexels-photo-4333584.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Jimmy Choo',
            price: '$49.99',
            id: '77'
        },
        { 
            image: 'https://images.pexels.com/photos/6729087/pexels-photo-6729087.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Byredo',
            price: '$59.99',
            id: '78'
        },
        { 
            image: 'https://images.pexels.com/photos/20591026/pexels-photo-20591026/free-photo-of-bottle-of-perfumes-and-candles.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Maison Margiela',
            price: '$69.99',
            id: '79'
        },
        { 
            image: 'https://images.pexels.com/photos/8625539/pexels-photo-8625539.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Guerlain',
            price: '$79.99',
            id: '80'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('perfume', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;