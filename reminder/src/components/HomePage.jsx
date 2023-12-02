// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Reminder Application</h1>
      <p className="mb-4">Today is {currentDay}, {currentDate}.</p>

      <div className="flex flex-wrap justify-center mb-8">
        <Link to="/SetReminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Set Reminder
          </button>
        </Link>
{/* 
        <Link to="/ModifyReminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Modify Reminder
          </button>
        </Link>


        <Link to="/DisableReminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Disable Reminder
          </button>
        </Link>

        <Link to="/DeleteReminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Delete Reminder
          </button>
        </Link>

        <Link to="/EnableReminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Enable Reminder
          </button>
        </Link> */}

        <Link to="/ViewReminders">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            View your Reminders
          </button>
        </Link>
      </div>

      

      {/* Back and Logout buttons */}
      <div className="flex justify-between">
        <Link to="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Back
          </button>
        </Link>

        <Link to="/LogoutMessage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;







