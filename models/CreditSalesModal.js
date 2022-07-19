const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const creditsalesSchema = new mongoose.Schema({
  buyername: {
    type: String,
    trim: true,
    required: true,
  },

  nin: {
    type: String,
    trim: true,
    required: true,
  },

  location: {
    type: String,
    trim: true,
    required: true,
  },

  buyercontact: {
    type: Number,
    trim: true,
    required: true,
  },

  amountdue: {
    type: Number,
    trim: true,
    required: true,
  },

  duedate: {
    type: Date,
    trim: true,
    required: true,
  },

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

  tonnage: {
    type: Number,
    trim: true,
    required: true,
  },

  dispatchdate: {
    type: Date,
    trim: true,
    required: true,
  },

  agentname: {
    type: String,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Creditsales", creditsalesSchema);

// or this way
// const Registration = mongoose.model('registration')
