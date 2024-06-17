const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample product data with photo URLs
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
            name: 'Valentino',
            price: '$19.99',
            id: '81'
        },
        { 
            image: 'https://images.unsplash.com/photo-1623091928870-dbe5bd43ea7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Aeron',
            price: '$19.99',
            id: '82'
    
        },
        { 
            image: 'https://images.unsplash.com/photo-1626543750227-7686f9bd3e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Etro',
            price: '$19.99',
            id: '83'
        },
        { 
            image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Iro',
            price: '$19.99',
            id: '84'
        },
        { 
            image: 'https://images.unsplash.com/photo-1605580528632-0718634a48df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Canali',
            price: '$29.99',
            id: '85'
        },
        { 
            image: 'https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Polo',
            price: '$29.99',
            id: '86'
        },
        { 
            image: 'https://images.unsplash.com/photo-1593359684352-cb3fd6c0ff1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D',
            name: 'Ugg',
            price: '$29.99',
            id: '87'
        },
        { 
            image: 'https://images.unsplash.com/photo-1484517586036-ed3db9e3749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Vince',
            price: '$29.99',
            id: '88'
        }
    ];

    // HTML content for the section
    const sectionContent = '<section class="bg-white py-8">  </section>';

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;