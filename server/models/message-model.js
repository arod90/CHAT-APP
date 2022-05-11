const db = require('../db');

exports.getAll = () => {
  return db.msgs;
};

exports.postOne = (msg) => {
  db.msgs.push(msg);
};