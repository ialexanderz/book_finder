const router = require('express').Router()
const db = require('../models')
const axios = require('axios')


// router.get('/', (req, res) => {
//   console.log('hello')
//   res.render('review')
// })

router.post('/', async (req, res) => {
  try {
    console.log('hello again')
    res.render('review')
  } catch (error) {
    console.log(error)
  }
})


router.post('/new', async (req, res) => {
  try {

    const newBook = await db.users_books.create({
      userId: req.body.userId,
      content: req.body.content,
      rating: req.body.rating
    })
    res.render('new')
  } catch(error) {
    console.log(error)
    res.status(400).json({ message: 'bad request' })
  }
})

// //  GET /detail/:movie_id - render detail of one movie omdb search
// router.get('/review', async (req, res) => {
//   try {
//     const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body}`)
//     res.render('result', {book: results.data })
//   } catch (error) {
//     console.log(error)
//     res.status(500).render('error.ejs')
//   }
// })

// router.post('/new', async (req, res) => {
//   try {

//     const newBook = await db.book.create({
//       googleBookId: req.body.googleBookId,
//       title: req.body.title
//     })
//     res.render('new')
//   } catch(error) {
//     console.log(error)
//     res.status(400).json({ message: 'bad request' })
//   }
// })
     

module.exports = router