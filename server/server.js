var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

var posts = require('./posts.json')

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData = req.body
    console.log(userData.email)
    res.sendStatus(200)
})

console.log('listenting on port 3000....')
app.listen(3000)