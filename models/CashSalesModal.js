const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const cashsalesSchema = new mongoose.Schema({
  prodname: {
    type: String,
    trim: true,
    required: true,
  },

  amountpaid: {
    type: Number,
    required: true,
  },

  tonnage: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    trim: true,
    required: true,
  },
  
  buyername: {
    type: String,
    trim: true,
    required: true,
  },

  agentname: {
    type: String,
    trim: true,
    required: true,
  },
});


module.exports = mongoose.model("Cashsales", cashsalesSchema);

// or this way
// const Registration = mongoose.model('registration')
