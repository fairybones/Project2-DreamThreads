const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1602752975366-5520991f958d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'BREMONT',
            price: '$99.99',
            id: '89'
        },
        { 
            image: 'https://images.unsplash.com/photo-1579171931975-97962e46be2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'BAUME & MERCIER',
            price: '$129.99',
            id: '90'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1517463700628-5103184eac47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fHww',
            name: 'JAEGER-LECOULTRE',
            price: '$149.99',
            id: '91'
        },
        { 
            image: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'PATEK PHILIPPE',
            price: '$199.99',
            id: '92'
        },
        { 
            image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D',
            name: 'Vacheron Constantin',
            price: '$149.99',
            id: '93'
        },
        { 
            image: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhdGNofGVufDB8fDB8fHww',
            name: 'Omega',
            price: '$149.99',
            id: '94'
        },
        { 
            image: 'https://images.unsplash.com/photo-1535346256685-0527f1dfd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdhdGNofGVufDB8fDB8fHww',
            name: 'IWC Schaffhausen',
            price: '$159.99',
            id: '95'
        },
        { 
            image: 'https://images.unsplash.com/photo-1561634370-e284d2c11cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHdhdGNofGVufDB8fDB8fHww',
            name: 'TAG Heuer',
            price: '$179.99',
            id: '96'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('watches', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;