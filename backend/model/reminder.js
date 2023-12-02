const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({

    date: { type: Date, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String },
    contactNo: { type: String },
    smsNo: { type: String },
    recurrence: { type: [String] },
    status: { type: String, default: 'Active' },

});

const ReminderModel = mongoose.model("Reminder", ReminderSchema);

module.exports = ReminderModel;