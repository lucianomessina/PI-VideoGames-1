const express= require('express')
const {getVideoGame,
    getVideoGameById,
    postVideoGame,
    deleteVideoGame,
    putVideoGame}=require('../controllers/videogame')
 
const videogameRouter= express.Router()


videogameRouter.get("/",getVideoGame);
videogameRouter.get('/:id',getVideoGameById);
videogameRouter.post('/',postVideoGame);
videogameRouter.delete('/:id',deleteVideoGame);
videogameRouter.put('/:id',putVideoGame);

module.exports={videogameRouter};