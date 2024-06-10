const router = require('express').Router();
const { Tag } = require('../../backend/models/tag');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
     include: [{model: Product }] 
    }); 
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // find all the tags
  // include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id,{
     include: [{model: Product }] 
    }); 
    if (!tagData){
      res.status(400).json({message: "Tag not found"})
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body); 
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body,{
     where: {
      id: req.params.id
     }
    }); 
    if(!tagData[0]){
      res.status(400).json({message: "Tag not found"})
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
     where: {
      id: req.params.id
     } 
    }); 
    if (!tagData){
      res.status(400).json({message: "Tag not found"})
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // delete on tag by its `id` value
});

module.exports = router;