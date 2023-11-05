const router = require('express').Router();//Ang router na ito ay ginagamit upang i-define ang mga endpoints o routes para sa iyong server application.
const googleauth = require('../model/googleauthmodel'); //models design ng google auth at para maka gwa ng document structure sa mongodb
 
// Get all records
router.get('/x', async (req, res) => {
    try {
        const records = await googleauth.find();
        res.json(records);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add a new record or update an existing record based on email
router.post('/addOrUpdate', async (req, res) => {
    const { name, family_name, email, picture } = req.body;

    try {
        const existingRecord = await googleauth.findOne({ email });

        if (existingRecord) {
        
            existingRecord.name = name;
            existingRecord.family_name = family_name;
            existingRecord.picture = picture;
            await existingRecord.save();
            res.json('Record was updated!');
        } else {

            const newGoogleAuthRecord = new googleauth({ name, family_name, email, picture });
            await newGoogleAuthRecord.save();
            res.json('New Record Added!');
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});


router.get('/find:id', async (req, res) => {
    try {
        const record = await googleauth.findById(req.params.id);
        if (!record) {
            res.status(404).json('Record not found');
        } else {
            res.json(record);
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Delete a record by ID
router.delete('/:id', async (req, res) => {
    try {
        const record = await googleauth.findByIdAndDelete(req.params.id);
        if (!record) {
            res.status(404).json('Record not found');
        } else {
            res.json('Record was deleted.');
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
