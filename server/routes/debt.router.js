
const express = require ('express'); 
const router = express.Router(); 
const Transaction = require('../models/transaction'); 


router.get('/', function(req, res) { 
    const {userOne, userTwo} = req.body;
    const pipeline = [
        {
          '$match': {
            'owes': userOne, 
            'owed': userTwo
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
