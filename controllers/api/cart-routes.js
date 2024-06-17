const Cart = require('../../models/cart');
const User = require('../../models/user');

const router = require('express').Router();

// The `/api/Cart` endpoint
router.get('/', async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(cartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one Cart by its `id` value
// include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const cartData = await Cart.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!cartData) {
      res.status(400).json({ message: "not found" });
      return;
    }
    res.status(200).json(cartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body) 
  const newPrice = req.body.price.replace("$", "")
  try {
    req.body.user_id=req.session.user_id
    req.body.price=parseFloat(newPrice);
    const cartData = await Cart.create(req.body);
    res.status(200).json(cartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // create a new Cart
});

router.put('/:id', async (req, res) => {
  try {
    const cartData = await Cart.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  if (!cartData [0]) {
    res.status(400).json({message: "Category is not found."});
    return;
  }
  res.status(200).json(cartData);
} catch (error) {
  console.log (error);
  res.status(500).json(error);
}
  // update a Cart by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const cartData = await Cart.destroy( {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    console.log(cartData);
  if (!cartData) {
    res.status(400).json({message: "Category is not found."});
    return;
  }

      res.status(200).json({ message: "Cart item deleted successfully." });
  } catch (error) {
      console.error('Error deleting cart item:', error);
      res.status(500).json(error);
  }
});
module.exports = router;


