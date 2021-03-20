const express = require('express'); 
const mongoose = require('mongoose');
// const cors = require('cors');
const router = require('./transactions');
require('dotenv').config()

const app = express(); 
const PORT = 3001; 
const MONGODB_URI = `mongodb+srv://julianbooher:${process.env.MONGO_CLUSTER_PW}@julianbooher.o1lfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`; 

// app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', router); 

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false }); 
mongoose.connection.once('open', ()=> { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', (error)=> {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, ()=> { 
  console.log(`Server listening on port ${PORT}.`);
});