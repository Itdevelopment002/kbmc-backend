import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuId) => {
    setOpenSubmenu((prevId) => (prevId === menuId ? null : menuId));
  };

  const handleItemClick = () => {
    closeSidebar(); // Close the sidebar when an item is clicked
  };


  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay opened"
          onClick={closeSidebar} 
        />
      )}

      {/* Sidebar component */}
      <div className={`sidebar ${isOpen ? "opened" : ""}`}>
        <div class="sidebar-inner">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="active">
                <Link to="/" onClick={handleItemClick}>
                  <i class="fa fa-dashboard"></i>Main Menu
                </Link>
              </li>
              <li>
                <Link to="/slider" onClick={handleItemClick}>
                  <i class="fa fa-user-md"></i> Slider
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleItemClick}>
                  <i class="fa fa-user-md"></i> Services
                </Link>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("subservices")}>
                  <i className="fa fa-user"></i> <span>Sub Services </span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "subservices" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "subservices" ? "open" : ""}>
                  <li>
                    <Link to="/public-disclosure" onClick={handleItemClick}>Public Disclosure</Link>
                  </li>
                  <li>
                    <Link to="/citizen-charter" onClick={handleItemClick}>Citizen Charter</Link>
                  </li>
                  <li>
                    <Link to="/rts" onClick={handleItemClick}>Right to Service</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Development Plan</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Downloads</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>City Map</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Elected Wing</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Official Publications</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/home-videos" onClick={handleItemClick}>
                  <i class="fa fa-user-md"></i> Home Video
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={handleItemClick}>
                  <i class="fa fa-wheelchair"></i> News Update
                </Link>
              </li>
              <li>
                <Link to="/tenders" onClick={handleItemClick}>
                  <i class="fa fa-calendar"></i> Tenders
                </Link>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("gallery")}>
                  <i className="fa fa-book"></i> <span>Gallery </span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "gallery" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "gallery" ? "open" : ""}>
                  <li>
                    <Link to="/photo-gallery" onClick={handleItemClick}>Photo Gallery</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/gov-website-link" onClick={handleItemClick}>
                  <i class="fa fa-calendar-check-o"></i>Govt. Website Links
                </Link>
              </li>
              <li>
                <Link to="/departments" onClick={handleItemClick}>
                  <i class="fa fa-calendar-check-o"></i>Departments
                </Link>
              </li>

              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("subdepartments")}>
                  <i className="fa fa-money"></i> <span>Sub Departments</span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "subdepartments" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "subdepartments" ? "open" : ""}>
                  <li>
                    <Link to="#." onClick={handleItemClick}>General Admin Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Audit Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Tax Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Account Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Town Planning</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Electrical Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Public Work Department (PWD)</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Milkat (Income)</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>E-Governance Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Health Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>WCD (Women and Child Development)</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Advertisement Department</Link>
                  </li>
                  <li>
                    <Link to="#.">Education Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Security Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Vehicle Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>NULM Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Hospital Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Fire Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Legal Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Disability Welfare</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Store & Records Department</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Marriage Registration</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Birth & Death Department</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("aboutkbmc")}>
                  <i className="fa fa-video-camera camera"></i>{" "}
                  <span> About KBMC</span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "aboutkbmc" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "aboutkbmc" ? "open" : ""}>
                  <li>
                    <Link to="/history" onClick={handleItemClick}>History</Link>
                  </li>
                  <li>
                    <Link to="/wards" onClick={handleItemClick}>Wards</Link>
                  </li>
                  <li>
                    <Link to="/elected-wings" onClick={handleItemClick}>Elected Wings</Link>
                  </li>
                  <li>
                    <Link to="/functions" onClick={handleItemClick}>Functions</Link>
                  </li>
                  <li>
                    <Link to="/previous-officers" onClick={handleItemClick}>
                      Previous Chief officers of the council
                    </Link>
                  </li>
                  <li>
                    <Link to="/previous-presidents" onClick={handleItemClick}>Previous Presidents</Link>
                  </li>
                  <li>
                    <Link to="/awards" onClick={handleItemClick}>Awards</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("cityprofile")}>
                  <i className="fa fa-video-camera camera"></i>{" "}
                  <span> City Profile</span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "cityprofile" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "cityprofile" ? "open" : ""}>
                  <li>
                    <Link to="/property-holder" onClick={handleItemClick}>Property Holder</Link>
                  </li>
                  <li>
                    <Link to="/muncipal-properties" onClick={handleItemClick}>Muncipal Properties</Link>
                  </li>
                  <li>
                    <Link to="/schools" onClick={handleItemClick}>Schools</Link>
                  </li>
                  <li>
                    <Link to="/garden" onClick={handleItemClick}>Gardens</Link>
                  </li>
                  <li>
                    <Link to="/electric" onClick={handleItemClick}>Electric</Link>
                  </li>
                  <li>
                    <Link to="/roads" onClick={handleItemClick}>Roads</Link>
                  </li>
                  <li>
                    <Link to="/tree-census" onClick={handleItemClick}>Tree Census</Link>
                  </li>
                  <li>
                    <Link to="/health" onClick={handleItemClick}>Health</Link>
                  </li>
                  <li>
                    <Link to="/ponds-talao" onClick={handleItemClick}>Ponds / Talao</Link>
                  </li>
                  <li>
                    <Link to="/fire-station" onClick={handleItemClick}>Fire Station</Link>
                  </li>
                  <li>
                    <Link to="/private-hospital" onClick={handleItemClick}>Private Hospital</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#." onClick={() => toggleSubmenu("schemes")}>
                  <i className="fa fa-video-camera camera"></i>{" "}
                  <span>Schemes</span>{" "}
                  <span
                    className={`menu-arrow ${
                      openSubmenu === "schemes" ? "rotate" : ""
                    }`}
                  ></span>
                </Link>
                <ul className={openSubmenu === "schemes" ? "open" : ""}>
                  <li>
                    <Link to="#." onClick={handleItemClick}>NULM</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>PMAY</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>NUHM</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Amrut</Link>
                  </li>
                  <li>
                    <Link to="#." onClick={handleItemClick}>Swachh Bharat</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/user">
                  <i class="fa fa-calendar-check-o" onClick={handleItemClick}></i>Add User
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <i class="fa fa-calendar-check-o" onClick={handleItemClick}></i>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions">
                  <i class="fa fa-calendar-check-o" onClick={handleItemClick}></i>Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  <i class="fa fa-calendar-check-o" onClick={handleItemClick}></i>Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/notification">
                  <i class="fa fa-calendar-check-o" onClick={handleItemClick}></i>Notifications{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
