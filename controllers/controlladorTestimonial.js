import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req, res) => {
    // validar formulario 

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'Nombre Vacio'})
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'Correo Vacio'})
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'Mensaje Vacio'})
    }

    if(errores.length > 0) {

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //Save on database

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    }
    
}

export {
    guardarTestimonial
}