const router = require('express').Router()
const db = require('../models')
const axios = require('axios')


router.get('/', (req, res) => {
  res.render('review')
})

router.post('/', async (req, res) => {
  try {
    res.render('/review')
  } catch (error) {
    console.log(error)
  }
})

// router.get('/new', async (req, res) => {
//   try {
//     res.render('review')
//   } catch (error) {
//     console.log(error)
//   }
// })

// router.post('/new', async (req, res) => {

  // try {
  //    const [newPokemon, created] = await db.pokemon.findOrCreate({
  //           where: { 
  //               name: req.body.name 
  //           }
  //       })
  //       // console.log(created);
  //       res.locals.user.addPokemon(newPokemon);
  //       res.redirect(`/pokemons`)
    
  //   //  const created = await db.users_books.findOrCreate({
  //   //        where: {
  //   //             // userId: req.body.userId
  //   //             // bookId: req.body.bookId
  //   //             content: req.body.content
  //   //             rating: req.body.rating


  //   //        }

  //   //     })
        
  //       // console.log(created);
    

  // } catch (error) {

  // }
// })
















module.exports = router