import React, { useState } from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuId) => {
    setOpenSubmenu((prevId) => (prevId === menuId ? null : menuId));
  };

  return (
    <div>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="active">
                <Link to="/">
                  <i class="fa fa-dashboard"></i>Main Menu
                </Link>
              </li>
              <li>
                <Link to="/slider">
                  <i class="fa fa-user-md"></i> Slider
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i class="fa fa-user-md"></i> Services
                </Link>
              </li>
              <li className="submenu">
                <a href="#." onClick={() => toggleSubmenu("subservices")}>
                  <i className="fa fa-user"></i> <span>Sub Services </span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "subservices" ? "rotate" : ""}`}></span>
                </a>
                <ul className={openSubmenu === "subservices" ? "open" : ""}>
                  <li><a href="/public-disclosure">Public Disclosure</a></li>
                  <li><a href="/citizen-charter">Citizen Charter</a></li>
                  <li><a href="/rts">Right to Service</a></li>
                  <li><a href="#.">Development Plan</a></li>
                  <li><a href="#.">Downloads</a></li>
                  <li><a href="#.">City Map</a></li>
                  <li><a href="#.">Elected Wing</a></li>
                  <li><a href="#.">Official Publications</a></li>
                </ul>
              </li>
              <li>
                <Link to="/home-video">
                  <i class="fa fa-user-md"></i> Home Video
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <i class="fa fa-wheelchair"></i> News Update
                </Link>
              </li>
              <li>
                <Link to="/tenders">
                  <i class="fa fa-calendar"></i> Tenders
                </Link>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("gallery")}>
                  <i className="fa fa-book"></i> <span>Gallery </span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "gallery" ? "rotate" : ""}`}></span>
                </Link>
                <ul className={openSubmenu === "gallery" ? "open" : ""}>
                  <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/gov-web-link">
                  <i class="fa fa-calendar-check-o"></i>Govt. Website Links
                </Link>
              </li>
              <li>
                <Link to="/departments">
                  <i class="fa fa-calendar-check-o"></i>Departments
                </Link>
              </li>

              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("subdepartments")}>
                  <i className="fa fa-money"></i> <span>Sub Departments</span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "subdepartments" ? "rotate" : ""}`}></span>
                </Link>
                <ul className={openSubmenu === "subdepartments" ? "open" : ""}>
                  <li><Link to="#.">General Admin Department</Link></li>
                  <li><Link to="#.">Audit Department</Link></li>
                  <li><Link to="#.">Tax Department</Link></li>
                  <li><Link to="#.">Account Department</Link></li>
                  <li><Link to="#.">Town Planning</Link></li>
                  <li><Link to="#.">Electrical Department</Link></li>
                  <li><Link to="#.">Public Work Department (PWD)</Link></li>
                  <li><Link to="#.">Milkat (Income)</Link></li>
                  <li><Link to="#.">E-Governance Department</Link></li>
                  <li><Link to="#.">Health Department</Link></li>
                  <li><Link to="#.">WCD (Women and Child Development)</Link></li>
                  <li><Link to="#.">Advertisement Department</Link></li>
                  <li><Link to="#.">Education Department</Link></li>
                  <li><Link to="#.">Security Department</Link></li>
                  <li><Link to="#.">Vehicle Department</Link></li>
                  <li><Link to="#.">NULM Department</Link></li>
                  <li><Link to="#.">Hospital Department</Link></li>
                  <li><Link to="#.">Fire Department</Link></li>
                  <li><Link to="#.">Legal Department</Link></li>
                  <li><Link to="#.">Disability Welfare</Link></li>
                  <li><Link to="#.">Store & Records Department</Link></li>
                  <li><Link to="#.">Marriage Registration</Link></li>
                  <li><Link to="#.">Birth & Death Department</Link></li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("aboutkbmc")}>
                  <i className="fa fa-video-camera camera"></i> <span> About KBMC</span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "aboutkbmc" ? "rotate" : ""}`}></span>
                </Link>
                <ul className={openSubmenu === "aboutkbmc" ? "open" : ""}>
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/ward">Wards</Link></li>
                  <li><Link to="/elected-wings">Elected Wings</Link></li>
                  <li><Link to="/function">Functions</Link></li>
                  <li><Link to="/previous-officer">Previous Chief officer's of the council</Link></li>
                  <li><Link to="/previous-president">Previous President's</Link></li>
                  <li><Link to="/award">Award's</Link></li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("cityprofile")}>
                  <i className="fa fa-video-camera camera"></i> <span> City Profile</span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "cityprofile" ? "rotate" : ""}`}></span>
                </Link>
                <ul className={openSubmenu === "cityprofile" ? "open" : ""}>
                  <li><Link to="/property-holder">Property Holder</Link></li>
                  <li><Link to="/muncipal-properties">Muncipal Properties</Link></li>
                  <li><Link to="/schools">Schools</Link></li>
                  <li><Link to="/garden">Gardens</Link></li>
                  <li><Link to="/electric">Electric</Link></li>
                  <li><Link to="/roads">Roads</Link></li>
                  <li><Link to="/tree-census">Tree Census</Link></li>
                  <li><Link to="/health">Health</Link></li>
                  <li><Link to="/ponds-talao">Ponds / Talao</Link></li>
                  <li><Link to="/fire-station">Fire Station</Link></li>
                  <li><Link to="private-hospital">Private Hospital</Link></li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("schemes")}>
                  <i className="fa fa-video-camera camera"></i> <span>Schemes</span>{" "}
                  <span className={`menu-arrow ${openSubmenu === "schemes" ? "rotate" : ""}`}></span>
                </Link>
                <ul className={openSubmenu === "schemes" ? "open" : ""}>
                  <li><Link to="#.">NULM</Link></li>
                  <li><Link to="#.">PMAY</Link></li>
                  <li><Link to="#.">NUHM</Link></li>
                  <li><Link to="#.">Amrut</Link></li>
                  <li><Link to="#.">Swachh Bharat</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/user">
                  <i class="fa fa-calendar-check-o"></i>Add User
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <i class="fa fa-calendar-check-o"></i>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions">
                  <i class="fa fa-calendar-check-o"></i>Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  <i class="fa fa-calendar-check-o"></i>Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/notification">
                  <i class="fa fa-calendar-check-o"></i>Notifications{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
