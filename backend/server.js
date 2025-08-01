

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect(); 

const dbName = 'todolist';
const PORT = 3000;
const app = express()

app.use(bodyparser.json())
app.use(cors())

app.get('/', async(req, res) => {
     const db = client.db(dbName);
       const collection =db.collection("task")
           const findResult = await collection.find({}).toArray();
   res.json(findResult)

});


app.post('/',async(req,res)=>{
 const form = req.body;
   const db = client.db(dbName);
     const collection =db.collection("task")
      const findResult = await collection.insertOne(form);
    res.send({success: true, result: findResult})
})

app.delete('/',async(req,res)=>{
 const form = req.body;
   const db = client.db(dbName);
     const collection =db.collection("task")
      const findResult = await collection.deleteOne(form);
    res.send({success: true, result: findResult})
})



app.listen(PORT,()=>{
    console.log("server running")
})