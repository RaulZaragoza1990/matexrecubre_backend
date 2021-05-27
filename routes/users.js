const express = require('express');
const router = express.Router();
const sequelize = require ('../database');

// Handler for list all notes
router.get('/', async (req, res) => {
  const User = await sequelize.models.users.findAll(); // Getting all notes in database
  return res.json(User);
});

// Handler for create a new note
router.post('/',  async (req, res) => {
    const { body } = req; // Getting data from request 
    const User = await sequelize.models.users.create({
        name: body.name,
        last_name: body.last_name,
        email: body.email,
        whatsapp: body.whatsapp,
    }); // Creating an instance of Notes
    User.save(); // Saving model in database
    return res.json({ message: 'Created successfully', data: users });
  });

  router.put('/:id', async (req, res) => {
    const { body, params: { id } } = req; // Getting id from parameters
    const User = await sequelize.models.users.findOne({ id }) // Finding specific noted based on id
    if (!User) {
      return res.status(404).json({ message: 'User not found'});
    }
    // The new model with request changes
    const UpdatedUser = await User.update({
      name: body.name,
      last_name: body.last_name,
      email: body.email,
      whatsapp: body.whatsapp,
    });
    return res.json({ message: 'Updated successfully', data: UpdatedUser });
  });
  
  // Handler for delete a specific note
  router.delete('/:id', async (req, res) => {
    const { params: { id } } = req; // Getting id from parameters
    const User = await sequelize.models.users.findOne({ id }) // Finding specific noted based on id
    if (!User) {
      return res.status(404).json({ message: 'Products not found'});
    }
    await User.destroy(); // Destroying resource
    return res.json({ message: 'Deleted successfully' });
  });

module.exports = router;