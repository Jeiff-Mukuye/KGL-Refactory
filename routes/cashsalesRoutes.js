const express = require('express');
const router = express.Router();
const Cashsales = require('../models/CashSalesModal');



//Get request to /cashsales form  
  router.get('/cashsales', (req,res) => {
    res.render('prosales-form')
})

//Post cashsales to schema 
router.post('/cashsales', async (req,res) =>  {
    console.log(req.body)
    try {
        const newcashsale = await Cashsales.create(req.body)
        res.render('success', {message:'Successfully added'})
    } catch (error) {
        res.send('something is not right!')
    }
})
// creating route to fetch the cashsales
router.get('/cashsalesreports', async (req,res) =>{
    try {
        const data = await Cashsales.find({});
        res.render('cashsalesreport', {cashsales:data});
    }
    catch (error) {
    return res.status(400).send({
        status:400,
        message:'Failed to fetch cash sales',
        error
    })
}
});


// always keep at the bottom of this file
module.exports = router;