import express from 'express';
import { paginasInicio, paginasNosotros, paginasViajes, paginasTestimoniales } from '../controllers/paginasControlers.js';

const router = express.Router();

router.get('/', paginasInicio)

router.get('/nosotros', paginasNosotros)

router.get('/viajes', paginasViajes)

router.get('/testimoniales', paginasTestimoniales )

export default router;