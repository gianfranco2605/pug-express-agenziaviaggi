// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//dabase connect
db.authenticate()
    .then(() => console.log('Database connect'))
    .catch( error => console.log(error))
   

// defined port
const port = process.env.PORT || 4000;

// Pug
app.set('view engine', 'pug');

//Get actual Year
app.use((req, res, next) => {
    const year = new Date();

    res.locals.sitename = "Agencia de Viajes Navas ";
    res.locals.actualYear = year.getFullYear()
    return next();
});

//Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extends: true}));

//define public folder
app.use(express.static('public'));

//Agregar router
app.use('/', router)

// listen arranca servidor
app.listen(port, () => {
    console.log(`Server on ${port}`);
})