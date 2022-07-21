const { query } = require('express');
const express = require('express');
const { findOneAndUpdate } = require('../models/CashSalesModal');
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
        const data = await Cashsales.find({}).sort({$natural: -1});
        let totalSales = await Cashsales.aggregate([
            {'$group': {_id: '$all', 
            totalIncome: {$sum:'$amountpaid'},
            totalTonnage: {$sum:'$tonnage'}
        }}
        ])

        res.render('cashsalesreport', {cashsales:data,
        total: totalSales[0]});
    }
    catch (error) {
    return res.status(400).send({
        status:400,
        message:'Failed to fetch cash sales',
        error
    })
}
// Function for deletion
router.get('/deletecashsale/:id', async (req,res) =>{
    try{
        await Cashsales.deleteOne({
            _id: req.params.id
        })
        res.redirect('back')
    } catch(error){
        res.status(400).send('could not delete cash sale')
    }
})

//get route for updating
router.get('/updatecashsale/:id', async(req,res) =>{
    try{
        const updateCashSale = await Cashsales.findOne({_id:req.params.id})
        res.render('cashsaleedit',{cashsale:updateCashSale})
    } catch(error){
        res.status(400).send('Unable to find cash sale')
    }
})
// Function for updating
router.post('/updatecashsale/', async(req,res) =>{
    try{
        const updated = await cashsales.findOneAndUpdate({_id: req.query.id}, req.body)
        res.redirect('/cashsalesreport');
    }catch(error){
        res.status(400).send('unable to update cashsale')
    }
} )

});


// always keep at the bottom of this file
module.exports = router;