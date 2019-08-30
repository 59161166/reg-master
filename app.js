const express = require('express')
const app = express()
const studentRouter = require('./reg/router')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(studentRouter)



app.get('/', (req, res) => res.send({
    Message: 'Hello world'
}))

module.exports = app