import { Viaje } from '../models/Viajes.js';

const paginasInicio = (req, res) => {//req what we send req what express send us
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginasNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}


const paginasViajes = async (req, res) => {
    //database 
    const viajes = await Viaje.findAll();
    

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginasTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({
            where: { slug },
        })
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginasInicio,
    paginasNosotros,
    paginasViajes,
    paginasTestimoniales,
    paginaDetalleViaje,
 }
