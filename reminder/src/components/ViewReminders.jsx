// src/components/ViewReminders.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewReminders = ({ subjects, onLogout }) => {
  const [remindersData, setReminders] = useState([]);
  const [selectedReminder, setSelectedReminder] = useState('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reminders when the component mounts
    const fetchReminders = async () => {
      try {
        // Start loading
        setLoading(true);

        const response = await axios.get('https://reminder--api.vercel.app/api/reminder/viewReminder');
        setReminders(response.data);

        // Stop loading after successful fetch
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reminders:', error);
        // Handle errors as needed, e.g., display an error message to the user

        // Stop loading on error
        setLoading(false);
        setReminders([]);
      }
    };

    fetchReminders();
  }, []);


  const handleReminderChange = (e) => {
    setSelectedReminder(e.target.value);
  };




  const handleDelete = async () => {
    if (!selectedReminder) {
      // If no reminder is selected, do nothing or show a message to the user
      return;
    }

    console.log(selectedReminder);
  
    try {
      // Send a request to your backend to delete the selected reminder
      const response = await axios.delete(`https://reminder--api.vercel.app/api/reminder/${selectedReminder}`);
  
      if (response.data.message === 'Deleted successfully') {
        // Perform any additional actions after successful deletion
        console.log('Reminder deleted successfully');
      } else {
        // Handle deletion failure
        console.error('Failed to delete reminder:', response.data.error);
      }
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };

  const handleModify = () => {
    try {
      if ( selectedReminder) {
        // Use navigate to navigate to the Modify component with the selected reminder's ID
        navigate(`/ModifyReminder/${selectedReminder}`);
      } else {
        console.error('Selected reminder or its ID is undefined.');
      }
    } catch (error) {
      console.error('Error navigating to Modify component:', error);
    }
  };
  

  const handleEnable = async () => {
    try {
      if (selectedReminder) {
        // Make an API call to update the status to "Active"
        await axios.put(`https://reminder--api.vercel.app/api/reminder/${selectedReminder}`, {
          status: 'Active',
        });
  
        // Fetch updated reminders after the status change
        const response = await axios.get('https://reminder--api.vercel.app/api/reminder/viewReminder');
        setReminders(response.data);
  
        // Optionally, show a success message to the user
        window.alert('Reminder enabled successfully');
      }
    } catch (error) {
      console.error('Error enabling status:', error);
      // Show an alert on error
      window.alert('Error enabling reminder status. Please try again.');
    }
  };
  

  const handleDisable = async () => {
    try {
      if (selectedReminder) {
        // Make an API call to update the status to "Active"
        await axios.put(`https://reminder--api.vercel.app/api/reminder/${selectedReminder}`, {
          status: 'Inactive',
        });
  
        // Fetch updated reminders after the status change
        const response = await axios.get('https://reminder--api.vercel.app/api/reminder/viewReminder');
        setReminders(response.data);
  
        // Optionally, show a success message to the user
        window.alert('Reminder enabled successfully');
      }
    } catch (error) {
      console.error('Error enabling status:', error);
      // Show an alert on error
      window.alert('Error enabling reminder status. Please try again.');
    }

  };




  
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">View Your Reminders</h2>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">Reminder Name</th>
            <th className="border border-gray-300">Reminder Subject</th>
            <th className="border border-gray-300">Reminder Description</th>
            <th className="border border-gray-300">Reminder Email</th>
            <th className="border border-gray-300">Reminder Contact</th>
            <th className="border border-gray-300">Reminder Sms No.</th>
            <th className="border border-gray-300">Reminder Status </th>
            <th className="border border-gray-300">Recurr </th>
            <th className="border border-gray-300">Checkbox </th>
          </tr>
        </thead>

        <tbody>

        {loading ? (
        <p>Loading...</p>
      ) : (
          remindersData.map((reminder) => (
            <tr key={reminder._id}>
            <td className="border border-gray-300">{reminder.date}</td>
            <td className="border border-gray-300">{reminder.subject}</td>
            <td className="border border-gray-300">{reminder.description}</td>
            <td className="border border-gray-300">{reminder.email}</td>
            <td className="border border-gray-300">{reminder.contactNo}</td>
            <td className="border border-gray-300">{reminder.smsNo}</td>
            <td className="border border-gray-300">{reminder.status}</td>
            <td className="border border-gray-300">{reminder.recurrence.join(', ')}</td>
            <td className="border border-gray-300">
              <input
                type="radio"
                name="selectReminder"
                value={reminder._id}
                checked={selectedReminder === reminder._id}
                onChange={handleReminderChange}
              />
            </td>
          </tr>
          )))}

      



        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-between mt-4">

      <Link to="/">
      <button
            type="button"
          
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
            Back
          </button>
          </Link>

        <button
          type="button"
          onClick={handleDelete}
          disabled={!selectedReminder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
          Delete
        </button>

        <button
          type="button"
          onClick={handleEnable}
          disabled={!selectedReminder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
          Enable
        </button>
        <button
          type="button"
          onClick={handleDisable}
          disabled={!selectedReminder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
          Disable
        </button>


      


        <button
          type="button"
          onClick={handleModify}
          disabled={!selectedReminder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
          Modify
        </button>

        {/* Back button */}
        <Link to="/LogoutMessage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};


export default ViewReminders;
