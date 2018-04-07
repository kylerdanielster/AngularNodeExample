var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()

var User = require('./models/User.js')
var auth = require('./auth.js')

mongoose.Promise = Promise

var posts = require('./posts.json')

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v')
        res.send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v')
        res.send(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.post('/register', auth.register)

app.post('/login', auth.login)

mongoose.connect('mongodb://test:1234@ds237389.mlab.com:37389/ps-mean-db', (err) => {
    if(!err)
        console.log('connected to mongo')
})

console.log('listenting on port 3000....')
app.listen(3000)