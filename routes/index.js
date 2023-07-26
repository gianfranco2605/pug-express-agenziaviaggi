import express from 'express';
import { paginasInicio, paginasNosotros, paginasViajes, paginasTestimoniales,paginaDetalleViaje } from '../controllers/paginasControlers.js';
import { guardarTestimonial } from '../controllers/controlladorTestimonial.js';

const router = express.Router();

router.get('/', paginasInicio)

router.get('/nosotros', paginasNosotros)

router.get('/viajes', paginasViajes)

router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginasTestimoniales )

router.post('/testimoniales', guardarTestimonial )

export default router;