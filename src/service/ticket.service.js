import { ticketDao } from '../dao/ticket.dao.js';
import { productService } from './products.service.js';

export class TicketService {
    static async generateTicket(purchaser, products) {
        try {
            const amount = await productService.calculateTotal(products);

            const ticketData = { code: generateUniqueTicketCode(), purchase_datetime: new Date(), amount, purchaser, products };
            const ticket = await ticketDao.createTicket(ticketData);

            return ticket;
        } catch (error) {
            throw error;
        }
    }
}
export const ticketService = new TicketService();