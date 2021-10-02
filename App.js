// include third party modules
const express = require('express');
const dotenv = require('dotenv')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const todoDetails = require('./routes/todoDetailsRoutes')

// create an instance of express
const app = express()

const port = process.env.PORT || 3000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

const MONGODB_PASS = process.env.MONGO_PASS
const MONGO_URL = `mongodb+srv://dheeraj:${MONGODB_PASS}@atlastesting.1itdz.mongodb.net/todo?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// If we want to use mongoose in different position inside the codes it must be seen as global mode, that's why we need to set mongoose as :
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
    console.log("DataBase Connection successful....")
})
mongoose.connection.on("error", (error) => {
    console.log('DataBase Connection Error...'), error;
})


// routes
app.use('/api', todoDetails)
// Home page
app.get('/', (req, res) => {
    res.send("Welcome To The Home Page!!!")
})

// server running on :
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})