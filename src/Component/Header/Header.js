import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
      <span className="navbar-brand text-white">KBMC Dashboard</span>
      <div className="ml-auto d-flex align-items-center">
        <span className="text-white me-3">Admin</span>
        <img
          src="https://via.placeholder.com/30"
          alt="profile"
          className="rounded-circle"
        />
      </div>
    </nav>
  );
};

export default Header;
