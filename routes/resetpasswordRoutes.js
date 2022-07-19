const express = require('express');
const router = express.Router();
const Registration = require('../models/UserRegistrationModels')

router.get('/resetpassword', (req,res) => {
    res.render('resetpassword')
})


// keep this line at the bottom
module.exports = router;