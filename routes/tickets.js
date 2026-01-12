const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// 1️⃣ Raise Ticket
router.post("/", async (req, res) => {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
});

// 2️⃣ View All Tickets
router.get("/", async (req, res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
});

// 3️⃣ Assign Ticket
router.put("/assign/:id", async (req, res) => {
    await Ticket.findByIdAndUpdate(req.params.id, {
        assignedTo: req.body.assignedTo,
        status: "Assigned"
    });
    res.json({ message: "Ticket assigned" });
});

// 4️⃣ Resolve Ticket
router.put("/resolve/:id", async (req, res) => {
    await Ticket.findByIdAndUpdate(req.params.id, {
        status: "Resolved"
    });
    res.json({ message: "Ticket resolved" });
});

module.exports = router;
