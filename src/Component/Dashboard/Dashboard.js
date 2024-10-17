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
import Slider from '../Slider/Slider';
import Services  from '../Services/Services';
import Add_services from '../Services/Add_services';
import Add_slider from '../Slider/Add_slider';
import Home_video from '../Home-Video/Home_video';
import Add_homvideo from '../Home-Video/Add_homvideo';
import News from '../NewsUpdate/News';
import Add_news  from '../NewsUpdate/Add_news';
import Tenders from '../Tenders/Tender';
import Add_tender from '../Tenders/Add_tender';

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
              <Route path="/slider" element={<Slider />} />
              <Route path="/services" element={<Services />} />
              <Route path="/add_services" element={<Add_services />} />
              <Route path="/add_slider" element={<Add_slider />} />
              <Route path="/add_homvideo" element={<Add_homvideo />} />
              <Route path="/Home_video" element={<Home_video />} />
              <Route path="/News" element={<News />} />
              <Route path="/Add_news" element={<Add_news />} />
              <Route path="/Tenders" element={<Tenders />} />
              <Route path="/Add_tender" element={<Add_tender />} />





            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
