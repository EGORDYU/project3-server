// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')

// config express app
const app = express()
const PORT = process.env.PORT || 8000
// for debug logging 
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.json())

// GET / -- test index route
app.get('/', (req, res) => {
    res.json({ msg: 'hello backend 🤖' })
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users.js'))
app.use('/api-v1/decks', require('./controllers/api-v1/decks.js'))
app.use('/api-v1/flashcards', require('./controllers/api-v1/flashcards.js'))
app.use('/api-v1', require('./controllers/api-v1/uploads.js'))

// hey listen
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`is that port ${PORT} I hear? 🙉`)
})

