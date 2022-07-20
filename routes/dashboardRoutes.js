const express = require('express');
const router = express.Router();
// const passport = require('passport');

// direct the browser to page
router.get('/dashboard', (req,res) => {
    res.render('dashboard')
})

// always keep at the bottom of this file
module.exports = router;