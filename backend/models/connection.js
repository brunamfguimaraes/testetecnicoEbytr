/* const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'ebytr_tasks';

const db;

const connection = (callback) => {
  client.connect(function(err) {
    console.log('Connected successfully to server');
    db = client.db(dbName);
    callback(err);
  });
};

module.exports = connection; */


const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('ebytr_tasks');
    return db;
    })
};

module.exports = connection;