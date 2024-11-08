import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/css/bootstrap-datetimepicker.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/dataTables.bootstrap4.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/fullcalendar.min.css'
// import './assets/css/jquery.dataTables.min.css'
import './assets/css/select2.min.css'
import './assets/css/tagsinput.css'

import Slider from './components/Slider/Slider';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AddSlider from './components/Slider/AddSlider';
import MainMenu from './components/MainMenu/MainMenu';
import Contact from './components/Contact/Contact';
import Notifications from './components/Notifications/Notifications';
import TermsConditions from './components/TermsConditions.js/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Users from './components/Users/Users';
import AddUsers from './components/Users/AddUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/add-slider" element={<AddSlider />} />
          <Route path="/add-user" element={<AddUsers />} />
          <Route path="/user" element={<Users />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/notification" element={<Notifications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
