import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="active">
                <a href="/">
                  <i class="fa fa-dashboard"></i>Main Menu
                </a>
              </li>
              <li>
                <a href="/slider">
                  <i class="fa fa-user-md"></i> Slider
                </a>
              </li>
              <li>
                <a href="/services">
                  <i class="fa fa-user-md"></i> Services
                </a>
              </li>
              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-user"></i> <span>Sub Services </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/public-disclosure">Public Disclosure</a>
                  </li>
                  <li>
                    <a href="/citizen-charter">Citizen Charter</a>
                  </li>
                  <li>
                    <a href="/rts">Right to Service</a>
                  </li>
                  <li>
                    <a href="#.">Development Plan</a>
                  </li>
                  <li>
                    <a href="#.">Downloads</a>
                  </li>
                  <li>
                    <a href="#.">City Map</a>
                  </li>
                  <li>
                    <a href="#.">Elected Wing</a>
                  </li>
                  <li>
                    <a href="#.">Official Publications</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/home-video">
                  <i class="fa fa-user-md"></i> Home Video
                </a>
              </li>
              <li>
                <a href="/news">
                  <i class="fa fa-wheelchair"></i> News Update
                </a>
              </li>
              <li>
                <a href="/tender">
                  <i class="fa fa-calendar"></i> Tenders
                </a>
              </li>
              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-book"></i> <span>Gallery </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/photo-gallery">Photo Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/gov-web-link">
                  <i class="fa fa-calendar-check-o"></i>Govt. Website Links
                </a>
              </li>
              <li>
                <a href="/departments">
                  <i class="fa fa-calendar-check-o"></i>Departments
                </a>
              </li>

              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-money"></i> <span>Sub Departments</span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="#.">General Admin Department</a>
                  </li>
                  <li>
                    <a href="#.">Audit Department</a>
                  </li>
                  <li>
                    <a href="#.">Tax Department</a>
                  </li>
                  <li>
                    <a href="#.">Account Department</a>
                  </li>
                  <li>
                    <a href="#.">Town Planning</a>
                  </li>
                  <li>
                    <a href="#.">Electrical Department</a>
                  </li>
                  <li>
                    <a href="#.">Public Work Department (PWD)</a>
                  </li>
                  <li>
                    <a href="#.">Milkat (Income)</a>
                  </li>
                  <li>
                    <a href="#.">E-Governance Department</a>
                  </li>
                  <li>
                    <a href="#.">Health Department</a>
                  </li>
                  <li>
                    <a href="#.">WCD (Women and Child Development)</a>
                  </li>
                  <li>
                    <a href="#.">Advertisement Department</a>
                  </li>
                  <li>
                    <a href="#.">Education Department</a>
                  </li>
                  <li>
                    <a href="#.">Security Department</a>
                  </li>
                  <li>
                    <a href="#.">Vehicle Department</a>
                  </li>
                  <li>
                    <a href="#.">NULM Department</a>
                  </li>
                  <li>
                    <a href="#.">Hospital Department</a>
                  </li>
                  <li>
                    <a href="#.">Fire Department</a>
                  </li>
                  <li>
                    <a href="#.">Legal Department</a>
                  </li>
                  <li>
                    <a href="#.">Disability Welfare</a>
                  </li>
                  <li>
                    <a href="#.">Store & Records Department</a>
                  </li>
                  <li>
                    <a href="#.">Marriage Registration</a>
                  </li>
                  <li>
                    <a href="#.">Birth & Death Department</a>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-video-camera camera"></i>{" "}
                  <span> About KBMC</span> <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/ward">Wards</a>
                  </li>
                  <li>
                    <a href="/elected-wings">Elected Wings</a>
                  </li>
                  <li>
                    <a href="/function">Functions</a>
                  </li>
                  <li>
                    <a href="/previous-officer">
                      Previous Chief officer's of the council
                    </a>
                  </li>
                  <li>
                    <a href="/previous-president">Previous President's</a>
                  </li>
                  <li>
                    <a href="/award">Award's</a>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-video-camera camera"></i>{" "}
                  <span> City Profile</span> <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/property-holder">Property Holder</a>
                  </li>
                  <li>
                    <a href="/muncipal-propertise">Muncipal Properties</a>
                  </li>
                  <li>
                    <a href="/schools">Schools</a>
                  </li>
                  <li>
                    <a href="/gardens">Gardens</a>
                  </li>
                  <li>
                    <a href="/electric">Electric</a>
                  </li>
                  <li>
                    <a href="/roads">Roads</a>
                  </li>
                  <li>
                    <a href="/tree-census">Tree Census</a>
                  </li>
                  <li>
                    <a href="/health">Health</a>
                  </li>
                  <li>
                    <a href="/ponds-talao">Ponds / Talao</a>
                  </li>
                  <li>
                    <a href="/fire-station">Fire Station</a>
                  </li>
                  <li>
                    <a href="private-hospital">Private Hospital</a>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#.">
                  <i class="fa fa-video-camera camera"></i> <span>Schemes</span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="#.">NULM</a>
                  </li>
                  <li>
                    <a href="#.">PMAY</a>
                  </li>
                  <li>
                    <a href="#.">NUHM</a>
                  </li>
                  <li>
                    <a href="#.">Amrut</a>
                  </li>
                  <li>
                    <a href="#.">Swachh Bharat</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/user">
                  <i class="fa fa-calendar-check-o"></i>Add User
                </a>
              </li>
              <li>
                <a href="/privacy-policy">
                  <i class="fa fa-calendar-check-o"></i>Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions">
                  <i class="fa fa-calendar-check-o"></i>Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us">
                  <i class="fa fa-calendar-check-o"></i>Contact Us{" "}
                </a>
              </li>
              <li>
                <a href="/notification">
                  <i class="fa fa-calendar-check-o"></i>Notifications{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
