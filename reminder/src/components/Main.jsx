
import React from 'react';
import HomePage from './components/HomePage';
import ModifyReminder from './components/ModifyReminder';

const App = () => {
  const username = "Shubham Patidar"; 
  console.log(username);

   // Example data for subjects and reminders
   const subjects = ['Math', 'Science', 'History'];
   const reminders = ['Meeting', 'Assignment', 'Event'];
 
   const handleModifyReminder = (data) => {
     // Handle modification logic here
     console.log('Modified Reminder Data:', data);
   };
 
   const handleCancel = () => {
     // Handle cancellation logic here
     console.log('Modification Cancelled');
   };
   
  return (
    <div>
      <HomePage username={username} />
      <ModifyReminder 
        subjects={subjects}
        reminders={reminders}
        onModifyReminder={handleModifyReminder}
        onCancel={handleCancel}
     />
    </div>
  );
};

export default App;
