const express = require('express');
const router = express.Router();
const Creditsales = require('../models/CreditSalesModal');


//Get request to creditsales form 
router.get('/creditsales', (req,res) => {
    res.render('procred-form')
})


//Post creditsales to schema 
router.post('/creditsales', async (req,res) =>  {
    console.log(req.body)
    try {
        const newcreditsale = await Creditsales.create(req.body)
            // alert('sale successfully added');
        res.render('success', {message:'Successfully added'})// if post is successful, show page
    } catch (error) {
        res.send('something is not right!')
    }
})

//creating route to fetch the credit sales
router.get('/creditsalesreports', async(req,res) =>{
    try {
        const data = await Creditsales.find({}).sort({$natural: -1});
        let totalCreditSales = await Creditsales.aggregate([
            {'$group': {_id: '$all', 
            totalPayables: {$sum:'$amountdue'},
            totalCreditTonnage: {$sum:'$tonnage'}
        }}
        ])

        res.render('creditsalesreport', {creditsales:data, 
            total: totalCreditSales[0]});
        
    }
    catch (error) {
        return res.status(400).send({
            status:400,
            message:'Failed to fetch credit sales',
            error
        })

    }
// Function for deletion
router.get('/deletecreditsale/:id', async (req,res) =>{
    try{
        await Creditsales.deleteOne({
            _id: req.params.id
        })
        res.redirect('back')
    } catch(error){
        res.status(400).send('could not delete credit sale')
    }
})
    

})

// always keep at the bottom of this file
module.exports = router;