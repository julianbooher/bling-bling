const express = require('express'); 
const mongoose = require('mongoose');
// const cors = require('cors');
require('dotenv').config()

const app = express(); 
const PORT = 3001; 
const MONGODB_URI = `mongodb+srv://julianbooher:${process.env.MONGO_CLUSTER_PW}@julianbooher.o1lfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`; 

const transactionRouter = require('./routes/transaction.router');

// app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Routes 
app.use('/api/transaction', transactionRouter); 

// Serve static files
app.use(express.static('build'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }); 
mongoose.connection.once('open', ()=> { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', (error)=> {
  console.log('Mongoose Connection Error : ' + error);
});

// Listen
app.listen(PORT, ()=> { 
  console.log(`Server listening on port ${PORT}.`);
});