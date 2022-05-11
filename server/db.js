const fs = require('fs');

const dataFilePath = __dirname + '/data.json'

const db = {msgs: []};

fs.readFile(dataFilePath, 'utf8', function(err, data) {
  try {
    data = JSON.parse(data);
  } catch (error) {
  //
  }
  if (data && data.msgs) db.msgs = data.msgs;
})


setInterval(function () {
  fs.writeFile(dataFilePath, JSON.stringify(db), function (err) {
    if(err) throw err;
  });
}, 5000);

module.exports = db;