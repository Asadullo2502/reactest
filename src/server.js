const express = require('express')
const app = express()
const cors = require('cors')
const {
   host,
   PORT
} = require('./config')
const tableRouter = require('./modules/tables')

app.use(cors())
app.use(express.json())

app.use(tableRouter)

app.listen(PORT, () => console.log(host + ":" + PORT))

