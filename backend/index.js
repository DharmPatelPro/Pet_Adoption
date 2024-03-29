const connectToMongo = require('./db');
var cors = require('cors') 

const express = require('express')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json({limit: '50mb'}));
connectToMongo();
//To use JSON in app
app.use(express.json())

app.use('/api/user', require('./routes/user'))
app.use('/api/profile', require('./routes/profile'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
