// routes/login.js
const router = require('express').Router();
const User = require('../model/signup'); // Import ang iyong user model

// Endpoint para sa login
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    //ang code na ito ay para macheck ng user at i-validate ang password
    const user = await User.findOne({ email });
    //ang code na ito ay para ma bind yung data mula sa mongo db to response at ibabato ni response sa localstorage.
    const userData = {
      name: user.name,
      family_name: user.family_name,
      email: user.email,
      picture: user.picture,
    };

    // I-save ang user (Hindi ito kinakailangan, maaring hindi ito dapat na nandito nilagay ko lang kasi nakakalimutan ko sa ibang function)
    await user.save();

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json(userData); // Endpoint para sa pagkuha ng Single user para i hook ang userdata papuntang localstorage
  } catch (error) {
    console.error('An error occurred', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint para sa pagkuha ng Single User gamit ang Email
router.get('/', async (req, res) => {
  const { email } = req.query;

  if (!email) {// kung walang elmail na napsok sa request then mag eemail is required
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.find({ email });

    if (!user) {  // if walang data mag uuser not found
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('An error occurred', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
