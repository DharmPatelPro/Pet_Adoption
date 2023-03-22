const express = require('express');
const router = express.Router()
var fetcdonor = require('../middleware/fetchdonor');
const { body, validationResult } = require('express-validator');
const Pet = require('../models/Pet');
const fetchdonor = require('../middleware/fetchdonor');
const imageToBase64 = require('image-to-base64');
var fs = require('fs');
var multer = require('multer');





//save uploded image in upload filolder
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });






router.get('/fetchall', async (req, res) => {
    const profiles = await Pet.find().populate("contact", ["name", "email", "phone", "address"])
    res.json(profiles)
})

// ROUTE 1: fetch all pet profiles of user using: GET "/api/profile/addpet". login required
router.get('/fetchallprofiles', fetchdonor, async (req, res) => {
    const profiles = await Pet.find({ user: req.user }).populate("contact", ["name", "email", "phone", "address"])
    res.json(profiles)
})


// ROUTE 2: create new pet profile using: POST "/api/profile/addpet". login required
router.post('/addpet', fetcdonor, upload.single('image'), [
    body('name', 'Name cannot be blank').exists(),
    body('gender', 'Gendre cannot be blank').exists(),
    body('tag', 'Tag cannot be blank').exists(),
    body('city', 'City cannot be blank').exists(),
    body('state', 'Title cannot be blank').exists(),
    body('description', 'Decription must be atlist 5 characters').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    const { name, gender, description, tag, breed, city, state } = req.body;
    try {
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() })
        }

        //save new pet profile
        const str = await imageToBase64("uploads/" + req.file.filename)
            
        const pet = new Pet({
            name, description, gender, tag, breed, location: { city, state }, user: req.user, contact: req.user,
            img: str ,               
        })
        


        const savedProfile = await pet.save().then(fs.unlinkSync("uploads/" + req.file.filename))

        success = true
        res.json({ success, savedProfile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



// ROUTE 3: Update an existing Note using: POST "/api/notes/updateprofile/:id". Login required
router.put('/updateprofile/:id', fetcdonor, async (req, res) => {
    const { name, gender, description, tag, breed, city, state } = req.body;
    try {
        // Find the profile to be updated and update it
        let profile = await Pet.findById(req.params.id);
        if (!profile) { return res.status(404).send("Not Found") }
        if (profile.user.toString() !== req.user) { return res.status(401).send("Not Allowed"); }

        // Create a newNote object
        const newProfile = { location: {} };
        if (name) { newProfile.name = name };
        if (gender) { newProfile.gender = gender };
        if (tag) { newProfile.tag = tag };
        if (breed) { newProfile.breed = breed };
        if (city) { newProfile.location.city = city } else { newProfile.location.city = profile.location.city };
        if (state) { newProfile.location.state = state } else { newProfile.location.state = profile.location.state };
        if (description) { newProfile.description = description };

        profile = await Pet.findByIdAndUpdate(req.params.id, { $set: newProfile }, { new: true })

        res.json({ profile });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 4: Delete an existing Note using: DELETE "/api/notes//deleteprofile/:id". Login required
router.delete('/deleteprofile/:id', fetchdonor, async (req, res) => {
    let success = false;
    try {
        // Find the profile to be delete and delete it
        let profile = await Pet.findById(req.params.id);
        if (!profile) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (profile.user.toString() !== req.user) {
            return res.status(401).send("Not Allowed");
        }

        profile = await Pet.findByIdAndDelete(req.params.id)
        success = true;
        res.json({ success, profile });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})





module.exports = router