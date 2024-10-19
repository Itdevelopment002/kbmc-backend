import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {  MdLink, MdBusiness } from 'react-icons/md';

import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaVideo,
  FaNewspaper,
} from "react-icons/fa"; // Updated icons
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  MdPersonAdd,
  MdPrivacyTip,
  MdContactMail,
  MdNotifications,
} from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import "./Sidebar.css";

import { FaImage } from "react-icons/fa";

const Sidebar = () => {
  const [showSubServices, setShowSubServices] = useState(false);
  const [showAboutKBMC, setShowAboutKBMC] = useState(false);
  const [showCityProfile, setShowCityProfile] = useState(false);
  const [showSchemes, setShowSchemes] = useState(false);
  const [showSubDepartments, setShowSubDepartments] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="sidebar" style={{backgroundColor:"#f0f0f0"}}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            <FaHome className="me-2" />
            Main Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/slider" className="nav-link" activeClassName="active">
            <FaClipboardList className="me-2" />
            Slider
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" activeClassName="active">
            <FaUsers className="me-2" />
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowSubServices(!showSubServices)}
            style={{ cursor: "pointer" }}
          >
            <FaClipboardList className="me-2" />
            Sub Services {showSubServices ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showSubServices && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/public-disclosure"
                  className="nav-link"
                  activeClassName="active"
                >
                  Public Disclosure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/citizen-charter"
                  className="nav-link"
                  activeClassName="active"
                >
                  Citizen Charter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/right-to-service"
                  className="nav-link"
                  activeClassName="active"
                >
                  Right to Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/development-plan"
                  className="nav-link"
                  activeClassName="active"
                >
                  Development Plan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/downloads"
                  className="nav-link"
                  activeClassName="active"
                >
                  Downloads
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/city-map"
                  className="nav-link"
                  activeClassName="active"
                >
                  City Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/elected-wing"
                  className="nav-link"
                  activeClassName="active"
                >
                  Elected Wing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/official-publications"
                  className="nav-link"
                  activeClassName="active"
                >
                  Official Publications
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <NavLink
            to="/home-video"
            className="nav-link"
            activeClassName="active"
          >
            <FaVideo className="me-2" />
            Home Video
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className="nav-link" activeClassName="active">
            <FaNewspaper className="me-2" />
            News Update
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tender" className="nav-link" activeClassName="active">
            <FaClipboardList className="me-2" />
            Tenders
          </NavLink>
        </li>

        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowAboutKBMC(!showAboutKBMC)}
            style={{ cursor: "pointer" }}
          >
            <FaImage className="me-2" />
            Gallery {showAboutKBMC ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showAboutKBMC && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/history"
                  className="nav-link"
                  activeClassName="active"
                >
                  Photo Gallery
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
  <NavLink to="/notifications" className="nav-link" activeClassName="active">
    <MdLink className="me-2" />
    Gov. Website Links
  </NavLink>
</li>

<li className="nav-item">
  <NavLink to="/department" className="nav-link" activeClassName="active">
    <MdBusiness className="me-2" />
    Department
  </NavLink>
</li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowSubDepartments(!showSubDepartments)}
            style={{ cursor: "pointer" }}
          >
            <FaClipboardList className="me-2" />
            Sub Departments{" "}
            {showSubDepartments ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showSubDepartments && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/education"
                  className="nav-link"
                  activeClassName="active"
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/health"
                  className="nav-link"
                  activeClassName="active"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/welfare"
                  className="nav-link"
                  activeClassName="active"
                >
                  Welfare
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/urban-development"
                  className="nav-link"
                  activeClassName="active"
                >
                  Urban Development
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/environment"
                  className="nav-link"
                  activeClassName="active"
                >
                  Environment
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowAboutKBMC(!showAboutKBMC)}
            style={{ cursor: "pointer" }}
          >
            <FaClipboardList className="me-2" />
            About KBMC {showAboutKBMC ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showAboutKBMC && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/history"
                  className="nav-link"
                  activeClassName="active"
                >
                  History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/wards"
                  className="nav-link"
                  activeClassName="active"
                >
                  Wards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/elected-wings"
                  className="nav-link"
                  activeClassName="active"
                >
                  Elected Wings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/functions"
                  className="nav-link"
                  activeClassName="active"
                >
                  Functions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/previous-officer"
                  className="nav-link"
                  activeClassName="active"
                >
                  Previous Chief Officers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/previous-president"
                  className="nav-link"
                  activeClassName="active"
                >
                  Previous Presidents
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/awards"
                  className="nav-link"
                  activeClassName="active"
                >
                  Awards
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowCityProfile(!showCityProfile)}
            style={{ cursor: "pointer" }}
          >
            <FaUsers className="me-2" />
            City Profile {showCityProfile ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showCityProfile && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/property_holder"
                  className="nav-link"
                  activeClassName="active"
                >
                  Property Holder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/municipal-properties"
                  className="nav-link"
                  activeClassName="active"
                >
                  Municipal Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/schools"
                  className="nav-link"
                  activeClassName="active"
                >
                  Schools
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/gardens"
                  className="nav-link"
                  activeClassName="active"
                >
                  Gardens
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/electric"
                  className="nav-link"
                  activeClassName="active"
                >
                  Electric
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/roads"
                  className="nav-link"
                  activeClassName="active"
                >
                  Roads
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tree-census"
                  className="nav-link"
                  activeClassName="active"
                >
                  Tree Census
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/health"
                  className="nav-link"
                  activeClassName="active"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/ponds"
                  className="nav-link"
                  activeClassName="active"
                >
                  Ponds / Talao
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/firestation"
                  className="nav-link"
                  activeClassName="active"
                >
                  Fire Station
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/private-hospital"
                  className="nav-link"
                  activeClassName="active"
                >
                  Private Hospital
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={() => setShowSchemes(!showSchemes)}
            style={{ cursor: "pointer" }}
          >
            <FaClipboardList className="me-2" />
            Schemes {showSchemes ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showSchemes && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <NavLink
                  to="/nulm"
                  className="nav-link"
                  activeClassName="active"
                >
                  NULM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pmay"
                  className="nav-link"
                  activeClassName="active"
                >
                  PMAY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pmsvy"
                  className="nav-link"
                  activeClassName="active"
                >
                  PMSVY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pmgsy"
                  className="nav-link"
                  activeClassName="active"
                >
                  PMGSY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pmkvy"
                  className="nav-link"
                  activeClassName="active"
                >
                  PMKVY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nuls"
                  className="nav-link"
                  activeClassName="active"
                >
                  NULS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pmssy"
                  className="nav-link"
                  activeClassName="active"
                >
                  PMSSY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/other-schemes"
                  className="nav-link"
                  activeClassName="active"
                >
                  Other Schemes
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <NavLink to="/user" className="nav-link" activeClassName="active">
            <MdPersonAdd className="me-2" />
            Add User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/pp"
            className="nav-link"
            activeClassName="active"
          >
            <MdPrivacyTip className="me-2" />
            Privacy Policy
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/tac"
            className="nav-link"
            activeClassName="active"
          >
            <BsFileEarmarkText className="me-2" />
            Terms & Conditions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
          >
            <MdContactMail className="me-2" />
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/noti"
            className="nav-link"
            activeClassName="active"
          >
            <MdNotifications className="me-2" />
            Notifications
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
