const express = require('express');
const app = express();
const router = require('./router');

// const path = require('path');

const PORT = 6969;

app.use(express.static('../client'));
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`server running like he means it at http://localhost:${PORT}`);
});
