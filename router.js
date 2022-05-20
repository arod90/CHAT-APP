const db = require('./db');

const router = require('express').Router();

const mongoose = require('mongoose');
const connectDb = require('./db');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  authorId: Boolean,
  timestamp: Date
});

const Message = mongoose.model('mongooseDB', messageSchema);

router.get('/message', async (ctx) => {
  try {
    ctx.body = await Message.find();
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.status(500);
  }
})


router.post('/message', async (ctx) => {
  try {
    const {content, author} = ctx.request.body;
    ctx.body = await Message.create({content, author, timestamp: new Date()});
    ctx.status = 200;
  } catch (error) {
    console.log(error)
  }
})

(async function () {
  try {
    await connectDb();
    console.log('connected to mongoose');
    app.listen(3030, () => console.log('listening on 3030'));
  } catch (e) {
    console.log(e);
  }
})()

module.exports = router;

// exports.getMessages = () => {
//   router.get('/message', async (req, res) => {
//     const result = await db.connection.db('chatApp').collection('messages').find({}).toArray();
//     res.send(result);
//   })
// }

// exports.postMessage = () => {
//   router.post('/message', async (req, res) => {
//     try {
//       const newMessage = req.body;
//       const message = await db.connection.db('chatApp').collection('messages').insertOne(newMessage);
//       res.send(message);
//     } catch (error) {
//       console.log(error)
//       res.status(500);
//     }
//   })
// }

// router.get('/message', async (req, res) => {
//   const result = await db.connection.db('chatApp').collection('messages').find({}).toArray();
//   res.send(result);
// })


// router.post('/message', async (req, res) => {
//   try {
//     const newMessage = req.body;
//     const message = await db.connection.db('chatApp').collection('messages').insertOne(newMessage);
//     res.send(message);
//   } catch (error) {
//     console.log(error)
//     res.status(500);
//   }
// })