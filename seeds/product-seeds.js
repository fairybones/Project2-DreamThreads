const { Product } = require('../models');
const filename = require('../images');

const productData = [
    {
        product_id: 1,
        name: 'Swirly Sweater',
        image: 'mens-apparel-1.jpeg',
        price: '99.99',
        description: 'A comfortable swirly sweater for men.',
        colors: ['Black', 'White'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 2,
        name: 'Cactus Shirt',
        filename: 'mens-apparel-2.jpeg',
        price: '39.99',
        description: 'A collared shirt with cactus details.',
        colors: ['Orange', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 3,
        name: 'Rose Shirt',
        filename: 'mens-apparel-3.jpeg',
        price: '39.99',
        description: 'A collared shirt with rose details.',
        colors: ['Mint', 'Green', 'Pink'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 4,
        name: 'Painting Shirt',
        filename: 'mens-apparel-4.jpeg',
        price: '39.99',
        description: 'A collared shirt that looks like an oil painting.',
        colors: ['Blue', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 5,
        name: 'Celestial Shirt',
        filename: 'mens-apparel-5.jpeg',
        price: '39.99',
        description: 'A collared shirt with a cat and celestial details.',
        colors: ['Red', 'Blue'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 6,
        name: 'Continental Cargo Shorts',
        filename: 'mens-apparel-6.jpeg',
        price: '49.99',
        description: 'Canvas shorts with map details.',
        colors: ['Beige', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 7,
        name: 'Embroidered Shorts',
        filename: 'mens-apparel-7.jpeg',
        price: '39.99',
        description: 'Comfortable shorts with embroidered details.',
        colors: ['Cream', 'White'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 8,
        name: 'Dino Sweater',
        filename: 'mens-apparel-8.jpeg',
        price: '69.99',
        description: 'A patchwork sweater with different prints and dinosaurs.',
        colors: ['Red', 'Blue', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 9,
        name: 'Linen Pants',
        filename: 'mens-apparel-9.jpeg',
        price: '29.99',
        description: 'Comfortable, 100% cotton pants for men.',
        colors: ['Beige', 'Cream', 'Oatmeal'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 10,
        name: 'Rainbow Sweater',
        filename: 'mens-apparel-10.jpeg',
        price: '69.99',
        description: 'A thick sweater with rainbow hues.',
        colors: ['Rainbow', 'Pastel Edition'],
        sizes: ['S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 11,
        name: 'YSL Cologne',
        filename: 'mens-cologne-1.jpeg',
        price: '129.99',
        description: 'A dreamy scent with notes of sandalwood & musk.',
        colors: 'One Color',
        sizes: ['Travel', 'Small', 'Large'],
        // quantity: ''
    },
    {
        product_id: 12,
        name: 'Burberry Cologne',
        filename: 'mens-cologne-2.jpeg',
        price: '179.99',
        description: 'A dreamy scent with notes of bamboo & linen.',
        colors: 'One Color',
        sizes: ['Travel', 'Small', 'Large'],
        // quantity: ''
    },
    {
        product_id: 13,
        name: 'Burberry Cologne',
        filename: 'mens-cologne-3.jpeg',
        price: '129.99',
        description: 'A strong scent with notes of sandalwood & musk.',
        colors: 'One Color',
        sizes: ['Travel', 'Small', 'Large'],
        // quantity: ''
    },
    {
        product_id: 14,
        name: 'Chrome Cologne',
        filename: 'mens-cologne-4.jpeg',
        price: '99.99',
        description: 'A strong scent with notes of bamboo & linen.',
        colors: 'One Color',
        sizes: ['Travel', 'Small', 'Large'],
        // quantity: ''
    },
    {
        product_id: 15,
        name: 'Dior Cologne',
        filename: 'mens-cologne-5.jpeg',
        price: '179.99',
        description: 'A calm scent with floral notes.',
        colors: 'One Color',
        sizes: ['Travel', 'Small', 'Large'],
        // quantity: ''
    },
    {
        product_id: 16,
        name: 'Golden Sunglasses',
        filename: 'mens-glasses-1.jpeg',
        price: '129.99',
        description: 'Sunglasses with gold chrome.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 17,
        name: '3D Sunglasses',
        filename: 'mens-glasses-2.jpeg',
        price: '189.99',
        description: 'Futuristic sunglasses that mimic 3D movie glasses.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 18,
        name: 'Tinted Sunglasses (Brown)',
        filename: 'mens-glasses-3.jpeg',
        price: '29.99',
        description: 'Sunglasses with brown frames & colored lenses.',
        colors: ['Blue', 'Yellow', 'Pink'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 19,
        name: 'Tinted Sunglasses (Black)',
        filename: 'mens-glasses-4.jpeg',
        price: '29.99',
        description: 'Sunglasses with black frames & colored lenses.',
        colors: ['Purple', 'Red', 'Blue'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 20,
        name: 'Polarized Sunglasses',
        filename: 'mens-glasses-5.jpeg',
        price: '89.99',
        description: 'Polarized sunglasses with tinted lenses.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 21,
        name: 'Denim Star Shoes',
        filename: 'mens-shoes-1.jpeg',
        price: '99.99',
        description: 'Sneakers with denim detailing in mens sizing.',
        colors: 'Blue',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 22,
        name: 'Starry Sneakers',
        filename: 'mens-shoes-2.jpeg',
        price: '99.99',
        description: 'Sneakers with suede star detailing in mens sizing.',
        colors: 'Green',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 23,
        name: 'Dragonfly Boots',
        filename: 'mens-shoes-3.jpeg',
        price: '119.99',
        description: 'Boots with gold detailing in mens sizing.',
        colors: 'Black',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 24,
        name: 'Lion Boots',
        filename: 'mens-shoes-4.jpeg',
        price: '119.99',
        description: 'Boots with leather detailing in mens sizing.',
        colors: ['Brown', 'Olive Green'],
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 25,
        name: 'Doodle Sneakers',
        filename: 'mens-shoes-5.jpeg',
        price: '99.99',
        description: 'Sneakers with illustrative detailing in mens sizing.',
        colors: ['Green', 'Blue'],
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 26,
        name: 'Golden Quartz',
        filename: 'mens-watches-1.jpeg',
        price: '99.99',
        description: 'A water resistant watch that keeps digital & analog time.',
        colors: 'One Color',
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 27,
        name: 'Emerald Watch',
        filename: 'mens-watches-2.jpeg',
        price: '149.99',
        description: 'A water resistant watch that displays analog time.',
        colors: 'One Color',
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 28,
        name: 'Celestial Watch',
        filename: 'mens-watches-3.jpeg',
        price: '129.99',
        description: 'A celestial-inspired watch that changes from day to night.',
        colors: ['Olive Green', 'Brown', 'Black'],
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 29,
        name: 'Night Watch',
        filename: 'mens-watches-4.jpeg',
        price: '169.99',
        description: 'A water resistant watch with gold detailing.',
        colors: 'Black',
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 30,
        name: 'Rose Gold Watch',
        filename: 'mens-watches-5.jpeg',
        price: '169.99',
        description: 'A water resistant watch with rose gold detailing.',
        colors: 'Black',
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 31,
        name: 'Ruffle Top',
        filename: 'womens-apparel-1.jpeg',
        price: '29.99',
        description: 'A chiffon blouse with ruffle detailing',
        colors: ['Rose', 'White'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 32,
        name: 'Floral Lace Top',
        filename: 'womens-apparel-2.jpeg',
        price: '29.99',
        description: 'A floral camisole with lace details',
        colors: 'Multicolor',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 33,
        name: 'Laced Bustier',
        filename: 'womens-apparel-3.jpeg',
        price: '59.99',
        description: 'A structured top with pink ribbon lacing.',
        colors: 'Multicolor',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 34,
        name: 'Butterfly Top',
        filename: 'womens-apparel-4.jpeg',
        price: '59.99',
        description: 'A bejeweled butterfly-shaped lace up top.',
        colors: 'Multicolor',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 35,
        name: 'Asymmetrical Dress',
        filename: 'womens-apparel-5.jpeg',
        price: '89.99',
        description: 'A ruffled dress with an asymmetrical hem.',
        colors: ['Black', 'White'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 36,
        name: 'Love Letters Dress',
        filename: 'womens-apparel-6.jpeg',
        price: '99.99',
        description: 'A rose colored dress with an asymmetrical hem.',
        colors: 'Pink',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 37,
        name: 'Fae Skort',
        filename: 'womens-apparel-7.jpeg',
        price: '49.99',
        description: 'This fantastical skirt has shorts and butterfly details.',
        colors: 'Multicolor',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 38,
        name: 'Mermaiden Top',
        filename: 'womens-apparel-8.jpeg',
        price: '29.99',
        description: 'A mesh camisole with shell-shaped lace.',
        colors: 'Seafoam',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 39,
        name: 'Brocade Pants',
        filename: 'womens-apparel-9.jpeg',
        price: '79.99',
        description: 'High waisted flare pants with brocade detailing.',
        colors: 'Cream',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 40,
        name: 'Beaded Dress',
        filename: 'womens-apparel-10.jpeg',
        price: '199.99',
        description: 'A peach dress with hand-sewn details',
        colors: 'Multicolor',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // quantity: ''
    },
    {
        product_id: 41,
        name: 'Oval Sunglasses',
        filename: 'womens-accessories-1.jpeg',
        price: '129.99',
        description: 'Chunky oval frames in cherry red or classic black.',
        colors: ['Black', 'Red'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 42,
        name: 'See No BS',
        filename: 'womens-accessories-2.jpeg',
        price: '199.99',
        description: 'Colorful goggles to blind the haters.',
        colors: 'Multicolor',
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 43,
        name: 'Holographic Gloves',
        filename: 'womens-accessories-3.jpeg',
        price: '69.99',
        description: 'Rainbow reflective gloves that pack a punch!',
        colors: ['Pink Holo', 'Black Holo'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 44,
        name: 'Fluffy Tinted Glasses',
        filename: 'womens-accessories-4.jpeg',
        price: '29.99',
        description: 'Super soft frames with colored lenses.',
        colors: ['Pink', 'Blue', 'Purple'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 45,
        name: 'My Heart Bag',
        filename: 'womens-accessories-5.jpeg',
        price: '295.99',
        description: 'Crystallized anatomical heart bag to hold your favorite things.',
        colors: ['Gold', 'Silver'],
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 46,
        name: 'Fresh Bouquet of Flowers',
        image: 'womens-perfume-1.jpeg',
        price: '69.99',
        description: 'A sweet scent with floral notes.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 47,
        name: 'Diamond of the Garden',
        image: 'womens-perfume-2.jpeg',
        price: '119.99',
        description: 'A spicy scent with floral notes.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 48,
        name: 'Princess Perfume',
        filename: 'womens-perfume-3.jpeg',
        price: '79.99',
        description: 'A lightly floral scent with notes of sandalwood.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 49,
        name: 'Starry Perfume',
        filename: 'womens-perfume-4.jpeg',
        price: '129.99',
        description: 'A dreamy scent with notes of vanilla and lavender.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 50,
        name: 'I Like Candy',
        filename: 'womens-perfume-5.jpeg',
        price: '119.99',
        description: 'A sweet, citrusy summer scent.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 51,
        name: 'Dragon Ring',
        filename: 'womens-jewelry-1.jpeg',
        price: '79.99',
        description: 'A bejeweled dragon ring with purple, red, and blue gemstones.',
        colors: ['Purple', 'Red', 'Blue'],
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 52,
        name: 'Birds Ring',
        filename: 'womens-jewelry-2.jpeg',
        price: '89.99',
        description: 'A bejeweled ring with red and pink birds made of gemstones.',
        colors: ['Gold', 'Silver'],
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 53,
        name: 'Celestial Earrings',
        filename: 'womens-jewelry-3.jpeg',
        price: '79.99',
        description: 'Dazzling earrings dripping with stars.',
        colors: 'One Color',
        sizes: 'One Size',
        // quantity: ''
    },
    {
        product_id: 54,
        name: 'Gem Bracelet',
        filename: 'womens-jewelry-4.jpeg',
        price: '109.99',
        description: 'A chain bracelet with multicolor gemstones.',
        colors: ['Gold', 'Silver'],
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 55,
        name: 'Gem Necklace',
        filename: 'womens-jewelry-5.jpeg',
        price: '199.99',
        description: 'A chain featuring multicolor gemstones.',
        colors: ['Gold', 'Silver'],
        sizes: 'Adjustable',
        // quantity: ''
    },
    {
        product_id: 56,
        name: 'Eden Sandal',
        filename: 'womens-shoes-1.jpeg',
        price: '129.99',
        description: 'Kitten heels with bejeweled floral details in womens sizing.',
        colors: 'Multicolor',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 57,
        name: 'Fairy Heels',
        filename: 'womens-shoes-2.jpeg',
        price: '119.99',
        description: 'Fanciful heels featuring fairy wings in womens sizing.',
        colors: 'Pink',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 58,
        name: 'Butterfly Heels',
        filename: 'womens-shoes-3.jpeg',
        price: '129.99',
        description: 'Dreamy heels with silk butterflies in womens sizing.',
        colors: 'Multicolor',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 59,
        name: 'Tulip Boots',
        filename: 'womens-shoes-4.jpeg',
        price: '199.99',
        description: 'Knee high leather boots with flowers in womens sizing.',
        colors: 'Pink',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
    {
        product_id: 60,
        name: 'Bow Boots',
        filename: 'womens-shoes-5.jpeg',
        price: '199.99',
        description: 'Knee high leather boots with bows in womens sizing.',
        colors: 'Pink',
        sizes: ['5', '6', '7', '8', '9', '10', '11'],
        // quantity: ''
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;