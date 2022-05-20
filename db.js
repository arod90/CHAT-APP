// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/';
// const client = new MongoClient(url);
const mongoose = require('mongoose');


// const db = {};


function connectDb () {
  return mongoose.connect('mongodb://127.0.0.1/moongosedata');
}

module.exports = connectDb;



// (async function () {
//   try {
//     db.connection = await client.connect();
//     console.log('connected to DB')
//   } catch (error) {
//     console.log(error)
//   }
// })();


module.exports = connectDb