const ReminderModel = require("../model/reminder");

exports.viewReminder = (req, res) => {
    ReminderModel.find()
        .then((reminders) => {
            if (reminders.length > 0) {
                res.json(reminders);
            } else {
                res.status(404).json({ message: "No reminders found" });
            }
        })
        .catch((err) =>
            res.status(500).json({ message: "Failed to retrieve reminders", error: err.message })
        );
};


exports.viewidReminder = async (req, res) => {
    try {
        const reminderId = req.params.id;
        const updatedData = req.body; // The data you want to update
    
        // Find the reminder by ID and update it
        const updatedReminder = await ReminderModel.findByIdAndUpdate(reminderId, updatedData, { new: true });
    
        if (!updatedReminder) {
          return res.status(404).json({ message: 'Reminder not found' });
        }
    
        // Respond with the updated reminder
        res.json({ message: 'Reminder updated successfully', reminder: updatedReminder });
      } catch (error) {
        console.error('Error updating reminder:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };

exports.setReminder = async (req, res) => {
    try {
        const data = await ReminderModel.create(req.body);
        res.json({ message: "Reminder added successfully", data });
    } catch (err) {
        res.status(500).json({ message: "Failed to add todo", error: err.message });
    }
};


// Assuming this is your route handler for updating a reminder status
exports.modifyReminder = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      // Find the existing reminder
      const existingReminder = await ReminderModel.findById(id);
  
      if (!existingReminder) {
        return res.status(404).json({ message: 'Reminder not found' });
      }
  
      // Create an object to store the fields that need to be updated
      const updatedFields = {};
  
      // Iterate through the updateData and compare with existing data
      for (const [key, value] of Object.entries(updateData)) {
        if (existingReminder[key] !== value) {
          // Only update if the value is different
          updatedFields[key] = value;
        }
      }
  
      // Update the reminder with the modified fields
      const updatedReminder = await ReminderModel.findByIdAndUpdate(
        id,
        { $set: updatedFields },
        { new: true }
      );
  
      res.json({ message: 'Reminder modified successfully', data: updatedReminder });
    } catch (error) {
      console.error('Error modifying reminder:', error);
      res.status(500).json({ message: 'Failed to modify reminder', error: error.message });
    }
  };
  
  
exports.deleteReminder = (req, res) => {
    ReminderModel.findByIdAndDelete(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Reminder deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Reminder not found", error: err.message })
        );
};