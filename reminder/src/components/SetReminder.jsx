// src/components/SetReminder.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SetReminder = ({ onCancel }) => {




  const [selectedDate, setSelectedDate] = useState(null);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [smsNo, setSmsNo] = useState('');
  const [recurDays, setRecurDays] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleSmsNoChange = (e) => {
    setSmsNo(e.target.value);
  };



  const handleRecurDaysChange = (day) => {
    if (recurDays.includes(day)) {
      setRecurDays(recurDays.filter((d) => d !== day));
    } else {
      setRecurDays([...recurDays, day]);
    }
  };

  const handleSetReminder = () => {
    const setReminder = {
      date: selectedDate,
      subject,
      description,
      email,
      contactNo,
      smsNo,
      recurDays,
    };
  
    // Assuming your API endpoint is http://example.com/api/reminders
    const apiUrl = 'http://localhost:8000/api/reminder/setReminder';
  
    console.log(setReminder);
    axios.post(apiUrl, setReminder)
      .then(response => {
        // Handle successful response, if needed


setSelectedDate(null);
      setSubject('');
        setDescription('');
        setEmail('');
        setContactNo('');
         setSmsNo('');
         setRecurDays([]);

        console.log('Reminder created successfully:', response.data);
      })
      .catch(error => {
        // Handle errors during the request
        console.error('Error creating reminder:', error);
      });
  };

  const handleCancel = () => {
    // Call the parent component's callback function to handle cancellation
    onCancel();
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Set a New Reminder</h2>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select a Date</label>
          <div className="flex items-center">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
            />
            <div className="ml-2">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
          >
            {/* Add options for subjects */}
            <option value="">Select a Subject</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
  <option value="Health">Health</option>
  <option value="Exercise">Exercise</option>
  <option value="Shopping">Shopping</option>
  <option value="Cooking">Cooking</option>
  <option value="Cleaning">Cleaning</option>
  <option value="Appointments">Appointments</option>
  <option value="Family">Family</option>
  <option value="Friends">Friends</option>
  <option value="Education">Education</option>
  <option value="Finance">Finance</option>
  <option value="Hobbies">Hobbies</option>
  <option value="Me Time">Me Time</option>
  <option value="Travel">Travel</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Social Media">Social Media</option>
  <option value="Reading">Reading</option>
  <option value="Technology">Technology</option>
  <option value="Gardening">Gardening</option>
  <option value="Pets">Pets</option>
  <option value="Volunteering">Volunteering</option>
  <option value="Spirituality">Spirituality</option>
  <option value="Sleep">Sleep</option>
            {/* Add more subjects as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Add Description</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contact No</label>
          <input
            type="tel"
            value={contactNo}
            onChange={handleContactNoChange}
            className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">SMS No</label>
          <input
            type="tel"
            value={smsNo}
            onChange={handleSmsNoChange}
            className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recur for next:</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="7Days"
              checked={recurDays.includes('7Days')}
              onChange={() => handleRecurDaysChange('7Days')}
              className="mr-1"
            />
            <label htmlFor="7Days" className="mr-3">
              7 Days
            </label>

            <input
              type="checkbox"
              id="5Days"
              checked={recurDays.includes('5Days')}
              onChange={() => handleRecurDaysChange('5Days')}
              className="mr-1"
            />
            <label htmlFor="5Days" className="mr-3">
              5 Days
            </label>

            <input
              type="checkbox"
              id="3Days"
              checked={recurDays.includes('3Days')}
              onChange={() => handleRecurDaysChange('3Days')}
              className="mr-1"
            />
            <label htmlFor="3Days" className="mr-3">
              3 Days
            </label>

            <input
              type="checkbox"
              id="2Days"
              checked={recurDays.includes('2Days')}
              onChange={() => handleRecurDaysChange('2Days')}
            />
            <label htmlFor="2Days">2 Days</label>
          </div>
        </div>

        <div className="flex justify-between">
        <Link to="/">
          <button
            type="button"
   
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
            Cancel
          </button>
          </Link>

          <button
            type="button"
            onClick={handleSetReminder}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 mx-2"
          >
            Set Reminder
          </button>
        </div>
      </form>
    </div>
  )
}


export default SetReminder;