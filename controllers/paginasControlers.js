import { Viaje } from '../models/Viajes.js';
import { Testimonial } from '../models/testimoniales.js';

const paginasInicio = async (req, res) => {//req what we send req what express send us

    // Consultar 3 viajes del modelo Viaje
    //Promise para ejecutar 2 async /await
    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all( promiseDB ); 
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
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

const paginasTestimoniales = async (req, res) => {
    
    try {
        //consultar db testimoniales
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
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
