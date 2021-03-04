/* Required Modules and Variables */
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const axios = require('axios')
const morgan = require('morgan')
const cryptoJS = require('crypto-js')
const db = require('./models')



const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

/* Middleware and config */
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


/* Controllers */
app.use('/auth', require('./controllers/authController'))


app.listen(PORT, () => {
  rowdyResults.print()
})