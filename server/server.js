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



  var customerList = new CustomerList({
    name: "john kamau",
    phone_number: "+254794830933",
    branch: "HQ",
    sales_rep:"ryan muraya",
    approved: "yes",
    loan: 23123123

  });

  customerList.save().then((clist) => {
    console.log("saved customerlist:", clist);
  });