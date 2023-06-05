const mongoose = require('mongoose');

async function connect_db() {
  await mongoose.connect('mongodb://localhost:27017/CustomerList');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connect_db().catch(err => console.log(err));

module.exports = {
    mongoose,
}