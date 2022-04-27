const { default: axios } = require('axios');
const {Videogame}=require('../db')
const API_KEY=process.env

const {getApiVideoGames,
    getAllVideoGames,
    getDBvideogames,
    getOneVideoGame}=require('./utils');

const postVideoGame=async(req,res)=>{
    const{name,
        description,
        rating,
        released,
        background_image,
        platforms,
        genres
    }=req.body
    if(!name || !description || !platforms){
      return  res.status(404).send('Missing data');
    }else{
        const videogame= await Videogame.create({
            name,
            description,
            rating,
            released,
            platforms,
            background_image,

        })
        console.log('videogames es: ',videogame);
       return  res.send(videogame);
    }

}



    //Busca todos o uno si se le pasa un query
const getVideoGame=async(req,res)=>{
    try { 
        console.log('entro')
        const {name}=req.query;
        var game
        const all=await getAllVideoGames()
        if(name){
           game= all.find(e=>e.name==name)
            game?
             res.send(game):
            res.status(404).send('Game not found');
        }else{
            res.send(all)
        }
        
    } catch (error) {
        console.log('hubo un error:'+ error)
    }
}
const getVideoGameById=async(req,res)=>{
    try {
        console.log('entro a la funcion')
        const {id}=req.params;
        var game;
        // <=4 means it's from the API
        if(id.length<5){
            game=await  getOneVideoGame(id);
            // console.log(getOneVideoGame(id))
            // console.log(game)
            game? 
            res.send(game):
            res.status(404).send('Game not found');
        }
        // id>4 means it's from DB 
        else{
           res.send('queda pendiente');
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    getVideoGame,
    getVideoGameById,
    postVideoGame
};