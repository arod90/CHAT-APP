const express = require('express');
const app = express();
const router = require('./router')
const PORT = 1234;


app.use(express.static('./client'))
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`hes aliveeeeee at port: ${PORT}`)
})