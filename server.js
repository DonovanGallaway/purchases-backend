//////////////////////////
// Dependencies
//////////////////////////

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('./db/db')
const cors = require('cors')
const app = express()
const AuthRouter = require('./controllers/user')
const auth = require('./auth/index.js')

const PurchaseRouter = require('./controllers/purchase')


const {PORT,DATABASE_URL} = process.env


module.exports = mongoose


//////////////////////////
// Middleware
//////////////////////////

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


///////////////////////////
// Routes
///////////////////////////

app.get('/', (req,res)=>{
   res.json("Hello World")
})


//Routers
app.use('/auth', AuthRouter)
app.use('/purchase', PurchaseRouter)

// Listener
app.listen(PORT, () => {console.log('listening on port', PORT || 4000)})