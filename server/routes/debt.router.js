
const express = require ('express'); 
const router = express.Router(); 
const Transaction = require('../models/transaction'); 


router.get('/', function(req, res) { 
    const {owes, owed} = req.body;
    const pipeline = [
        {
            '$match':{
                'owes': owes,
                'owed': owed
            }
        }
    ]
    Transaction.find({}).sort({'date': -1}).exec((err, transactions) => {
      res.send(transactions);
    });
  });

module.exports = router; 
