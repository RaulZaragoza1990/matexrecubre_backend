const express = require('express');
const router = express.Router();
const sequelize = require ('../database');
const permission = require('../middlewares/permission');


// Handler for list all notes
router.get('/', permission('admin', 'client'), async (req, res) => {
  const Product = await sequelize.models.products.findAll(); // Getting all notes in database
  return res.json(Product);
});

// Handler for create a new note
router.post('/', permission('admin'),  async (req, res) => {
  const { body } = req; // Getting data from request 
  const Product = await sequelize.models.products.create({
    name: body.name,
    price: body.price, 
    long_description: body.long_description,
    short_description: body.short_description,
    img_url: body.img_url,
  }); // Creating an instance of Notes
  Product.save(); // Saving model in database
  return res.json({ message: 'Created successfully', data: Product });
});

router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req; // Getting id from parameters
  const Product = await sequelize.models.products.findOne({ id }) // Finding specific noted based on id
  if (!Product) {
    return res.status(404).json({ message: 'Product not found'});
  }
  // The new model with request changes
  const UpdatedProducts = await Product.update({
    name: body.name,
    price: body.price, 
    long_description: body.long_description,
    short_description: body.short_description,
    img_url: body.img_url,
  });
  return res.json({ message: 'Updated successfully', data: UpdatedProducts });
});

// Handler for delete a specific note
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req; // Getting id from parameters
  const Product = await sequelize.models.products.findOne({ id }) // Finding specific noted based on id
  if (!Product) {
    return res.status(404).json({ message: 'Products not found'});
  }
  await Product.destroy(); // Destroying resource
  return res.json({ message: 'Deleted successfully' });
});

module.exports = router;
