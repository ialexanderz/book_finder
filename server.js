/* Required Modules and Variables */
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cryptoJS = require('crypto-js')
const db = require('./models')
const cookieParser = require('cookie-parser')



const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

/* Middleware and config */
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


// Adds the user to res.locals.user if there's a cookie
app.use(async (req, res, next) => {
  if (req.cookies.userId) {
    const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)
    
    // console.log(decryptedId);
    // await db.user.findByPk(decryptedId)
    const user = await db.user.findOne({
      where: {
        id: decryptedId
      }
    })
    
    res.locals.user = user
  } else {
    res.locals.user = null
  }
  
  next()
})



/* routes */ /*  render the homepage */
app.get('/', (req, res) => {
  res.render('index')
})


/* Controllers */
app.use('/auth', require('./controllers/authController'))
app.use('/search', require('./controllers/searchController'))
app.use('/review', require('./controllers/usersBooksController'))


app.listen(PORT, () => {
  rowdyResults.print()
})