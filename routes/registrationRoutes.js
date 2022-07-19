const express = require('express');
const router = express.Router();
const Registration = require('../models/UserRegistrationModels')

router.get('/register', (req,res) => {
    res.render('registration')
})

router.post("/register", async (req, res) => {
    try {
      const items = new Registration(req.body);
      let user = await Registration.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).send('Not registered, that user already exists!');
      }else {
        console.log(items);
        await Registration.register(items, req.body.password, (err) => {
          if (err) {
            throw err;
          }
          res.redirect("/login");
        });
  
      }
    } catch (err) {
      res.status(400).send("Sorry! Something went wrong.");
      console.log(err);
    }
  });
  


// always keep at the bottom of this file
module.exports = router;