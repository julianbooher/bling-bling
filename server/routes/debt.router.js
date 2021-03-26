
const express = require ('express'); 
const router = express.Router(); 
const Transaction = require('../models/transaction'); 


router.get('/', function(req, res) { 
    const {owes, owed} = req.body;
    const pipeline = [
        {
          '$match': {
            'owes': owes, 
            'owed': owed
          }
        }, {
          '$group': {
            '_id': null, 
            'total': {
              '$sum': '$cost'
            }
          }
        }
      ]
    Transaction.aggregate(pipeline, (err, result) => {
      res.send(result[0]);
    });
  });

module.exports = router; 
