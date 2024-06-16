const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
            name: 'Product 1',
            price: '$19.99',
            id: 'masc1'
        },
        { 
            image: 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBnbGFzc2VzfGVufDB8fDB8fHww',
            name: 'Product 2',
            price: '$24.99',
            id: 'masc2'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1517530094915-500495b15ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 3',
            price: '$29.99',
            id: 'masc3'
        },
        { 
            image: 'https://images.unsplash.com/photo-1576110485925-dcb0c92183c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1lbnMlMjBnbGFzc2VzfGVufDB8fDB8fHww',
            name: 'Product 4',
            price: '$39.99',
            id: 'masc4'
        },
        { 
            image: 'https://images.unsplash.com/photo-1523452617300-93ebbf63ed61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 5',
            price: '$49.99',
            id: 'masc5'
        },
        { 
            image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 6',
            price: '$59.99',
            id: 'masc6'
        },
        { 
            image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 7',
            price: '$69.99',
            id: 'masc7'
        },
        { 
            image: 'https://images.unsplash.com/photo-1646251165758-df8462c08202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 8',
            price: '$79.99',
            id: 'masc8'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('glasses', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;