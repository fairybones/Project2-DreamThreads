const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const products = [
    {
        image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 1',
        price: '$19.99',
        id: 'col1'
    },
    { 
        image: 'https://images.pexels.com/photos/7691223/pexels-photo-7691223.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 2',
        price: '$24.99',
        id: 'col2'

    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 3',
        price: '$29.99',
        id: 'col3'
    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 4',
        price: '$39.99',
        id: 'col4'
    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 5',
        price: '$49.99',
        id: 'col5'
    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 6',
        price: '$59.99',
        id: 'col6'
    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 7',
        price: '$69.99',
        id: 'col7'
    },
    { 
        image: 'https://images.pexels.com/photos/6163221/pexels-photo-6163221.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 8',
        price: '$79.99',
        id: 'col8'
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
    res.render('accessories', { sectionContent, products });
});

module.exports = router;