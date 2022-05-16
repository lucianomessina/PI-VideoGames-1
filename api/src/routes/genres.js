const express= require('express');
const{getGenre}=require('../controllers/genre');
const genresRouter= express.Router()




genresRouter.get("/", getGenre);








module.exports={genresRouter};