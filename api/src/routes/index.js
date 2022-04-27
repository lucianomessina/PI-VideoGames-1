const { videogameRouter} = require('./videogame');
const { genresRouter} = require('./genres');
const express = require('express');

// const { route, router } = require('../app');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// console.log(router.use('/videogames',videogameRouter))

const router=express.Router();
router.use('/videogames',videogameRouter);
router.use('/genres',genresRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
