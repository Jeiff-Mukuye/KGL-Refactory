const express = require('express');
const router = express.Router();
const Procurement = require('../models/ProcurementModal');



//Get request to /cashsales form  
  router.get('/procurement', (req,res) => {
    res.render('prodprocurement-form')
})

//Post cashsales to schema 
router.post('/procurement', async (req,res) =>  {
    console.log(req.body)
    try {
        const newprocurement = await Procurement.create(req.body)
        res.render('success', {message:'Record Successfully added'})
    } catch (error) {
        res.send('something is not right!')
    }
})

// always keep at the bottom of this file
module.exports = router;