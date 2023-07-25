// const express = require('express');
import express from 'express';

import router from './routes/index.js';

const app = express();

// defined port
const port = process.env.PORT || 4000;

// Pug
app.set('view engine', 'pug')

//Agregar router
app.use('/', router)

// listen arranca servidor
app.listen(port, () => {
    console.log(`Server on ${port}`);
})