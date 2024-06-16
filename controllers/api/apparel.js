const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 1',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1666184127688-ed05d3fd3af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 2',
            price: '$24.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1619102814948-e164e584cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 3',
            price: '$29.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 4',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1683121564871-bcab8f7de477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('apparel', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;