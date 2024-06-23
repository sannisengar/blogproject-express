const express = require('express')
//console.log(express)

const app = express()
const port = 3000
const web = require('./routes/web')
const connect = require('./db/connectDB')

// dbconnect
connect()

//html css template engines
app.set('view engine', 'ejs')

// css image link
app.use(express.static('public'))




//route lode
app.use('/', web)






//server create
app.listen(port, () => console.log("server start localhost:3000"))