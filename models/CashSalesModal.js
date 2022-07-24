const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const cashsalesSchema = new mongoose.Schema({
  inputprodname: {
    type: String,
    trim: true,
    required: true,
  },

  inputamountpaid: {
    type: Number,
    required: true,
  },

  inputtonnage: {
    type: Number,
    required: true,
  },

  inputdatentime: {
    type: Date,
    trim: true,
    required: true,
  },
  
  inputbuyersname: {
    type: String,
    trim: true,
    required: true,
  },

  inputsaleagentname: {
    type: String,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Cashsales", cashsalesSchema);

// or this way
// const Registration = mongoose.model('registration')
