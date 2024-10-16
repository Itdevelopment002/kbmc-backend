import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className="d-flex flex-column p-3 bg-light" style={{ height: "100vh", width: "250px", marginTop:"55px" }}>
      {/* <h4 className="text-primary">KBMC</h4> */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">
            <FaBell className="me-2" />
            Main Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/con" className="nav-link" activeClassName="active">
            <FaHome className="me-2" />
            Slider
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" activeClassName="active">
            <FaServicestack className="me-2" />
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sub-services" className="nav-link" activeClassName="active">
            <FaTasks className="me-2" />
            Sub Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/home-video" className="nav-link" activeClassName="active">
            <FaVideo className="me-2" />
            Home Video
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news-update" className="nav-link" activeClassName="active">
            <FaRegNewspaper className="me-2" />
            News Update
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tenders" className="nav-link" activeClassName="active">
            <FaFileContract className="me-2" />
            Tenders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className="nav-link" activeClassName="active">
            <FaRegImages className="me-2" />
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/govt-links" className="nav-link" activeClassName="active">
            <FaLink className="me-2" />
            Govt. Website Links
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/departments" className="nav-link" activeClassName="active">
            <FaBuilding className="me-2" />
            Departments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sub-departments" className="nav-link" activeClassName="active">
            <FaUsers className="me-2" />
            Sub Departments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            <FaInfoCircle className="me-2" />
            About KBMC
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/city-profile" className="nav-link" activeClassName="active">
            <FaCity className="me-2" />
            City Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/schemes" className="nav-link" activeClassName="active">
            <FaTasks className="me-2" />
            Schemes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user" className="nav-link" activeClassName="active">
            <FaUser className="me-2" />
            User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pp" className="nav-link" activeClassName="active">
            <FaShieldAlt className="me-2" />
            Privacy Policy
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tac" className="nav-link" activeClassName="active">
            <FaGavel className="me-2" />
            Terms & Conditions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <FaPhone className="me-2" />
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/noti" className="nav-link" activeClassName="active">
            <FaBell className="me-2" />
            Notifications
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
