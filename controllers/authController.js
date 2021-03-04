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