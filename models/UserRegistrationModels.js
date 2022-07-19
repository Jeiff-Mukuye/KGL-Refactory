const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const registrationSchema = new mongoose.Schema({
  empno: {
    type: String,
    trim: true,
  },
  fname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
   }, 

 role:{
    type:String,
    required: 'Please Enter a role'
  }
});

// registrationSchema.plugin(passportLocalMongoose);
registrationSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});
module.exports = mongoose.model("Registration", registrationSchema);

// or this way
// const Registration = mongoose.model('registration')
