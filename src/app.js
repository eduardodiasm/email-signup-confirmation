const express = require('express')
const app = express()

app.use(express.json())

// routers
const userRoutes = require('./application/user')

app.use('/users', userRoutes)

module.exports = app