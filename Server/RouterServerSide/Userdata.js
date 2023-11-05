// Import the UserDatamodel module
const data = require('../model/UserDatamodel');

// Create an Express.js router
const router = require('express').Router();

// Handle a POST request to '/addOrUpdateUserdata'
router.post('/addOrUpdateUserdata', async (req, res) => {
    // Extract data from the request body
    const { companyname, companyaddress, businesstype, companynumber } = req.body ;

    // Extract the 'email' from the request body
    const { email } = req.body;

    try {
        // Check if a record with the given 'email' exists in the database
        const existingRecord = await data.findOne({ email });

        if (existingRecord) {
            // Update the existing record with the new data
            existingRecord.companyname = companyname ;
            existingRecord.companyaddress = companyaddress;
            existingRecord.businesstype = businesstype;
            existingRecord.companynumber = companynumber;

            // Save the updated record to the database
            await existingRecord.save();
            // Respond with a JSON message indicating the record was updated
            res.json('Record was updated!');
        } else {
            // Create a new record
            const newUserdata = new data({ email, companyname, companyaddress, businesstype, companynumber } );

            // Save the new record to the database
            await newUserdata.save();
        
            // Respond with a JSON message indicating a new record was added
            res.json('New Record Added!');
        }
    } catch (err) {
        // Handle errors by sending a 500 Internal Server Error response with an error message
        res.status(500).json({ error: 'An error occurred: ' + err });
    }

    // Check if the email field is empty or missing
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
});

router.get('/view', async (req, res) => {
  
    try {
  
        const items = await data.find().exec();
        res.json(items);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
    }
});

// Export the router for use in other parts of the application
module.exports = router;
