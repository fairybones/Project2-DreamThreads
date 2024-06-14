// product seeds
const { Product } = require('../models/product');

const productData = [
  {
    id: 'masc1',
    name: "Swirly Sweater",
    image: "mens-apparel-1.jpeg",
    price: "99.99",
    description: "A comfortable swirly sweater for men.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Cactus Shirt",
    image: "mens-apparel-2.jpeg",
    price: "39.99",
    description: "A collared shirt with cactus details.",
    colors: ["Orange", "Green"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Rose Shirt",
    image: "mens-apparel-3.jpeg",
    price: "39.99",
    description: "A collared shirt with rose details.",
    colors: ["Mint", "Green", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Painting Shirt",
    image: "mens-apparel-4.jpeg",
    price: "39.99",
    description: "A collared shirt that looks like an oil painting.",
    colors: ["Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Celestial Shirt",
    image: "mens-apparel-5.jpeg",
    price: "39.99",
    description: "A collared shirt with a cat and celestial details.",
    colors: ["Red", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Continental Cargo Shorts",
    image: "mens-apparel-6.jpeg",
    price: "49.99",
    description: "Canvas shorts with map details.",
    colors: ["Beige", "Green"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Embroidered Shorts",
    image: "mens-apparel-7.jpeg",
    price: "39.99",
    description: "Comfortable shorts with embroidered details.",
    colors: ["Cream", "White"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Dino Sweater",
    image: "mens-apparel-8.jpeg",
    price: "69.99",
    description: "A patchwork sweater with different prints and dinosaurs.",
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Linen Pants",
    image: "mens-apparel-9.jpeg",
    price: "29.99",
    description: "Comfortable, 100% cotton pants for men.",
    colors: ["Beige", "Cream", "Oatmeal"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Rainbow Sweater",
    image: "mens-apparel-10.jpeg",
    price: "69.99",
    description: "A thick sweater with rainbow hues.",
    colors: ["Rainbow", "Pastel Edition"],
    sizes: ["S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "YSL Cologne",
    image: "mens-cologne-1.jpeg",
    price: "129.99",
    description: "A dreamy scent with notes of sandalwood & musk.",
    colors: "One Color",
    sizes: ["Travel", "Small", "Large"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Burberry Cologne",
    image: "mens-cologne-2.jpeg",
    price: "179.99",
    description: "A dreamy scent with notes of bamboo & linen.",
    colors: "One Color",
    sizes: ["Travel", "Small", "Large"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Burberry Cologne",
    image: "mens-cologne-3.jpeg",
    price: "129.99",
    description: "A strong scent with notes of sandalwood & musk.",
    colors: "One Color",
    sizes: ["Travel", "Small", "Large"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Chrome Cologne",
    image: "mens-cologne-4.jpeg",
    price: "99.99",
    description: "A strong scent with notes of bamboo & linen.",
    colors: "One Color",
    sizes: ["Travel", "Small", "Large"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Dior Cologne",
    image: "mens-cologne-5.jpeg",
    price: "179.99",
    description: "A calm scent with floral notes.",
    colors: "One Color",
    sizes: ["Travel", "Small", "Large"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Golden Sunglasses",
    image: "mens-glasses-1.jpeg",
    price: "129.99",
    description: "Sunglasses with gold chrome.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "3D Sunglasses",
    image: "mens-glasses-2.jpeg",
    price: "189.99",
    description: "Futuristic sunglasses that mimic 3D movie glasses.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Tinted Sunglasses (Brown)",
    image: "mens-glasses-3.jpeg",
    price: "29.99",
    description: "Sunglasses with brown frames & colored lenses.",
    colors: ["Blue", "Yellow", "Pink"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Tinted Sunglasses (Black)",
    image: "mens-glasses-4.jpeg",
    price: "29.99",
    description: "Sunglasses with black frames & colored lenses.",
    colors: ["Purple", "Red", "Blue"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Polarized Sunglasses",
    image: "mens-glasses-5.jpeg",
    price: "89.99",
    description: "Polarized sunglasses with tinted lenses.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Denim Star Shoes",
    image: "mens-shoes-1.jpeg",
    price: "99.99",
    description: "Sneakers with denim detailing in mens sizing.",
    colors: "Blue",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Starry Sneakers",
    image: "mens-shoes-2.jpeg",
    price: "99.99",
    description: "Sneakers with suede star detailing in mens sizing.",
    colors: "Green",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Dragonfly Boots",
    image: "mens-shoes-3.jpeg",
    price: "119.99",
    description: "Boots with gold detailing in mens sizing.",
    colors: "Black",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Lion Boots",
    image: "mens-shoes-4.jpeg",
    price: "119.99",
    description: "Boots with leather detailing in mens sizing.",
    colors: ["Brown", "Olive Green"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Doodle Sneakers",
    image: "mens-shoes-5.jpeg",
    price: "99.99",
    description: "Sneakers with illustrative detailing in mens sizing.",
    colors: ["Green", "Blue"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Golden Quartz",
    image: "mens-watches-1.jpeg",
    price: "99.99",
    description: "A water resistant watch that keeps digital & analog time.",
    colors: "One Color",
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Emerald Watch",
    image: "mens-watches-2.jpeg",
    price: "149.99",
    description: "A water resistant watch that displays analog time.",
    colors: "One Color",
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Celestial Watch",
    image: "mens-watches-3.jpeg",
    price: "129.99",
    description: "A celestial-inspired watch that changes from day to night.",
    colors: ["Olive Green", "Brown", "Black"],
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Night Watch",
    image: "mens-watches-4.jpeg",
    price: "169.99",
    description: "A water resistant watch with gold detailing.",
    colors: "Black",
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Rose Gold Watch",
    image: "mens-watches-5.jpeg",
    price: "169.99",
    description: "A water resistant watch with rose gold detailing.",
    colors: "Black",
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Ruffle Top",
    image: "womens-apparel-1.jpeg",
    price: "29.99",
    description: "A chiffon blouse with ruffle detailing",
    colors: ["Rose", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Floral Lace Top",
    image: "womens-apparel-2.jpeg",
    price: "29.99",
    description: "A floral camisole with lace details",
    colors: "Multicolor",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Laced Bustier",
    image: "womens-apparel-3.jpeg",
    price: "59.99",
    description: "A structured top with pink ribbon lacing.",
    colors: "Multicolor",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Butterfly Top",
    image: "womens-apparel-4.jpeg",
    price: "59.99",
    description: "A bejeweled butterfly-shaped lace up top.",
    colors: "Multicolor",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Asymmetrical Dress",
    image: "womens-apparel-5.jpeg",
    price: "89.99",
    description: "A ruffled dress with an asymmetrical hem.",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Love Letters Dress",
    image: "womens-apparel-6.jpeg",
    price: "99.99",
    description: "A rose colored dress with an asymmetrical hem.",
    colors: "Pink",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Fae Skort",
    image: "womens-apparel-7.jpeg",
    price: "49.99",
    description: "This fantastical skirt has shorts and butterfly details.",
    colors: "Multicolor",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Mermaiden Top",
    image: "womens-apparel-8.jpeg",
    price: "29.99",
    description: "A mesh camisole with shell-shaped lace.",
    colors: "Seafoam",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Brocade Pants",
    image: "womens-apparel-9.jpeg",
    price: "79.99",
    description: "High waisted flare pants with brocade detailing.",
    colors: "Cream",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Beaded Dress",
    image: "womens-apparel-10.jpeg",
    price: "199.99",
    description: "A peach dress with hand-sewn details",
    colors: "Multicolor",
    sizes: ["XS", "S", "M", "L", "XL"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Oval Sunglasses",
    image: "womens-accessories-1.jpeg",
    price: "129.99",
    description: "Chunky oval frames in cherry red or classic black.",
    colors: ["Black", "Red"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "See No BS",
    image: "womens-accessories-2.jpeg",
    price: "199.99",
    description: "Colorful goggles to blind the haters.",
    colors: "Multicolor",
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Holographic Gloves",
    image: "womens-accessories-3.jpeg",
    price: "69.99",
    description: "Rainbow reflective gloves that pack a punch!",
    colors: ["Pink Holo", "Black Holo"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Fluffy Tinted Glasses",
    image: "womens-accessories-4.jpeg",
    price: "29.99",
    description: "Super soft frames with colored lenses.",
    colors: ["Pink", "Blue", "Purple"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "My Heart Bag",
    image: "womens-accessories-5.jpeg",
    price: "295.99",
    description:
      "Crystallized anatomical heart bag to hold your favorite things.",
    colors: ["Gold", "Silver"],
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Fresh Bouquet of Flowers",
    image: "womens-perfume-1.jpeg",
    price: "69.99",
    description: "A sweet scent with floral notes.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Diamond of the Garden",
    image: "womens-perfume-2.jpeg",
    price: "119.99",
    description: "A spicy scent with floral notes.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Princess Perfume",
    image: "womens-perfume-3.jpeg",
    price: "79.99",
    description: "A lightly floral scent with notes of sandalwood.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Starry Perfume",
    image: "womens-perfume-4.jpeg",
    price: "129.99",
    description: "A dreamy scent with notes of vanilla and lavender.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "I Like Candy",
    image: "womens-perfume-5.jpeg",
    price: "119.99",
    description: "A sweet, citrusy summer scent.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Dragon Ring",
    image: "womens-jewelry-1.jpeg",
    price: "79.99",
    description:
      "A bejeweled dragon ring with purple, red, and blue gemstones.",
    colors: ["Purple", "Red", "Blue"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Birds Ring",
    image: "womens-jewelry-2.jpeg",
    price: "89.99",
    description: "A bejeweled ring with red and pink birds made of gemstones.",
    colors: ["Gold", "Silver"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Celestial Earrings",
    image: "womens-jewelry-3.jpeg",
    price: "79.99",
    description: "Dazzling earrings dripping with stars.",
    colors: "One Color",
    sizes: "One Size",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Gem Bracelet",
    image: "womens-jewelry-4.jpeg",
    price: "109.99",
    description: "A chain bracelet with multicolor gemstones.",
    colors: ["Gold", "Silver"],
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Gem Necklace",
    image: "womens-jewelry-5.jpeg",
    price: "199.99",
    description: "A chain featuring multicolor gemstones.",
    colors: ["Gold", "Silver"],
    sizes: "Adjustable",
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Eden Sandal",
    image: "womens-shoes-1.jpeg",
    price: "129.99",
    description: "Kitten heels with bejeweled floral details in womens sizing.",
    colors: "Multicolor",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Fairy Heels",
    image: "womens-shoes-2.jpeg",
    price: "119.99",
    description: "Fanciful heels featuring fairy wings in womens sizing.",
    colors: "Pink",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Butterfly Heels",
    image: "womens-shoes-3.jpeg",
    price: "129.99",
    description: "Dreamy heels with silk butterflies in womens sizing.",
    colors: "Multicolor",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Tulip Boots",
    image: "womens-shoes-4.jpeg",
    price: "199.99",
    description: "Knee high leather boots with flowers in womens sizing.",
    colors: "Pink",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
  {
    id: 'masc1',
    name: "Bow Boots",
    image: "womens-shoes-5.jpeg",
    price: "199.99",
    description: "Knee high leather boots with bows in womens sizing.",
    colors: "Pink",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    // quantity: ''
  },
];

const seedProducts = async () => {
  try {
    await Product.sync({ force: true }); // This will drop the table and re-create it
    await Product.bulkCreate(productData);
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedProducts();

module.exports = seedProducts;
