require('dotenv').config({ path: './config/.env' })
const express = require('express')
const mongoose = require('mongoose')
const moviesRouter = require('./api/routes/movies/movies') 

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

//routes





// Listnener
app.listen(PORT,() => console.log("Server running on port",PORT ))
