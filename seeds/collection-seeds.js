//collection seeds
const { Collection } = require('../backend/models/collection');

const collectionData = [
  {
    collection_name: 'Shirts',
  },
  {
    collection_name: 'Shorts',
  },
  {
    collection_name: 'accesories',
  },
  {
    collection_name: 'Hats',
  },
  {
    collection_name: 'Shoes',
  },
];

const seedCollection = () => Colleciton.bulkCreate(collecitonData);

module.exports = seedCollection;