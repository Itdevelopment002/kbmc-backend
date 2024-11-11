import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/user.jpg";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 990);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside or on an item
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Update screen size state and auto-close sidebar for large screens
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth > 990;
      setIsScreenLarge(isLarge);
      if (isLarge) {
        setIsSidebarOpen(false); // Auto-close sidebar on large screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Link
        id="mobile_btn"
        className="mobile_btn float-left"
        to="#"
        onClick={(e) => {
          e.preventDefault();
          toggleSidebar();
        }}
      >
        <i className="fa fa-bars"></i>
      </Link>
        <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <Link to="#." className="logo">KBMC</Link>
          </div>
          <Link
            id="mobile_btn"
            className="mobile_btn float-left"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              toggleSidebar();
            }}
          >
            <i className="fa fa-bars"></i>
          </Link>
          <ul className="nav user-menu float-right">
            <li className="nav-item dropdown d-none d-sm-block">
              <Link to="#." className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="badge badge-pill bg-danger float-right">3</span>
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span>Notifications</span>
                </div>
                <div className="drop-scroll">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img alt="John Doe" src={img} className="img-fluid" />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added new task
                              <span className="noti-title"> Patient appointment booking</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">4 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    {/* Add more notification items as needed */}
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="activities.html">View all Notifications</Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow">
              <Link to="#." className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                <span className="user-img">
                  <img className="rounded-circle" src={img} width="24" alt="Admin" />
                  <span className="status online"></span>
                </span>
                <span>Admin</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="profile.html">My Profile</Link>
                <Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
                <Link className="dropdown-item" to="settings.html">Settings</Link>
                <Link className="dropdown-item" to="login.html">Logout</Link>
              </div>
            </li>
          </ul>
          <div className="dropdown mobile-user-menu float-right">
            <Link to="#." className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-ellipsis-v"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="profile.html">My Profile</Link>
              <Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
              <Link className="dropdown-item" to="settings.html">Settings</Link>
              <Link className="dropdown-item" to="login.html">Logout</Link>
            </div>
          </div>
        </div>
      </div>
            {/* Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

    </>
  );
};

export default Header;
