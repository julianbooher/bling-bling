
const express = require ('express'); 
const router = express.Router(); 
const Transaction = require('../models/transaction'); 


router.get('/', function(req, res) { 
    Transaction.find(function(err, transactions) {
      res.json(transactions);
    });
  });

router.get('/:id', function(req, res) {  
  Transaction.findById(req.params.id, function(err, transaction) {
    if (!transaction) {
      res.status(404).send('No result found');
    } else {
      res.json(transaction);
    }
  });
});

router.post('/', function(req, res) {     
    let transaction = new Transaction(req.body);
    transaction.save()
      .then(transaction => {
        res.send(transaction);
      })
      .catch(function(err) {
        res.status(422).send('Transaction add failed');
      });
  });

router.patch('/:id', function(req, res){    
  Transaction.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('Transaction updated');
    })
    .catch(function(err) {
      res.status(422).send("Transaction update failed.");
    });
});

router.delete('/:id', function(req, res) {  
    Transaction.findById(req.params.id, function(err, transaction) {
      if (!transaction) {
        res.status(404).send('Transaction not found');
      } else {
        Transaction.findByIdAndRemove(req.params.id)
          .then(function() { res.status(200).json("Transaction deleted") })
          .catch(function(err) {
            res.status(400).send("Transaction delete failed.");
          })
      }
    });
  })


module.exports = router; 
