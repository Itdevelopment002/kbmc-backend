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
import PropertyHolder from './components/PropertyHolder/PropertyHolder';
import AddPropertyHolder from './components/PropertyHolder/AddPropertyHolder';
import MuncipalProperties from './components/MuncipalProperties/MuncipalProperties';
import AddMuncipalProperties from './components/MuncipalProperties/AddMuncipalProperties';
import Schools from './components/Schools/Schools';
import AddSchools from './components/Schools/AddSchools';
import Garden from './components/Garden/Garden';
import AddGarden from './components/Garden/AddGarden';
import AddTender from './components/Tender/AddTender';
import Tender from './components/Tender/Tender';
import News from './components/News/News';
import AddNews from './components/News/AddNews';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import AddPhotoGallery from './components/PhotoGallery/AddPhotoGallery';
import AddServices from './components/Services/AddServices';
import Services from './components/Services/Services';

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
          <Route path="/property-holder" element={<PropertyHolder />} />
          <Route path="/add-property-holder" element={<AddPropertyHolder />} />
          <Route path="/muncipal-properties" element={<MuncipalProperties />} />
          <Route path="/add-muncipal-properties" element={<AddMuncipalProperties />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/add-schools" element={<AddSchools />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/add-garden" element={<AddGarden />} />
          <Route path="/add-tenders" element={<AddTender />} />
          <Route path="/tenders" element={<Tender />} />
          <Route path="/news" element={<News />} />
          <Route path="/add-news" element={<AddNews />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/add-photos-gallery" element={<AddPhotoGallery />} />
          <Route path="/add-services" element={<AddServices/>} />
          <Route path="/services" element={<Services/>} />









        </Routes>
      </Router>
    </div>
  );
}

export default App;
