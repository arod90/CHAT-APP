const message = require('../models/message-model');

exports.getMessages = (req, res) => {
  try {
    const msgs = message.getAll();
    console.log('messages', msgs)
    res.status(200);
    res.send(msgs)
  } catch (error) {
    console.log('error', error);
    res.sendStatus(500)
  }
};

exports.postMessage = (req, res) => {
  try {
    console.log('req.body', req.body);
    message.postOne(req.body);
    res.status(200);
    res.send();
  } catch (error) {
    console.log('err', error);
    res.sendStatus(500);
  }
}