const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const procurementSchema = new mongoose.Schema({
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

  inputprocdate: {
    type: Date,
    required: true,
  },

  inputproctime: {
    type: String,
    trim: true,
    required: true,
  },

  inputprodcost: {
    type: Number,
    trim: true,
    required: true,
  },

  inputtonnage: {
    type: Number,
    trim: true,
    required: true,
  },

  inputdealername: {
    type: String,
    trim: true,
    required: true,
  },

  inputdealercontact: {
    type: Number,
    trim: true,
    required: true,
  },

  inputbranchname: {
    type: String,
    trim: true,
    required: true,
  },

  inputbranchcontact: {
    type: String,
    trim: true,
    required: true,
  },

  inputsaleprice: {
    type: Number,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Procurement", procurementSchema);

// or this way
// const Registration = mongoose.model('registration')
