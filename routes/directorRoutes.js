const { query } = require('express');
const express = require('express');
const { findOneAndUpdate } = require('../models/CashSalesModal');
const router = express.Router();
const Cashsales = require('../models/CashSalesModal');
const Creditsales = require('../models/CreditSalesModal');
const Procurements = require('../models/ProcurementModal');
const Users = require('../models/UserRegistrationModels');

// creating route to fetch the cashsales
// creating route to fetch the cashsales
router.get('/director', async (req,res) =>{
    try {
        const data = await Cashsales.find({}).sort({$natural: -1});
        let totalSales = await Cashsales.aggregate([
            {'$group': {_id: '$all', 
            totalIncome: {$sum:'$amountpaid'},
            totalTonnage: {$sum:'$tonnage'}
        }}
        ])
//Credit sale
        const creditdata = await Creditsales.find({}).sort({$natural: -1});
        let totalCreditSales = await Creditsales.aggregate([
            {'$group': {_id: '$all', 
            totalPayables: {$sum:'$amountdue'},
            totalCreditTonnage: {$sum:'$tonnage'}
        }}
        ])

        res.render('director', {cashsales:data,
        total: totalSales[0],
        Creditsales: creditdata,
        totalCredit: totalCreditSales[0]});
    }
    catch (error) {
    return res.status(400).send({
        status:400,
        message:'Failed to fetch cash sales',
        error
    })
}})
// always keep at the bottom of this file
module.exports = router;