const connection = require('./connection');
const { ObjectId } = require('mongodb');


const getAllList = async () => {
  const db = await connection();
  const result = await db.collection('to_do_list').find({}).toArray();
return result;
};

const addNewTask = async (document) => {
  const db = await connection();
  const addTask = await db.collection('to_do_list').insertOne(document);
  return addTask;
};

const updateTask = async ({ id, task, active }) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('to_do_list').updateOne({ _id: ObjectId(id) }, { $set: { task, active } });
  return result;
};

const excludeTask = async (id) => {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const task = await db.collection('to_do_list').deleteOne({ _id: ObjectId(id) });
  return task;
}

module.exports = { getAllList, addNewTask, updateTask, excludeTask };