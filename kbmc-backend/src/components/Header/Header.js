import React from "react";
import img from "../../assets/img/user.jpg"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <div class="main-wrapper">
        <div class="header">
          <div class="header-left">
            <Link to="#." class="logo">
              KBMC
            </Link>
          </div>
          <Link id="mobile_btn" class="mobile_btn float-left" to="#sidebar">
            <i class="fa fa-bars"></i>
          </Link>
          <ul class="nav user-menu float-right">
            <li class="nav-item dropdown d-none d-sm-block">
              <Link
                to="#."
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i class="fa fa-bell-o"></i>{" "}
                <span class="badge badge-pill bg-danger float-right">3</span>
              </Link>
              <div class="dropdown-menu notifications">
                <div class="topnav-dropdown-header">
                  <span>Notifications</span>
                </div>
                <div class="drop-scroll">
                  <ul class="notification-list">
                    <li class="notification-message">
                      <Link to="activities.html">
                        <div class="media">
                          <span class="avatar">
                            <img
                              alt="John Doe"
                              src={img}
                              class="img-fluid"
                            />
                          </span>
                          <div class="media-body">
                            <p class="noti-details">
                              <span class="noti-title">John Doe</span> added new
                              task{" "}
                              <span class="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">4 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="notification-message">
                      <Link to="activities.html">
                        <div class="media">
                          <span class="avatar">V</span>
                          <div class="media-body">
                            <p class="noti-details">
                              <span class="noti-title">Tarah Shropshire</span>{" "}
                              changed the task name{" "}
                              <span class="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">6 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="notification-message">
                      <Link to="activities.html">
                        <div class="media">
                          <span class="avatar">L</span>
                          <div class="media-body">
                            <p class="noti-details">
                              <span class="noti-title">Misty Tison</span> added{" "}
                              <span class="noti-title">Domenic Houston</span>{" "}
                              and <span class="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span class="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">8 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="notification-message">
                      <Link to="activities.html">
                        <div class="media">
                          <span class="avatar">G</span>
                          <div class="media-body">
                            <p class="noti-details">
                              <span class="noti-title">Rolland Webber</span>{" "}
                              completed task{" "}
                              <span class="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">12 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="notification-message">
                      <Link to="activities.html">
                        <div class="media">
                          <span class="avatar">V</span>
                          <div class="media-body">
                            <p class="noti-details">
                              <span class="noti-title">Bernardo Galaviz</span>{" "}
                              added new task{" "}
                              <span class="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">2 days ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="topnav-dropdown-footer">
                  <Link to="activities.html">View all Notifications</Link>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown has-arrow">
              <Link
                to="#."
                class="dropdown-toggle nav-link user-link"
                data-toggle="dropdown"
              >
                <span class="user-img">
                  <img
                    class="rounded-circle"
                    src={img}
                    width="24"
                    alt="Admin"
                  />
                  <span class="status online"></span>
                </span>
                <span>Admin</span>
              </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="profile.html">
                  My Profile
                </Link>
                <Link class="dropdown-item" to="edit-profile.html">
                  Edit Profile
                </Link>
                <Link class="dropdown-item" to="settings.html">
                  Settings
                </Link>
                <Link class="dropdown-item" to="login.html">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
          <div class="dropdown mobile-user-menu float-right">
            <Link
              to="#."
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-v"></i>
            </Link>
            <div class="dropdown-menu dropdown-menu-right">
              <Link class="dropdown-item" to="profile.html">
                My Profile
              </Link>
              <Link class="dropdown-item" to="edit-profile.html">
                Edit Profile
              </Link>
              <Link class="dropdown-item" to="settings.html">
                Settings
              </Link>
              <Link class="dropdown-item" to="login.html">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
