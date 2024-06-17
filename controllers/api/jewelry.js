const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/4993014/pexels-photo-4993014.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Chopard',
            price: '$124.99',
            id: '57'
        },
        { 
            image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Buccellati',
            price: '$124.99',
            id: '58'
    
        },
        { 
            image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Harry Winston',
            price: '$129.99',
            id: '59'
        },
        { 
            image: 'https://images.pexels.com/photos/1770167/pexels-photo-1770167.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Monica Vinader',
            price: '$129.99',
            id: '60'
        },
        { 
            image: 'https://images.pexels.com/photos/1637834/pexels-photo-1637834.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Graff',
            price: '$134.99',
            id: '61'
        },
        { 
            image: 'https://images.pexels.com/photos/24740347/pexels-photo-24740347/free-photo-of-portrait-of-woman-with-brown-hair.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Mejuri',
            price: '$134.99',
            id: '62'
        },
        { 
            image: 'https://images.pexels.com/photos/8989580/pexels-photo-8989580.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Bvlgari',
            price: '$139.99',
            id: '63'
        },
        { 
            image: 'https://images.pexels.com/photos/20611671/pexels-photo-20611671/free-photo-of-shiny-and-green-earring.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'David Yurman',
            price: '$139.99',
            id: '64'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('jewelry', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;