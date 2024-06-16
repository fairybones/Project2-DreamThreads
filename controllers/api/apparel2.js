const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/8307702/pexels-photo-8307702.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Erdem',
            price: '$29.99',
            id: 'masc25'
        },
        { 
            image: 'https://images.pexels.com/photos/5775937/pexels-photo-5775937.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Miu Miu',
            price: '$29.99',
            id: 'masc26'
    
        },
        { 
            image: 'https://images.pexels.com/photos/8764562/pexels-photo-8764562.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Jil Sander',
            price: '$39.99',
            id: 'masc27'
        },
        { 
            image: 'https://images.pexels.com/photos/6211619/pexels-photo-6211619.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Carolina Herrera',
            price: '$39.99',
            id: 'masc28'
        },
        { 
            image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Zimmermann',
            price: '$49.99',
            id: 'masc29'
        },
        { 
            image: 'https://images.pexels.com/photos/18421849/pexels-photo-18421849/free-photo-of-young-woman-in-a-pink-suit-sitting-in-a-room-with-blue-lighting.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sandy Liang',
            price: '$49.99',
            id: 'masc30'
        },
        { 
            image: 'https://images.pexels.com/photos/20636632/pexels-photo-20636632/free-photo-of-portrait-of-a-woman-standing-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Gia Borghini',
            price: '$59.99',
            id: 'masc31'
        },
        { 
            image: 'https://images.pexels.com/photos/6316094/pexels-photo-6316094.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Bode',
            price: '$59.99',
            id: 'masc32'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('apparel2', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;