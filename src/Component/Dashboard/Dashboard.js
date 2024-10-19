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
import Add_slider from '../Slider/Add_slider';
import AddUser from '../AddUser/AddUser';
import User from '../AddUser/User';
import { FcDepartment } from 'react-icons/fc';
import Departments from '../Departments/Departments';
import AddDepartments from '../Departments/AddDepartments';
import Slider from '../Slider/Slider';
import PropertyHolder from '../PropertyHolder/PropertyHolder';
import AddPropertyHolder from '../PropertyHolder/AddPropertyHolder';
import MunicipalProperties from '../MunicipalProperties/MunicipalProperties';
import AddMunicipalProperties from '../MunicipalProperties/AddMunicipalProperties';
import Schools from '../Schools/Schools';
import Gardens from '../Gardens/Gardens';
import AddGardens from '../Gardens/AddGarden';
import Electric from '../Electric/Electric';
import AddElectric from '../Electric/AddElectric';
import Roads from '../Roads/Roads';
import AddRoads from '../Roads/AddRoads';
import TreeCensus from '../TreeCensus/TreeCensus';
import AddTreeCensus from '../TreeCensus/AddTreeCensus';
import PondsAndTalao from '../PondsAndTalao/PondsAndTalao';
import AddPondsAndTalao from '../PondsAndTalao/AddPondsAndTalao';
import FireStation from '../FireStation/FireStation';
import PrivateHospital from '../PrivateHospital/PrivateHospital';
import AddPrivateHospital from '../PrivateHospital/AddPrivateHospital';
import AddFireStation from '../FireStation/AddFireStation';
import AddSchools from '../Schools/AddSchools';
import CityProfileHealth from '../CityProfileHealth/CityProfileHealth';
import AddPhotoInHealth from '../CityProfileHealth/AddPhotoInHealth';

const Dashboard = () => {
  return (
    <Router>
       <Header />
      <div className="d-flex" style={{ height: '100vh', margin: 0 }}>
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: '250px' }}> {/* Leave space for the sidebar */}
         
          <div className="p-4 flex-grow-1"> {/* Allow this div to take remaining space */}
            {/* Define the routes here */}
            <Routes>
              <Route path="/" element={<MainMenuTable />} />
              <Route path="/add-main" element={<AddMainPage />} />
              <Route path="/noti" element={<Notifications />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/pp" element={<PrivacyPolicy />} />
              <Route path="/tac" element={<TermsAndConditions />} />

              <Route path="/adduser" element={<AddUser />} />
              <Route path="/user" element={<User />} />
              <Route path="/dep" element={<Departments />} />
              <Route path="/d" element={<FcDepartment />} />
              <Route path="/adddep" element={<AddDepartments />} />
              <Route path="/slider" element={<Slider />} />
              <Route path="/add_slider" element={<Add_slider />} />
              <Route path="/add-propertyholder" element={<AddPropertyHolder />} />
              <Route path="/property_holder" element={<PropertyHolder />} />
              <Route path="/municipal-properties" element={<MunicipalProperties />} />
              <Route path="/add-municipal" element={<AddMunicipalProperties />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/gardens" element={<Gardens />} />
              <Route path="/add-gardens" element={<AddGardens />} />
              <Route path="/electric" element={<Electric />} />
              <Route path="/add-electric" element={<AddElectric />} />
              <Route path="/roads" element={<Roads />} />
              <Route path="/add-roads" element={<AddRoads />} />
              <Route path="/tree-census" element={<TreeCensus />} />
              <Route path="/add-tree-census" element={<AddTreeCensus />} />
              <Route path="/ponds" element={<PondsAndTalao />} />
              <Route path="/add-ponds" element={<AddPondsAndTalao />} />
              <Route path="/firestation" element={<FireStation />} />
              <Route path="/private-hospital" element={<PrivateHospital />} />
              <Route path="/add-private-hospital" element={<AddPrivateHospital />} />
              <Route path="/add-fire" element={<AddFireStation />} />
              <Route path="/add-schools" element={<AddSchools />} />
              <Route path="/health" element={<CityProfileHealth />} />
              <Route path="/add-photo-health" element={<AddPhotoInHealth />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
