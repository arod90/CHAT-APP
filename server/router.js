const router = require('express').Router();
const message = require('./controllers/messageCrontoller');

router.get('/messages', message.getMessages);
router.post('/messages', message.postMessage);

module.exports = router;