const { default: axios } = require('axios');
const {Videogame, Genres}=require('../db');
// const Genres = require('../models/Genres');
const API_KEY=process.env
const { Op } = require("sequelize");

const {getApiVideoGames,
    getAllVideoGames,
    getDBvideogames,
    getOneVideoGame}=require('./utils');


const putVideoGame= async ()=>{
    const {id}=req.params
    const{name,
        description,
        rating,
        background_image,
        platforms,
        
    }=req.body;
    if(!id || id.length<6){
        return res.status(404).send('the provided id is not valid')
    }else{
        const changeVD= await Videogame.findByPk(id);
        if(changeVD){
         await changeVD.update({
            name,
            rating,
            description,
            background_image,
            platforms,
        })
        return res.send('VideoGame updated succesfully!')
        }else{
            res.send("couldn't find the game with the id provided.");
        }
    }
}

const deleteVideoGame= async (req,res)=>{
    const {id}= req.params;
    const vgToDelete= await Videogame.findByPk(id);
    if(vgToDelete){
        await vgToDelete.destroy();
        return res.send('VideoGame succesfully removed');
    }
    return res.status(404).send("Couldn't find the videogame in the DataBase")
}    

const postVideoGame=async(req,res)=>{
    const{name,
        description,
        rating,
        released,
        background_image,
        platforms,
        genres
    }=req.body
    //validations
    if(typeof name=='number') return res.status(400).send("The name can't be a number");
    if(rating<0 || rating>5) return res.status(400).send("the rating has to be beetwen 0 and 5");

    
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
            genres
        })

        const genresDB= await Genres.findAll({
            where:{
                name:{
                    [Op.in]: genres
                }
            }
        })
        // console.log(videogame)
        // console.log(genres)
        await videogame.addGenres(genresDB)
        // console.log('videogames es: ',videogame);
       return  res.status(201).send(videogame);
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
           const dbVideogames= await getDBvideogames();
           const videogame= dbVideogames.find(game=> game.id===id);
           videogame? 
           res.send(videogame):
           res.status(404).send("Couldn't find the pokemon with the id: ",id )
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    getVideoGame,
    getVideoGameById,
    postVideoGame,
    deleteVideoGame,
    putVideoGame
};