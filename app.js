const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});

// importing models
const Registration = require('./models/UserRegistrationModels')

// importing routes
const registrationRoutes = require('./routes/registrationRoutes')
const loginRoutes = require('./routes/loginRoutes')
const resetpasswordRoutes = require('./routes/resetpasswordRoutes')
const cashsalesRoutes = require('./routes/cashsalesRoutes')
const creditsalesRoutes = require('./routes/creditsalesRoutes')
const procurementRoutes = require('./routes/procurementRoutes')


// instantiating an app
const app = express();

const dbconfig = require('./config/database')
//mongodb connection
mongoose.connect(dbconfig.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// checking if there is a connection to the db  
const db = mongoose.connection
db.once('open', () => {
    console.log('connected to mongodb');
})

db.on('open', () => {
    console.log('Mongoose connection open');
})
db.on('error', (err) => {
console.log(`Connection error: ${err.message}`);
});

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, "public")));


// middle ware
app.use(express.urlencoded({ extended: true }))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());




passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

// Using routes
app.use('/', registrationRoutes);
app.use('/', loginRoutes);
app.use('/', resetpasswordRoutes);
app.use('/', cashsalesRoutes);
app.use('/', procurementRoutes);
app.use('/', creditsalesRoutes);




// always keep this code below. once it runs nothing below will be considered

app.listen(3900, () => {
    console.log('server is running at port 3900')
})