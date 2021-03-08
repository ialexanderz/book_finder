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
//  POST /results - render results of book search
router.post('/results', async (req, res) => {
  console.log('hello')
  try{
    const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.search}&maxResults=5`)
    // console.log(results.data.items)
    res.render('results', { books: results.data.items })
    // console.log(results.data)
    // console.log(req)
  } catch (error) {
    console.log(error)
    res.status(500).render('error.ejs')
  }
})


//  GET /detail/:movie_id - render detail of one movie omdb search
// router.get('/dontgohere', async (req, res) => {
//   try {
//     const results = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${req.params.movie_id}`)
//     res.render('detail', { movie: results.data })
//   } catch (error) {
//     console.log(error)
//     res.status(500).render('error.ejs')
//   }
// })

module.exports = router