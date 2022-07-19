const express = require('express');
const router = express.Router();
const passport = require('passport');

// direct the browser to page
router.get('/', (req,res) => {
    res.render('login')
})



// checks if the login data is authentic
router.post("/", passport.authenticate('local', {failureRedirect: '/'}), (req, res) => {
    req.session.user = req.user;
    console.log(req.body);
    // redirecting after clicking login to .....desried page
    res.redirect("/dashboard")
  })
  
//Get request to /dashboard  
  router.get('/dashboard', (req,res) => {
    res.render('dashboard')
})

// always keep at the bottom of this file
module.exports = router;