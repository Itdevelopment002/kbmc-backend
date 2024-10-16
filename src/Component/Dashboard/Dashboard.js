import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MainMenuTable from '../MainMenuTable/MainMenuTable';
import Header from '../Header/Header';
import AddMainPage from '../MainMenuTable/AddMainPage';
import Notifications from '../Notifications/Notifications';
import ContactUs from '../Contactus/Contactus';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Dashboard = () => {
  return (
    <Router>
      <div className="d-flex" style={{ height: '100vh', margin: 0 }}> {/* Ensure full height and no margin */}
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column" style={{ margin: 0 }}> {/* Remove any margins */}
          <Header />
          <div className="p-4 flex-grow-1"> {/* Allow this div to take remaining space */}
            {/* Define the routes here */}
            <Routes>
              <Route path="/" element={<MainMenuTable />} />
              <Route path="/add-main" element={<AddMainPage />} />
              <Route path="/noti" element={<Notifications />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/pp" element={<PrivacyPolicy />} />
              <Route path="/tac" element={<TermsAndConditions />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
