import { Router } from 'express';
import { ticketController } from '../controllers/ticketRouter.controller.js'

const ticketsRouter = Router();

ticketsRouter.post('/generate', ticketController.generateTicket);

export default ticketsRouter;
