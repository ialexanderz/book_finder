const router = require('express').Router()
const db = require('../models')

// Display login page
router.get('/login', (req, res) => {
  res.render('auth/login', { errors: null })
})


// Display sign up page
router.get('/new', (req, res) => {
  res.render('auth/new', { errors: null })
})


router.post('/', (req, res) => {
  try {
    const user = await db.user.create({
    username: req.body.username,
    password: req.body.password
    })

  } catch (err){
    console.log(err)
    res.render('auth/new', { errors: 'Error creating user, try again with a different username' })
  }
}) 

module.exports = router