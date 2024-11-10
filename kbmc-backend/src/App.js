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
import Electric from './components/Electric/Electric';
import AddElectric from './components/Electric/AddElectric';
import Roads from './components/Roads/Roads';
import AddRoads from './components/Roads/AddRoads';
import TreeCensus from './components/TreeCensus/TreeCensus';
import AddTreeCensus from './components/TreeCensus/AddTreeCensus';
import PondsAndTalao from './components/PondsAndTalao/PondsAndTalao';
import AddPondsAndTalao from './components/PondsAndTalao/AddPondsAndTalao';
import FireStation from './components/FireStation/FireStation';
import AddFireStation from './components/FireStation/AddFireStation';
import PrivateHospital from './components/PrivateHospital/PrivateHospital';
import AddPrivateHospital from './components/PrivateHospital/AddPrivateHospital';
import Health from './components/Health/Health';

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
          <Route path="/electric" element={<Electric />} />
          <Route path="/add-electric" element={<AddElectric />} />
          <Route path="/roads" element={<Roads />} />
          <Route path="/add-roads" element={<AddRoads />} />
          <Route path="/tree-census" element={<TreeCensus />} />
          <Route path="/add-tree-census" element={<AddTreeCensus />} />
          <Route path="/ponds-talao" element={<PondsAndTalao />} />
          <Route path="/add-ponds-talao" element={<AddPondsAndTalao />} />
          <Route path="/fire-station" element={<FireStation />} />
          <Route path="/add-fire-station" element={<AddFireStation />} />
          <Route path="/private-hospital" element={<PrivateHospital />} />
          <Route path="/add-private-hospital" element={<AddPrivateHospital />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
