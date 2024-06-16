const router = require('express').Router();
// const { Collection } = require('../../backend/models/collection');

// The `/api/collection` endpoint
// find all collection
// include its associated Products
router.get('/', async (req, res) => {
  try {
    const CollectionData = await Collection.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(CollectionData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// find one collection by its `id` value
// include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const CollectionData = await Collection.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!CollectionData) {
      res.status(400).json({ message: "not found" });
      return;
    }
    res.status(200).json(CollectionData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try {
    const CollectionData = await Collection.create(req.body);
    res.status(200).json(CollectionData);
  } catch (err) {
    console.log(error);
    res.status(500).json(error);
  }
  // create a new collection
});

router.put('/:id', async (req, res) => {
  try {
    const CollectionData = await Collection.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  if (!CollectionData [0]) {
    res.status(400).json({message: "Category is not found."});
    return;
  }
  res.status(200).json(CollectionData);
} catch (error) {
  console.log (error);
  res.status(500).json(error);
}
  // update a collection by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const CollectionData = await Collection.destroy({
      where: {
        id: req.params.id,
      },
      });
      if (!CollectionData) {
        res.status (400).json({ message: "Collection not found."});
        return;
      }
      res.status(200).json(CollectionData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  // delete a collection by its `id` value
});

module.exports = router;
