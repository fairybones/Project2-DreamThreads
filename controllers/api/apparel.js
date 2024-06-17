const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
            name: 'Thursday Boots',
            price: '$29.99',
            id: '17'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1666184127688-ed05d3fd3af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Derek Rose',
            price: '$39.99',
            id: '18'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1619102814948-e164e584cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Brooks Brothers',
            price: '$39.99',
            id: '19'
        },
        { 
            image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Nordstrom',
            price: '$39.99',
            id: '20'
        },
        { 
            image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Dearborn Denim',
            price: '$49.99',
            id: '21'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1683121564871-bcab8f7de477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
            name: 'J Crew',
            price: '$49.99',
            id: '22'
        },
        { 
            image: 'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Nike',
            price: '$69.99',
            id: '23'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Blue Delta',
            price: '$69.99',
            id: '24'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('apparel', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;

