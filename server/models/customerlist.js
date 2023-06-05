var mongoose = require('mongoose');

const CustomerListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone_number: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    sales_rep: {
      type: String,
      required: true,
      trim: true,
    },
    approved: {
      type: String,
      required: true,
      trim: true,
    },
    loan: {
        type: Number
    },

    // phone_number: String,
    // branch: String,
    // sales_rep: String,
    // approved: String,
    // loan: String:String
  });

  

  const CustomerList = mongoose.model('CustomerList', CustomerListSchema);

  module.exports = {
    CustomerList
  };