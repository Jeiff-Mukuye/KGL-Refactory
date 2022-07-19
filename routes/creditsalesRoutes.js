const express = require('express');
const router = express.Router();
const Creditsales = require('../models/CreditSalesModal');


//Get request to /creditsales form 
router.get('/creditsales', (req,res) => {
    res.render('procred-form')
})


//Post creditsales to schema 
router.post('/creditsales', async (req,res) =>  {
    console.log(req.body)
    try {
        const newcreditsale = await Creditsales.create(req.body)
        res.render('success', {message:'Successfully added'})
    } catch (error) {
        res.send('something is not right!')
    }
})


// always keep at the bottom of this file
module.exports = router;