import { randomUUID } from 'crypto';
import { ticketsModel } from '../models/ticket.model.js'

class TicketDao {
    static async createTicket(ticketData) {
        ticketData.code = randomUUID(); 
        const ticket = await ticketsModel.create(ticketData);
        return ticket.toObject();
    }

    static async findAllTickets() {
        return await ticketsModel.find().lean();
    }

    static async findTicketById(ticketId) {
        const ticket = await ticketsModel.findById(ticketId).lean();
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        return ticket;
    }

    static async updateTicket(ticketId, updatedTicket) {
        return await ticketsModel.findByIdAndUpdate(ticketId, updatedTicket, { new: true }).lean();
    }

    static async deleteTicketById(ticketId) {
        return await ticketsModel.findByIdAndDelete(ticketId);
    }

}

export const ticketDao = new TicketDao()