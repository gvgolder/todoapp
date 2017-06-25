const mongo = require('mongodb').MongoClient;
const uuid = require('uuid');

const url = 'mongodb://tempter:kievbridge@ds139122.mlab.com:39122/todoapp';

function create(db, task, callback) {
  task.guid = uuid.v4();
  db.collection('todos').insertOne(task);
  return callback();
}

function read(db, callback) {
  db.collection('todos').find({}).toArray(callback);
}

function update(db, query, update, callback) {
  db.collection('todos').update(query, update);
  return callback();
}

function remove(db, query, callback) {
  db.collection('todos').remove(query, true);
  return callback();
}

function readTask(req, res) {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
      read(db, (err, result) => {
        if (err) throw err;
        db.close();
        res.json(result);
      });
  });  
}

function createTask(req, res) {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
      create(db, req.body.task, (err, result) => {
        if (err) throw err;
        db.close();
        res.sendStatus(200);
      });
  });  
}

function updateTask(req, res) {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
      update(db, req.body.query, req.body.update, (err, result) => {
        if (err) throw err;
        db.close();
        res.sendStatus(200);
      });
  });  
}

function removeTask(req, res) {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
      remove(db, req.body.query, (err, result) => {
        if (err) throw err;
        db.close();
        res.sendStatus(200);
      });
  });  
}

module.exports = {
  createTask, 
  readTask,
  updateTask,
  removeTask,
};


