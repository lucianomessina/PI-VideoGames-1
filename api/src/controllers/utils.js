const {API_KEY}=process.env;
const {Videogame, Genres}= require('../db');
const axios= require('axios')

const getOneVideoGame= async(id)=>{
  try {
    const g= await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    // console.log(g.data)
    const game={
      name:g.data.name,
      id:g.data.id,
      description:g.data.description,
      released:g.data.released,
      rating:g.data.rating,
      background_image:g.data.background_image,
      platforms:g.data.platforms,
      createdVideoGame:false,
      genres:g.data.genres

    }
    // console.log('el juego es: '+game)
    return game
  } catch (error) {
    console.log(error)
  }

}

const getDBvideogames = async ()=>{
  try {
    const DBinfo= await Videogame.findAll({
      
      include:{
        model:Genres,
        attributes: ["name"],
        through:{
          attributes:[]
        },

      }
    });
    console.log('la info es ', DBinfo);
    const dbGame= await DBinfo.map((e)=>{
      return{
        id:e.id,
        name:e.name,
        rating:e.rating,
        platforms:e.platforms,
        description:e.description,
        background_image:e.background_image,
        Genres:e.Genres.map(e=>e),
        released:e.released,
        createdVideoGame:e.createdVideoGame
      }
    });

    return dbGame;

  } catch (error) {
    console.log(error)
  }

}

const getApiVideoGames = async () => {
    try {
      const games = [];
      let url = `https://api.rawg.io/api/games?key=6ecdb191f18d44108c899e1795859126`;
      for (let i = 1; i < 15; i++) {
        let pages = await axios.get(url);
        pages.data?.results.forEach((e) => {
          games.push({
            id: e.id,
            name: e.name,
            background_image: e.background_image,
            rating: e.rating,
            genres: e.genres.map((gender) => gender.name),
            platforms: e.platforms.map((platform) => platform.platform.name),
            genres:e.genres.map(e=>e.name),
            description:e.description
          });
        });
        url = pages.data.next;
      }
      return games;
    } catch (error) {
      console.log(error);
    }}

    //contats the games from the API and the DB
    const getAllVideoGames= ()=>{
      try {
        const allGames= Promise.all([getApiVideoGames(),getDBvideogames()]).then(
          (res)=>{
            return [...res[0], ...res[1]];
          }
        );
        return allGames;
      } catch (error) {
      console.log(error);   
      }
    }
    module.exports={
  getApiVideoGames,
  getAllVideoGames,
  getDBvideogames,getOneVideoGame
};