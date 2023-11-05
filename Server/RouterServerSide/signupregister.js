const express = require('express');
const router = express.Router();
const Register = require('../model/signup'); // Import ang user model

// Create or update a user based on email
router.post('/register', async (req, res) => {
  const { name, family_name, email, picture, password, confirmPassword } = req.body;

  try {
    var user = await Register.findOne({ email });

    if (user) {
      // Update the existing user's information
      user.name = name;
      user.family_name = family_name;
      user.password = password;
      user.picture = picture;
    } else {
      // Create a new user if they don't exist
      user = new Register({
        name,
        family_name,
        email,
        picture,
        password,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    await user.save();

    const message = user.isNew ? 'New Record Added!' : 'Record was updated!';
    res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error, please try again later' });
  }
});

module.exports = router;
