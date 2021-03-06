// Import packages
const express = require('express')
const morgan = require('morgan')
const helper = require('./helper/helper')

// App
const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Morgan
app.use(morgan('tiny'))

app.use('/transactions', require('./routes/transactions'))
app.use('/points', require('./routes/points'))

const PORT = 5000

// Starting server
app.listen(PORT, console.log(`Server running on port ${PORT}`))