import { ticketService } from '../service/ticket.service.js';

export class TicketController {
    static async generateTicket(req, res) {
        try {
            const { code, amount, purchaser, products } = req.body;
            const ticket = await ticketService.generateTicket(code, amount, purchaser, products);
            res.created(ticket); 
        } catch (error) {
            console.error(error);
            res.serverError('No se pudo generar el ticket.'); 
        }
    }
}



