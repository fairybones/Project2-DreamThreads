const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const products = [
    {
        image: 'https://plus.unsplash.com/premium_photo-1663013641343-7800dfa7eeb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGJhZ3N8ZW58MHx8MHx8fDA%3D',
        name: 'Product 1',
        price: '$19.99',
        id: 'masc1'
    },
    { 
        image: 'https://images.unsplash.com/photo-1531938716357-224c16b5ace3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGJhZ3N8ZW58MHx8MHx8fDA%3D',
        name: 'Product 2',
        price: '$24.99',
        id: 'masc2'

    },
    { 
        image: 'https://images.unsplash.com/photo-1551830724-90e3ad273bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Product 3',
        price: '$29.99',
        id: 'masc3'
    },
    { 
        image: 'https://images.unsplash.com/photo-1599033769082-95726e3c7900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhZyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Product 4',
        price: '$39.99',
        id: 'masc4'
    },
    { 
        image: 'https://images.unsplash.com/flagged/photo-1557581462-0bf3e5907811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBoYXR8ZW58MHx8MHx8fDA%3D',
        name: 'Product 5',
        price: '$49.99',
        id: 'masc5'
    },
    { 
        image: 'https://images.unsplash.com/photo-1513741125995-599c48b4d213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lbnMlMjBoYXR8ZW58MHx8MHx8fDA%3D',
        name: 'Product 6',
        price: '$59.99',
        id: 'masc6'
    },
    { 
        image: 'https://plus.unsplash.com/premium_photo-1661315590779-08802ce7df91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnMlMjBoYXR8ZW58MHx8MHx8fDA%3D',
        name: 'Product 7',
        price: '$69.99',
        id: 'masc7'
    },
    { 
        image: 'https://images.unsplash.com/photo-1635350480400-6f920150b1a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1lbnMlMjBoYXR8ZW58MHx8MHx8fDA%3D',
        name: 'Product 8',
        price: '$79.99',
        id: 'masc8'
    }
];


    let modalsHtml = ''; // Initialize an empty string to store modal HTML

    products.forEach((product) => {
        // Generate modal HTML for each product
        const modalHtml = `
            <div class="modal" id="modal-${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        
        modalsHtml += modalHtml; // Append modal HTML to the modals container
    });

    // HTML content for the section with modals
    const sectionContent = `
        <section class="bg-white py-8">
            <div id="modals-container">
                ${modalsHtml} <!-- Insert generated modals here -->
            </div>
        </section>
    `;

    // Render the accessories.handlebars template with the product data and section content
    res.render('accessories', { sectionContent, products, logged_in: req.session.loggedIn });
});

module.exports = router;