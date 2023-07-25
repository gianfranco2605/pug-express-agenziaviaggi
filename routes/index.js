import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {//req what we send req what express send us
    res.render('inicio');
})

router.get('/nosotros', (req, res) => {//req what we send req what express send us
    
    // pasando variables
    const viajes = 'Viaje a Alemania'
    
    res.render('nosotros', {
        viajes,
    });
})


export default router;