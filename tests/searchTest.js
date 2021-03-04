const axios = require('axios')

async function hitGoogleBooks() {
  try {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Our Mathematical Universe')
    console.log(results.data)
  } catch (error) {
    console.log(error)
  }
}

hitGoogleBooks()

