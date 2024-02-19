import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
    code: { type: String, required: true, unique: true },
    purchase_datetime: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    purchaser: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export const TicketsModel = model('Ticket', ticketSchema);

