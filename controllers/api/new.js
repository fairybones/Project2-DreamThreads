const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1592423777039-7be9f340582b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxjbG90aGVzfGVufDB8fDB8fHww',
            name: 'ZILLI',
            price: '$19.99',
            id: 'masc65'
        },
        { 
            image: 'https://images.unsplash.com/photo-1542825735-273f6f8eda1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxjbG90aGVzfGVufDB8fDB8fHww',
            name: 'VERSACE JEANS COUTURE',
            price: '$24.99',
            id: 'masc66'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
            name: 'TORY BURCH',
            price: '$29.99',
            id: 'masc67'
        },
        { 
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
            name: 'GANNI',
            price: '$39.99',
            id: 'masc68'
        },
        { 
            image: 'https://images.unsplash.com/photo-1615087574126-f4f3d62d73cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww',
            name: 'FORTE FORTE',
            price: '$49.99',
            id: 'masc69'
        },
        { 
            image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxjbG90aGVzfGVufDB8fDB8fHww',
            name: 'C.P. COMPANY',
            price: '$59.99',
            id: 'masc70'
        },
        { 
            image: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww',
            name: 'SIMKHAI',
            price: '$69.99',
            id: 'masc71'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1688497831136-0b76172b0f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww',
            name: 'MAX&MOI',
            price: '$79.99',
            id: 'masc72'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('new', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;