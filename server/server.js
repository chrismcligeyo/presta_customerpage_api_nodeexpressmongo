// const { MongoClient, ServerApiVersion } = require("mongodb");

// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://localhost:27017/CustomerList";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("CustomerList").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
//trnsferred to db/moongoose
// const mongoose = require('mongoose');

// async function connect_db() {
//   await mongoose.connect('mongodb://localhost:27017/CustomerList');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// connect_db().catch(err => console.log(err));

var express = require("express");
var bodyParser = require("body-parser");


var {mongoose} = require("./db/moongose.js");
var {CustomerList} = require("./models/customerlist.js");

var app = express();
app.use(bodyParser.json());//allows you to pass json data from client(postman etc) converts to object so that you can see it as object in terminal

app.post('/customerlists', (req, res) => {
	//console.log(req.body)// on postman go to body then raw, then set type as application/js0n and enter data as json,
	//body parser converts json data entered in postman to object that can be viewed from terminal as object
 
  var customerList = new CustomerList({
    name: req.body.name,
    phone_number: req.body.phone_number,
    branch: req.body.branch,
    sales_rep: req.body.sales_rep,
    approved: req.body.approved,
    loan: req.body.loan,

  });

  customerList.save().then((clist) => {
    res.send(clist);
    console.log("saved customerlist:", clist);
  }).catch((e)=>{
    res.status(400).send(e);
  });

});

  app.listen(3000, ()=>{
    console.log("started on port 3000");
  });