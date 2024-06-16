const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.pexels.com/photos/10398044/pexels-photo-10398044.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Prada',
            price: '$99.99',
            id: 'masc9'
        },
        { 
            image: 'https://images.pexels.com/photos/20674996/pexels-photo-20674996/free-photo-of-woman-going-down-the-stairs.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Kate Spade',
            price: '$119.99',
            id: 'masc10'
    
        },
        { 
            image: 'https://images.pexels.com/photos/7707096/pexels-photo-7707096.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'JW Anderson',
            price: '$119.99',
            id: 'masc11'
        },
        { 
            image: 'https://images.pexels.com/photos/12189047/pexels-photo-12189047.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Givenchy',
            price: '$129.99',
            id: 'masc12'
        },
        { 
            image: 'https://images.pexels.com/photos/18092913/pexels-photo-18092913/free-photo-of-golden-rings-on-woman-hand.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Hermès',
            price: '$129.99',
            id: 'masc13'
        },
        { 
            image: 'https://images.pexels.com/photos/5358919/pexels-photo-5358919.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Loewe',
            price: '$139.99',
            id: 'masc14'
        },
        { 
            image: 'https://images.pexels.com/photos/9968505/pexels-photo-9968505.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Coach',
            price: '$149.99',
            id: 'masc15'
        },
        { 
            image: 'https://images.pexels.com/photos/4543495/pexels-photo-4543495.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Michael Kors',
            price: '$149.99',
            id: 'masc16'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories2', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;