const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const creditsalesSchema = new mongoose.Schema({
  inputbuyername: {
    type: String,
    trim: true,
    required: true,
  },

  inputnin: {
    type: String,
    trim: true,
    required: true,
  },

  inputlocation: {
    type: String,
    trim: true,
    required: true,
  },

  inputbuyercontact: {
    type: Number,
    trim: true,
    required: true,
  },

  inputamountdue: {
    type: Number,
    trim: true,
    required: true,
  },

  inputduedate: {
    type: Date,
    trim: true,
    required: true,
  },

  inputprodname: {
    type: String,
    trim: true,
    required: true,
  },

  inputprodtype: {
    type: String,
    trim: true,
    required: true,
  },

  inputtonnage: {
    type: Number,
    trim: true,
    required: true,
  },

  inputdispatchdate: {
    type: Date,
    trim: true,
    required: true,
  },

  inputsalsagentname: {
    type: String,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Creditsales", creditsalesSchema);

// or this way
// const Registration = mongoose.model('registration')
