
const express = require ('express'); 
const router = express.Router(); 
const Transaction = require('../models/transaction'); 


router.post('/', function(req, res) { 
    const {userOne, userTwo} = req.body;
    console.log('inside debt router' + userOne + userTwo)
    const pipeline = [
      {
          '$facet': {
              'userOneOwes': [
                  {
                      '$match': {
                          'owes': userOne, 
                          'owed': userTwo
                      }
                  }, {
                      '$group': {
                          '_id': 'None', 
                          'total': {
                              '$sum': '$cost'
                          }
                      }
                  }
              ], 
              'userTwoOwes': [
                  {
                      '$match': {
                          'owes': userTwo, 
                          'owed': userOne
                      }
                  }, {
                      '$group': {
                          '_id': 'None', 
                          'total': {
                              '$sum': '$cost'
                          }
                      }
                  }
              ]
          }
      }
  ]
    Transaction.aggregate(pipeline, (err, result) => {
      res.send(result[0]);
    });
  });

module.exports = router; 
