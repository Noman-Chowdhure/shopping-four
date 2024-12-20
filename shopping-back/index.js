const express = require('express');
const port = process.env.PORT || 4000
const cors = require('cors');
const app = express();
const coffee = require('./coffee.json');
process.env.DB_PASS
app.use(cors());

app.get('/' ,(req,res) =>{
    res.send(coffee)
})


const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://noman:BgyArVZqRGiBUnKP@cluster0.wmhxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("insertDB").collection("haiku");
    app.post('/coffee' , async(req,res)=>{
        const body = req.body;
        console.log('port is hitting',body)
        const result = await database.insertOne(body);
        res.send(result);
    })

    app.get('/selling',async(req,res)=>{
        const curser = database.find();

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/coffee/:id' ,(req,res)=>{
    const id = req.params.id;
    const findd = coffee.find(abc =>abc.id == id);
    res.send(findd)
})

app.listen(port,()=>{
    console.log(`port is listen on port : ${port}`)
})