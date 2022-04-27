const express= require('express')
const {getVideoGame,
    getVideoGameById,
    postVideoGame}=require('../controllers/videogame')
 
const videogameRouter= express.Router()


videogameRouter.get("/",getVideoGame);
videogameRouter.get('/:id',getVideoGameById);
videogameRouter.post('/',postVideoGame)


module.exports={videogameRouter};