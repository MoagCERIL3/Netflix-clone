require('dotenv').config({ path: './config/.env' })
const express = require('express')
const mongoose = require('mongoose')
const moviesRouter = require('./api/routes/movies/movies') 
const authRouter = require('./api/routes/users/auth')
const passport = require('passport')
const session = require('express-session');


// app config
const app  = express()
const PORT = process.env.PORT;

// DB config
mongoose.connect(process.env.DATABASE_URL),{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open', ()=> console.log("Connected to Database ..."))


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
});

require('./api/middlewares/passport')
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
});

//routes
app.use('/browse', moviesRouter);
app.use('/',authRouter)





// Listnener
app.listen(PORT,() => console.log("Server running on port",PORT ))
