import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Main from "./components/HomePage";
import ModifyReminder from "./components/ModifyRemainder";
import SetReminder from "./components/SetReminder";


import ViewReminders from "./components/ViewReminders";

import LogoutMessage from "./components/LogoutMessage"



function App() {
    return (
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Main />}/>
            <Route path="/SetReminder" element={<SetReminder />}/>
            <Route path="/ModifyReminder/:id" element={<ModifyReminder />} />
            <Route path="/ViewReminders" element={<ViewReminders/>}/>
            <Route path="/LogoutMessage" element={<LogoutMessage/>}/>  
          

          </Routes>
        </BrowserRouter>
      );
}

export default App;