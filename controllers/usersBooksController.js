const router = require('express').Router()
const db = require('../models')
const axios = require('axios')


router.get('/', async (req, res) => {
  try {
    res.render('search')
  } catch (error) {
    console.log(error)
  }
})

router.get('/new', async (req, res) => {
  try {
    res.render('review')
  } catch (error) {
    console.log(error)
  }
})

router.post('/new', async (req, res) => {

  try {
    //  const created = await db.users_books.findOrCreate({
    //        where: {
    //             // userId: req.body.userId
    //             // bookId: req.body.bookId
    //             content: req.body.content
    //             rating: req.body.rating


    //        }

    //     })
        
        // console.log(created);
    

  } catch (error) {

  }
})
















module.exports = router