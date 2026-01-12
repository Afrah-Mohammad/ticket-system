const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, default: "Open" },
    assignedTo: { type: String, default: "Unassigned" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);
