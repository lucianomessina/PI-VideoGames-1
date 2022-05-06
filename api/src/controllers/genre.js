const {API_KEY}= process.env;
const {Genres} = require ('../db');
const axios=require('axios')

const getGenre=async function (req, res) {

    try {
      const genresApi = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      const genres = genresApi.data.results.map((g) => g.name);
      
      //bulkcreate >>> squelize
      genres.forEach((el) => {
        Genres.findOrCreate({ where: { name: el } });
      });
  
      const allGenres = await Genres.findAll();
      return res.send(allGenres);
    } catch (error) {
      console.log(error);
      res.status(404).send(error)
    }
  }



  module.exports={getGenre};