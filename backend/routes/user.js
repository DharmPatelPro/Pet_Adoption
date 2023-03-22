const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const fetchdonor = require('../middleware/fetchdonor');

const SECRET_KEY = 'DharmProject';


//ROUTE 1:To fetch user details using: GET "/api/user/fetchuserdetails". login required
router.get('/fetchuserdetails', fetchdonor, async (req, res) => {
    const user = await User.findById(req.user)
    const { name, email, phone, address } = user;
    res.json({ name, email, phone, address })
})


// ROUTE 2: Create a User using: POST "/api/user/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user
        // Check whether the user with this email exists already
        user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }

        //To encrypt password
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt)

        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        })

        //To create authentication token 
        const data = {
            user: user.id
        }
        const authenticationtoken = jwt.sign(data, SECRET_KEY)
        //res.json(user)

        //Send authenticationtoken 
        let success = true;
        res.json({ success, authenticationtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})




// ROUTE 3: Authenticate(Login) a User using: POST "/api/user/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success = false;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    //destructure req 
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        //If email is false
        if (!user) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        //If password is false
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        //To create authentication token 
        const data = {
            user: user.id
        }
        const authenticationtoken = jwt.sign(data, SECRET_KEY);
        //res.json(user)
        success = true;
        res.json({ success, authenticationtoken })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})




// ROUTE 4: create donor using: POST "/api/user/createdonor". login required

router.put('/createdonor', fetchuser, [
    body('address', 'Address cannot be blank').exists(),
    body('phone', 'Enter valid phone number').isLength({ min: 8 })
], async (req, res) => {

    const { address, phone } = req.body;
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // Create a newData object
        const newData = {};
        newData.address = address
        newData.phone = phone

        let user = await User.findById(req.user)

        if (user.address || user.phone) {
            return res.status(401).json({ success, errors: "Not Allowed" });
        }

        user = await User.findByIdAndUpdate(req.user, { $set: newData }, { new: true })
        success = true;
        res.json({success});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})




// ROUTE 5: update user details using : POST "/api/user/updateuserdetails". login required

router.put('/updateuserdetails', fetchdonor, async (req, res) => {
    const { name, address, phone } = req.body;
    try {
        // Create a newNote object
        const newData = {};
        if (name) { newData.name = name };
        if (address) { newData.address = address };
        if (phone) { newData.phone = phone };
        let user = await User.findByIdAndUpdate(req.user, { $set: newData }, { new: true })

        res.json({ name: user.name, email: user.email, phone: user.phone, address: user.address })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router