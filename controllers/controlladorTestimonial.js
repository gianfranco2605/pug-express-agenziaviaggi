
const guardarTestimonial = (req, res) => {
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

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje
        })
    }
    
}

export {
    guardarTestimonial
}