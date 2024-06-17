const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
            name: 'Carrera',
            price: '$199.99',
            id: '49'
        },
        { 
            image: 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBnbGFzc2VzfGVufDB8fDB8fHww',
            name: 'Fendi',
            price: '$199.99',
            id: '50'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1517530094915-500495b15ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Oakley',
            price: '$229.99',
            id: '51'
        },
        { 
            image: 'https://images.unsplash.com/photo-1576110485925-dcb0c92183c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1lbnMlMjBnbGFzc2VzfGVufDB8fDB8fHww',
            name: 'Ray Ban',
            price: '$239.99',
            id: '52'
        },
        { 
            image: 'https://images.unsplash.com/photo-1523452617300-93ebbf63ed61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Silhouette',
            price: '$249.99',
            id: '53'
        },
        { 
            image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Costa',
            price: '$249.99',
            id: '54'
        },
        { 
            image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Oliver Peoples',
            price: '$299.99',
            id: '55'
        },
        { 
            image: 'https://images.unsplash.com/photo-1646251165758-df8462c08202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxtZW5zJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
            name: 'Persol',
            price: '$299.99',
            id: '56'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('glasses', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;