const express = require('express');
const router = express.Router();
const Procurement = require('../models/ProcurementModal');



//Get request to /procurement form  
  router.get('/procurement', (req,res) => {
    res.render('prodprocurement-form') 
 
})
//Post procurement to schema 
router.post('/procurement', async (req,res) =>  {
    console.log(req.body)
    try {
        const newprocurement = await Procurement.create(req.body)
        res.render('prodprocurement-form')// if post is successful, show page
    } catch (error) {
        res.send('something is not right!')
    }
})

// creating route to fetch the procurements
router.get('/procurementsreports', async (req,res) =>{
    try {
        const data = await Procurement.find({}).sort({$natural: -1});
        let totalProcurements = await Procurement.aggregate([
            {'$group': {_id: '$all', 
            totalCost: {$sum:'$inputprodcost'},
            totalProcuredTonnage: {$sum:'$inputtonnage'}
        }}
        ])

        res.render('procuremntsreport', {procurements:data,
        total: totalProcurements[0]});
    }
    catch (error) {
    return res.status(400).send({
        status:400,
        message:'Failed to fetch procurements',
        error
    })
}
// Function for deletion
// router.get('/deletecashsale/:id', async (req,res) =>{
//     try{
//         await Cashsales.deleteOne({
//             _id: req.params.id
//         })
//         res.redirect('back')
//     } catch(error){
//         res.status(400).send('could not delete cash sale')
//     }
// })

// //get route for updating
// router.get('/updatecashsale/:id', async(req,res) =>{
//     try{
//         const updateCashSale = await Cashsales.findOne({_id:req.params.id})
//         res.render('cashsaleedit',{cashsale:updateCashSale})
//     } catch(error){
//         res.status(400).send('Unable to find cash sale')
//     }
// })
// // Function for updating
// router.post('/updatecashsale/', async(req,res) =>{
//     try{
//         const updated = await cashsales.findOneAndUpdate({_id: req.query.id}, req.body)
//         res.redirect('/cashsalesreport');
//     }catch(error){
//         res.status(400).send('unable to update cashsale')
//     }
// } )

});

// always keep at the bottom of this file
module.exports = router;