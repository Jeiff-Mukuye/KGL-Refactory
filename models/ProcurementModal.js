const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const procurementSchema = new mongoose.Schema({
  prodname: {
    type: String,
    trim: true,
    required: true,
  },

  prodtype: {
    type: String,
    trim: true,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  time: {
    type: String,
    trim: true,
    required: true,
  },

  prodcost: {
    type: Number,
    trim: true,
    required: true,
  },

  tonnage: {
    type: Number,
    trim: true,
    required: true,
  },

  dealername: {
    type: String,
    trim: true,
    required: true,
  },

  dealercontact: {
    type: Number,
    trim: true,
    required: true,
  },

  itemprice: {
    type: Number,
    trim: true,
    required: true,
  },

  branchname: {
    type: String,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Procurement", procurementSchema);

// or this way
// const Registration = mongoose.model('registration')
