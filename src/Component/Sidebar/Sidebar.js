import React from 'react';
import { 
  FaTachometerAlt, 
  FaHome, 
  FaVideo, 
  FaRegNewspaper, 
  FaServicestack, 
  FaLink, 
  FaRegImages, 
  FaFileContract, 
  FaUsers, 
  FaCity, 
  FaBuilding, 
  FaTasks, 
  FaInfoCircle, 
  FaUser, 
  FaShieldAlt, 
  FaGavel, 
  FaPhone, 
  FaBell 
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ height: "100vh", width: "250px" }}>
      <h4 className="text-primary">KBMC</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            <FaTachometerAlt className="me-2" />
            Main Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaHome className="me-2" />
            Slider
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaServicestack className="me-2" />
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaTasks className="me-2" />
            Sub Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaVideo className="me-2" />
            Home Video
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaRegNewspaper className="me-2" />
            News Update
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaFileContract className="me-2" />
            Tenders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaRegImages className="me-2" />
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaLink className="me-2" />
            Govt. Website Links
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaBuilding className="me-2" />
            Departments
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUsers className="me-2" />
            Sub Departments
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaInfoCircle className="me-2" />
            About KBMC
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaCity className="me-2" />
            City Profile
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaTasks className="me-2" />
            Schemes
          </a>
        </li>
        {/* New Items Added Below */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUser className="me-2" />
            User
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaShieldAlt className="me-2" />
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaGavel className="me-2" />
            Terms & Conditions
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaPhone className="me-2" />
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaBell className="me-2" />
            Notifications
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
