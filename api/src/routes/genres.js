const express= require('express');
const{getGenre}=require('../controllers/genre');
const genresRouter= express.Router()


// genderRouter.get('/genres',getGenres)

genresRouter.get("/", getGenre);








module.exports={genresRouter};